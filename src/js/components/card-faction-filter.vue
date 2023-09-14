<template>
    <div class="app-card-filter">
        <div class="dropdown my-1 me-1 d-inline-block">
            <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false">

                Filter Factions
                <svg class="bi" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false">
                    <use :href="SVG_SPRITE_PATH + '#filter'"></use>
                </svg>

            </button>
            <form class="dropdown-menu p-4">
                <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="allSelected" @change="onCheckAll"
                               id="filter-all"/>
                        <label class="form-check-label">All</label>
                    </div>
                </div>
                <div class="mb-3" v-for="faction in factions">
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               :value="faction.faction_slug"
                               v-model="checkedFactions"
                               :id="'filter-' + faction.faction_slug"
                        />
                        <label class="form-check-label" :for="'filter-' + faction.faction_slug">
                            {{ faction.faction }}
                        </label>
                        <span class="btn btn-light btn-only" @click="selectOnly(faction.faction_slug)">only</span>
                    </div>
                </div>
            </form>
        </div>

        <div class="dropdown my-1 me-1 d-inline-block">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
                View: Web
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" :href="`${web_url}#${currentHash}`">Web</a></li>
                <li><a class="dropdown-item" :href="printUrl">Print</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

let count = 0
export default {
    props: [
        'factions',
        'web_url',
        'print_all_url',
        'print_faction_dir',
    ],
    inject: ['SVG_SPRITE_PATH'],
    data() {
        return {
            checkedFactions: [],
            resolvingHistoryEvent: false,
        }
    },
    created() {
        window.addEventListener('popstate', (event) => {

            if (!event.state) {
                console.log('popped without state')
                return
            }

            if (event.state.checkedFactions) {

                this.resolvingHistoryEvent = true
                console.log('popped state: ', event.state)
                this.checkedFactions = event.state.checkedFactions
            } else {

                console.log('popped with state without checkedFactions')
            }
        })

        let checkedFactions = []

        if (location.hash) {
            let factionSlugs = this.factions.map(({ faction_slug }) => faction_slug)

            let factions = location.hash.replace('#', '').split(',')

            checkedFactions = factions.filter((faction) => {
                return factionSlugs.includes(faction)
            })

        }

        if (checkedFactions.length) {
            this.checkedFactions = checkedFactions
        } else {
            this.selectAll()
        }
    },
    computed: {
        allSelected() {
            return this.checkedFactions.length === this.factions.length
        },
        currentHash() {
            if (this.allSelected) {
                return 'all'
            }

            return this.checkedFactions.join(',')
        },
        printUrl() {
            if (this.checkedFactions.length === 1) {
                return `${this.print_faction_dir}/${this.checkedFactions}.html`
            }

            return this.print_all_url
        },
    },
    methods: {
        onCheckAll(event) {
            let checked = event.target.checked

            if (checked) {
                this.selectAll()
            } else {
                this.selectNone()
            }
        },
        selectOnly(factionSlug) {
            this.checkedFactions = [factionSlug]
        },
        selectAll() {
            let checkedFactions = []
            this.factions.forEach(({ faction_slug }) => {
                checkedFactions.push(faction_slug)
            })

            this.checkedFactions = checkedFactions
        },
        selectNone() {
            this.checkedFactions = []
        },
    },
    watch: {
        checkedFactions() {
            if (!this.resolvingHistoryEvent) {

                let state = {
                    count: count++,
                    checkedFactions: Array.from(this.checkedFactions),
                }
                console.log('push with state:', state)

                const hash = this.currentHash
                let newUrl = location.pathname + '#' + hash

                window.history.pushState(state, '', newUrl)
                location.hash = hash

                this.resolvingHistoryEvent = false
            }

            this.factions.forEach(({
                                       faction_slug,
                                   }) => {

                let checked = this.checkedFactions.includes(faction_slug)
                let cards = document.querySelectorAll('.faction-' + faction_slug)

                if (checked) {
                    cards.forEach((card) => {
                        card.classList.remove('d-none')
                    })
                } else {
                    cards.forEach((card) => {
                        card.classList.add('d-none')
                    })
                }
            })
        },
    },
}

</script>
<style scoped lang="scss">
.form-check {
    white-space: nowrap;

    .btn-only {
        --bs-btn-padding-y: 0;
        --bs-btn-padding-x: 0.25rem;
        --bs-btn-font-size: 0.75rem;
        margin-left: 0.5em;
    }
}
</style>
