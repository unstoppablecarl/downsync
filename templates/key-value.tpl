<div class="key-value {{class}}"{{{style_font_size font_size}}}>
    {{#if note}}
    <span class="key">{{{name}}}</span><span
            class="note"> <strong>[</strong>{{{note}}}<strong>]</strong>{{#if desc}}:{{/if}}
    </span>
    {{else}}
    <span class="key">{{{name}}}{{#if desc}}:{{/if}}</span>
    {{/if}}
    {{{desc}}}
</div>
