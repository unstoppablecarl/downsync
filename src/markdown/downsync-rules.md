# Downsync Rules (Beta)

Last Updated: Apr 2, 2023

[[toc]]

## Introduction

Downsync is a game with a high level abstraction of future combat in the collapsing world of 2150.

High lethality and technology make conflict outcome less about weapons defeating armor and more about information,
stealth, and deception.

### Design Goals

- create opportunities for players to do surprising things without it being a "gotcha, you forgot X" moment
- hidden units without bookkeeping
- avoid IGOUGO via alternate activation of Taskforce unit groups
- activated unit groupings are flexible and dynamic not strict like platoons or companies and can change from turn to
  turn
- having more/better information than your opponent gives an advantage
- keep the game dynamic by not rewarding staying still
- avoid mechanics that force players to carefully spread out every single unit (area of effect weapons)
- miniature scale is 15mm. Scale is highly abstracted though
- games should take 45-60 min

### Components and Conventions

- Dice: d6
- Measuring tape
- Circular bases of size: 40mm, 70mm, 80mm, 90mm
- Tokens
- Models
- 4x4 ft play area

#### Scale

The scale of the game's models are 15mm (1/100 scale).
The overall scale is highly abstracted as the battlefield is a representation of what holographic imaging would be
available to you when commanding your forces.
Terrain scaled for 6mm-15mm works fine but looks best if it is all roughly the same scale.

#### Measuring

When measuring distances to or from a Unit/Ping, any point on the edge of the base may be used. Players may make
measurements at any time.

### Rolling Dice

Downsync uses 1d6 and 2d6 rolls. When rolling 2d6 add the numbers together to determine the die roll result. Higher
results are always better.

#### Roll Modifiers

Modifiers to die rolls are positive or negative numbers adjustments (example: +X/-X) and are added directly to the die
roll result.

#### Roll Advantage

Each roll starts with an Advantage value of zero. Effects and abilities can add or subtract the Advantage value from a
roll. Positive and Negative Advantage values negate each other. For example a roll with +2 Advantage and -1 Advantage =
1 Advantage and a roll with +1 Advantage and -3 Advantage = -2 Advantage.

*Complicated Advantage combinations are rare, but this should explain how to resolve them for all cases.*

| Advantage Value | Effect where xd6 is the number of dice to be rolled (1d6 or 2d6)                          |
|-----------------|-------------------------------------------------------------------------------------------|
| Negative        | roll an additional 1d6 for each **negative** Advantage Value and keep the **lowest** xd6  |
| Zero            | roll xd6                                                                                  |
| Positive        | roll an additional 1d6 for each **positive** Advantage Value and keep the **highest** xd6 |

### Terminology

- **Active Player**:          The player who is currently taking their turn.
- **Battlefield**:            The 4x4 ft. surface containing models and terrain where the game is taking place.
- **Command Point**:          A resource players have each turn to spend on Command Point Abilities and Unit Actions.
    - **Command Point Ability**:  An Ability that all players may spend Command Points to activate.
    - **Command Point Capacity**: The number of Command Points each player starts each Round with.
- **Force**:                  A collection of Units/Pings controlled by a single player.
    - **Controlling Player**: The Player controlling the Force and its Units/Pings.
    - **Force List**:         Detailed list of the type and quantity of Units/Pings in a Force.
    - **Reserve**:            A collection of a Force's Units to be revealed on the Battlefield.
- **LOS**:                    Line of Sight
- **ROF**:                    Rate of Fire
- **Round**:                  Collection of Turns. A Round ends when all units have been Activated.
- **Taskforce**:              A collection of Units/Pings acting together.
- **Turn**:                   In a Round, players alternate taking turns. Each turn the active player designates a
  Taskforce to act in that turn.
- **Units and Pings**:
    - **Controlling Force/Player**:    The Force/Player a Unit/Ping belongs to.
    - **Signature (SIG)**:      Units and Pings have a Signature that determines the diameter of a Ping or Unit base.
        - **Small**: 60mm
        - **Medium**: 70mm
        - **Large**: 80mm
    - **Unit**:               A vehicle model on a base (small/medium/large) or a group of multiple infantry bases (
      40mm)
        - **Multi-Base Unit**:  A Unit that has multiple Infantry Bases instead of one larger base.
        - **Infantry Base**:  A 40mm circular base with infantry model(s) on it.
        - **Unit Activation**:  Performing a single unit's action(s).
        - **Activated Unit**: Unit that has already completed its Unit Activation this Round.
    - **Ping**:               Circular marker or base representing a sensor Signature indicating a hidden Unit.

## Force Lists

When creating a Force List all units must be from the same Faction. The Game Size determines the number of
small/medium/large Unit slots your force list will contain. For each Unit size slot select a unit of matching size from
your Faction.

*For example: a Small Game Coalition Force List contains any 2 small Units, any 3 medium Units, and any 1 large Unit.
The same Unit may be included multiple times.*

### Game Sizes

<div class="row">
<div class="col-6">

<h4>Small Game</h4>

| Unit Signature | Quantity |
|----------------|----------|
| Small          | 2        |
| Medium         | 3        |
| Large          | 1        |

**Command Point Capacity**: 5

</div>
<div class="col-6">

<h4>Standard Game</h4>

| Unit Signature | Quantity |
|----------------|----------|
| Small          | 4        |
| Medium         | 5        |
| Large          | 2        |

**Command Point Capacity**: 7
</div>
</div>

## Sequence of Play

A game is made up of a number of Rounds.
In each Round Forces alternate resolving Taskforce Activations.
In each Taskforce Activation, a Force Activates a selection of Units/Pings called a Taskforce.
When all Units/Pings of both Forces have been Activated the Round ends.

### Setup

- Decide Mission
- Reveal Force Lists
- Determine Starting Player
    - Both players roll 2d6, and the higher rolling player chooses which player will deploy first
    - The player that deploys first will take the first turn of the game as the Active Player
- Deployment
    - For each Unit in a Force List, deploy a Ping of matching Signature (size) within the mission deployment zone

### Round

- Remove all [Activated Tokens](#activated-token)
- Regenerate Command Points. See [Game Size](#game-sizes)
- Each Player alternates resolving Taskforce Activations until all Units/Pings have been activated
    - The player currently resolving a Taskforce Activation is the Active Player and the opposing Player is the
      Non-Active
      Player
    - The Non-Active Player at the end of a Round becomes the first Active Player in the next Round

*A Player is still considered the Non-Active Player if they initiate a [Reaction Engagement](#reaction-engagements).*

### Turn Overview

The Active Player performs a Taskforce Activation.

#### Taskforce Activation Phases

- **Designate**: Select Units/Pings to be included in the Taskforce
- **Reveal**: Any Pings in the Taskforce may be Revealed
- **Refresh**: Regenerate Countermeasures and resolve special abilities
- **Move**: Move all Units/Pings in the Taskforce
    - **Reaction Engagement (optional)**: The non-active player may initiate a Reaction Engagement
- **Unit Activation**: Activate each Unit in the Taskforce one at a time

#### Designate

The Active Player declares which Units/Pings will be included in the Taskforce.
Any un-activated Units/Pings in the player's force may be included.
Designated Units are now considered to be in the Taskforce (aka Taskforce Units).

#### Refresh

Taskforce Units are Refreshed in an order determined by their controlling Player.

Each Taskforce Unit:

- Removes [Overwatch Tokens](#overwatch-token)
- [Regenerates Countermeasure Tokens](#regenerating-countermeasures)
- May spend 1 Command Point to remove a [Stun Token](#stun-token)
- Resolves special abilities that trigger when a Unit is Refreshed

In a Reaction Engagement Non-active Units are refreshed when they [Resolve Reactions](#resolve-reactions).

#### Reveal

Any Pings in the Taskforce may be Revealed. See: [Revealing](#revealing)

#### Move

Each Taskforce Unit/Ping may move up to its **SPD** in inches in any direction without restriction. Units/Pings may move
through friendly Units/Pings but may not end their movement overlapping. Units/Pings may not move through enemy
Units/Pings.

Pings have a **SPD** of 4.

*In the **Unit Activation** phase Units/Pings may perform a [Move Action](#move-action) to move up to their **SPD** a
second time. This means that it is possible for Units/Pings to move up to 2 x their **SPD** per Round.*

#### Optionally Initiate a Reaction Engagement

The opposing player may initiate a Reaction Engagement. See: [Reaction Engagement](#reaction-engagements).

#### Unit Activation

The Active Player activates their Taskforce Units one at a time until all Taskforce Units have activated.
Each Taskforce Unit may only be activated once and each Unit's activation must be completed before activating the next
unit.

When a Unit is activated it gains 1 Action Point and may perform one or more [Actions](#actions).

After a Unit's Activation is resolved it gains an [Activated Token](#activated-token).

## Visibility

### Line Of Sight (LOS)

For determining LOS, Units/Pings have a volume matching the footprint of their base with a 1" height. Units/Pings have
Line
of Sight to each other if a line can be drawn from any point on one Unit/Ping's volume to any point on the other
Unit/Ping's volume. Friendly and enemy Units/Pings do not block LOS.

### Concealment

<div class="row">
<div class="col-md-6">

A Unit/Ping is concealed if any part of its base overlaps with concealing area terrain, or it is partially
blocked by intervening concealing or LOS blocking terrain.

To determine if a target is concealed by intervening terrain, the acting unit's controlling player selects a point on
the volume of the acting unit that can draw a line to the target. The target is concealed if a line can be drawn from
that point to any point on the volume of the target that crosses intervening terrain.

</div>
<div class="col-md-6">
<p>
<img src="/assets/img/rules-diagrams/LOS-diagram.svg" class="img-fluid img-bordered" alt="LOS Diagram">
</p>
</div>
</div>

## Terrain

### Area Terrain

| Type         | Movement | Concealment |
|--------------|----------|-------------|
| Forest       | -2"      | Yes         |
| Urban        |          | Yes         |
| Rough Ground | -2"      |             |

### Concealing Area Terrain And LOS

<div class="row">
<div class="col-md-6">

For LOS purposes, Units can see through all concealing area terrain within 6" and can see through up to 2" of concealing
area terrain to targets greater than 6" away.

</div>
<div class="col-md-6">
<p>
<img src="/assets/img/rules-diagrams/LOS-diagram-area-terrain.svg" class="img-fluid img-bordered" alt="Area Terrain LOS Diagram">
</p>
</div>
</div>

### Buildings

When measuring the distance from or to a Unit in a building the height of the building is ignored

Only infantry Units may enter a building and a building may only contain as many infantry units as can fit on its roof.
Moving into or out of a building has no movement penalty.

*Players should agree what terrain pieces are considered buildings and how many 40mm infantry bases can fit on each
building before the game starts.*

#### Building Abstraction

For purposes of moving Units and measuring distances, a building is considered a flat 2d object with no height.
When moving into or through a building the Unit is placed on the roof directly above where it would be on the ground.

#### Building LOS

When drawing LOS to and from a Unit in a building, the entire building is considered the volume of that Unit. Where the
Unit is in the building does not matter for LOS, but the position of the Unit is still used for measuring movement.
Building height only affects LOS.

#### Building Size

Buildings should have a footprint of around 3.5x5 inches at most with a height around 1-6 inches.
A building this size would allow 6 infantry bases to fit on the roof comfortably.
Buildings with a larger footprint should be handled in sections where each section is considered a different building.

*Units in tall buildings will have a wide field of view, but will also be visible from a wider range of positions.*

## Units

A Unit is represented by a vehicle model on a base (60mm/70mm/80mm) or multiple infantry bases (40mm) each with one or
more infantry models on it.

### Stats

| Stat                | Description                                                                 | Typical Range |
|---------------------|-----------------------------------------------------------------------------|---------------|
| SIG, Signature      | Small / Medium / Large                                                      |               |
| SPD, Speed          | Movement distance in inches.                                                | 6"            |
| SCAN, Scan          | Stat added to 2d6 when rolling to REVEAL                                    | 5-8           |
| TARG, Targeting     | Stat added to 2d6 when rolling to hit                                       | 5-8           |
| DEF, Defense        | Target Number to hit when rolling an attack                                 | 12-14         |
| CM, Countermeasures | Number of [Countermeasure Tokens](#countermeasure-token) this Unit can have | 0-3           |

### Multi-Base Units

Some units have multiple Infantry Bases instead of a vehicle model. How many Infantry Bases a multi-base Unit has is
indicated on its Unit Card by a number in a circle at the top of the card next to the Unit description. Multi-Base Units
have 1-4 Infantry Bases.

See: [Revealing Infantry Units](#revealing-infantry-units)

### Targeting Multi-Base Units

When performing a Combat Action against a Multi-Base Unit select a single Infantry base to be the target.
Only that Infantry Base is used for determining LOS and Concealment for the Combat Action.
If the Combat Action's effect is KILL, it is applied only to the targeted Infantry Base.

If targeting a building containing Infantry Bases, the Attacker may choose any Infantry Base in the building to be the
target.

#### Multi-Base Unit Countermeasures

Each Infantry Base in a Multi-Base Unit begins the game with a number of Countermeasure Tokens equal to the Unit's
**CM** stat and regenerate Countermeasures the same as Single-Base Units.
When an Infantry Base is hit by a Combat Action it may only use its own Countermeasure Tokens to negate the effect.

#### Multi-Base Unit Coherency

Multi-Base Units must end their movement such that all Infantry Bases in the Unit are within 6" of every other Infantry
Base in the Unit. In other words all infantry bases in a Unit must fit within a 6" diameter circle.

#### Multi-Base Unit Activation

When a Multi-Base Unit activates each Infantry Base gains 1 Action Point and activates one at a time in an order
determined by its Controlling Player.
Infantry Base Activations of the same Unit can not be split up and must be completed before activating another Unit.

#### Multi-Base Unit Actions

Some Multi-Base Units have actions that only specific Teams (single Infantry Base in the Unit) can perform.
For example a unit may have an action with a team value of "1" or "1-3".
Only the team(s) indicated may perform this action.
Actions that do not specify a team can be performed by all Infantry Bases in a unit.

#### Multi-Base Unit Tokens

In Multi-Base Units all non-Countermeasure Tokens belong to the Unit as a whole.
They must be on an Infantry Base to indicate that the Unit is the owner of the Token, but it does not matter which
infantry base(s) they are on. See: [Unit Tokens](#unit-tokens)

## Pings

Pings are an abstract representation of imperfect battlefield information. Each Ping represents a potential unit of
matching Signature. To the enemy, they represent sensor hits indicating a small, medium, or large signature unit. To the
controlling force, they are potential locations of deployment for their Units.

In practice, a Ping is a Unit base without a model on it. When a Ping is Revealed, the Unit model is placed on the
Ping (circular base) and it is now considered a Unit instead of a Ping. Fully based minis may be used and swapped with
pings when revealed if desired.

Pings may only be targeted by actions that have the REVEAL effect.

### Movement

A Ping may never move within 2" and LOS of an enemy Unit or Ping. Pings can never move through or end their movement in,
a position that would cause them to be automatically revealed by an enemy.

All Pings have a **SPD** stat of 4".

*The minimum Unit **SPD** is 4, so a Unit is always the same speed or faster than a Ping.*

### Activating

Pings can only spend their Action Point to perform a Move Action to move an additional 4".

### Revealing

When a Ping is Revealed, the Controlling Player selects a Unit from their Reserve with the same **SIG** (Signature) as
the Ping. This Unit will be Revealed at the Ping's current position.

A Ping is Revealed when:

- The controlling player chooses to Reveal it in the Reveal phase of a Taskforce Activation
- If an enemy Unit ends a move within 2"
- It is hit by an Action with the REVEAL effect

**Note**: A Ping cannot end a move within 2" of an enemy Unit causing itself to be auto revealed.

#### Revealing Units

When Revealed the Unit's model is placed on the Ping (circular base). The circular base and model are now considered a
Revealed Unit
instead of a Ping. What was the Ping becomes the Unit's base.

#### Revealing Infantry Units

When Revealed, Infantry Units place each Infantry Base within 3" of the Ping (including the space occupied by the
Ping) and the Ping is removed.

See: [Multi-Base Units](#multi-base-units)

### Decoy Pings

Decoy Pings are normal Pings added to a Force in excess of the number of Units with a matching Signature.
Decoy Pings are included in a Force when the Force includes Units with a **Decoy\[*\<SIG\>*\]** trait, or are granted by
a scenario.

*For example, a Small Game Force has 3 medium Units and therefore 3 medium Pings.*
*If the Force included 1 medium Decoy Ping, it would begin the game with 3 medium Units and 4 medium Pings.*

When a Ping is revealed, if its Force has more Pings of matching SIG on the Battlefield than Units of matching
SIG in Reserve, the Ping may be Revealed to be a Decoy instead of a Unit and is removed from the game.

After Revealing a Ping as a Unit, if there are no remaining Units of matching SIG in Reserve, any Pings of
matching SIG on the Battlefield are immediately removed from the game.

*For example: Joe's Small Game Force has 3 medium Units and 4 medium Pings.*
*On the Battlefield Joe has 2 medium Units and 2 medium Pings.*
*If Joe reveals a medium Ping to be a Unit, he will now have all of 3 of his medium Units and
1 medium Ping on the Battlefield. The medium Ping must be a Decoy, so it is immediately removed from the game.*

## Command Points

The Command Point Capacity of a game is determined by the [Game Size](#game-sizes).

Players begin each round with a number of Command Points equal to the game's Command Point Capacity. Players cannot
exceed the Command Point Capacity or carry over Command Points from a previous Round.

### Command Point Abilities

- **Boost a Roll**: Add +1 [Advantage](#roll-advantage) to any roll. Only once per roll. Declared before rolling.
- **Remove Stun Token**: Remove a [Stun Token](#stun-token) from a unit when it is [Refreshed](#refresh).
- **Add a Unit to a Reaction Engagement**
  see:  [Adding Additional Non-Active Player Units](#adding-additional-non-active-player-units).
- **Unit Ability**: Some Units have Actions or Traits that cost Command Points on their Unit Card.

## Actions

When a Unit Activates it gains 1 Action Point. A Unit may perform any number of actions provided the action cost is
paid. Each action must be completely resolved before performing another action.

The actions a Unit can perform, and their costs are indicated on the Unit's card.

### Action Stats

| Stat   | Description                                                           |
|--------|-----------------------------------------------------------------------|
| Team   | Which team(s) in a Multi-Base Unit can perform this Action            |
| Cost   | Cost to perform this action                                           |
| Target | Valid targets for this action                                         |
| Range  | Max range in inches, dash (-) indicates unlimited range               |
| ROF    | (Rate of Fire) The number of times this Action repeats when performed |
| Effect | The effect of a successful hit by this weapon                         |

#### Action Labels

Actions labeled "(VS Infantry only)" may only target Infantry Units.

Actions labeled "\[SCAN\]" are [Scan Actions](#scan-action).

#### Action Cost Icons

- **A**: 1 Action Point
- **C**: 1 Command Point
- **A/C**: 1 Action Point **OR** 1 Command Point
- **A+C**: 1 Action Point **AND** 1 Command Point

See: [Command Points](#command-points)

Some actions have no cost and are labeled as a "Free Action". They are resolved like any other action but have No cost.

### Move Action

Although not included on the Unit cards, all units can perform the Move Action for the cost of 1 Action Point. When a
Unit performs a Move Action it may move up to its **SPD** in inches following normal movement rules for terrain.

*This means that Units can move up to double their **SPD** in one turn if they use their Action Point to move a second
time.*

### Overwatch Action

Although not included on the Unit cards, all units can perform the Overwatch Action for the cost of 1 Action Point.
When a Unit performs an Overwatch Action it gains 1 [Overwatch Token](#overwatch-token).
Overwatch Tokens allow Units to perform Reactions even after they have activated with a higher chance to act first.

A Multi-Base Unit can only have 1 Overwatch Token as the whole unit must activate together.

An Overwatch Action may be performed by a Unit participating in a [Reaction Engagement](#reaction-engagements).

### Scan Action

Any Action labeled "\[SCAN\]" is a Scan Action.
When performing a Scan Action, a Scan Check may be performed for each point of the Scan Action's ROF.
Before each Scan Check declare the target of the Scan Check.
Each Scan Check must be resolved before the next.
Each Scan Check may have the same or different targets.

#### Scan Check

When a Unit performs a Scan Check, select an enemy target within the Scan Action's Range and perform a Scan Roll against
it.
Scan targets do not need to be in LOS but must be in range.

**Scan Roll** = 2d6 + SCAN stat + mods vs **Target Defense**.

If the target is a Unit the **Target Defense** is equal to its DEF stat.

If the target is a Ping the **Target Defense** depends on its Signature.

| Ping Signature | DEF (Defense) |
|----------------|---------------|
| Small          | 14            |
| Medium         | 13            |
| Large          | 12            |

| Modifiers                    |     |
|------------------------------|-----|
| Ping Concealed or out of LOS | -1  |

| Outcome                     | Result  |
|-----------------------------|---------|
| Scan Roll >= Target Defense | Success |
| Scan Roll < Target Defense  | Failure |

If the Scan Roll is successful apply the effect of the Action to the target.
If the target is a Unit, it may attempt to negate the effects of the Scan Action
with [Countermeasures](#countermeasures).

*The typical Scan Action has a [REVEAL](#revealing) effect and is performed against an enemy Ping or a Unit with
a [Stealth Token](#stealth-token).
Some Scan Actions with other effects represent electronic warfare or cyber weapons.*

### Scan Action Effects

If a Scan Check results in a successful hit, resolve the Scan Action's effect against the targeted Unit.

| Effect     | Description                                                                                                                            |
|------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **REVEAL** | Pings hit by this effect are [Revealed](#revealing). Units hit by this effect lose a [Stealth Token](#stealth-token) if they have one. |
| **BREACH** | Units hit by this effect gain 1 [Breach Counter](#breach-counter)                                                                      |

Actions with a **&starf;** effect cannot be negated by any type of Countermeasures.
The effect of the Action is described on the Unit Card.

### Combat Actions

Any action with a **KILL** or **STUN** effect is a combat action. Combat actions may only target enemy Units.

When performing a Combat Action, an Attack may be performed for each point of the Combat Action's ROF.
Before each Attack declare the target of the Attack.
Each Attack must be resolved before the next.
Each Attack may have the same or different targets.

### Attacks

When a Unit performs an Attack, select an enemy Unit within the Combat Action's Range and LOS, then perform an Attack
Roll against it.

**Attack Roll** = 2d6 + **TARG** stat + mods vs Unit **DEF**.

| Outcome                     | Result |
|-----------------------------|--------|
| Attack Roll >= Unit Defense | Hit    |
| Attack Roll < Unit Defense  | Miss   |

| Modifiers             | Mod |
|-----------------------|-----|
| Short Range ( < 6" )* | +1  |
| Long Range ( > 16" )  | -1  |
| Target Concealed      | -1  |

*Combat Actions with a range stat of 6" or less do not gain the short range bonus.

If the Attack Roll is successful apply the effect of the Action to the target.
If the target is a Unit, it may attempt to negate the effects of the Combat Action
with [Countermeasures](#countermeasures).

### Combat Action Effects

If an Attack results in a successful hit, resolve the Combat Action's effect against the targeted Unit.

| Effect     | Description                                                                                                            |
|------------|------------------------------------------------------------------------------------------------------------------------|
| **KILL**   | The targeted Unit or Infantry Base of a Multi-Base Unit is destroyed and removed from the game.                        |
| **STUN**   | The targeted Unit gains a [Stun Token](#stun-token). If the Unit already has a Stun Token, there is no further effect. |
| **REVEAL** | Pings hit by this effect are [Revealed](#revealing). Units hit by this effect lose a Stealth Token if they have one.   |

## Special Actions

Actions with a **&starf;** effect are Special Actions and cannot be negated by any type of Countermeasures.
The Action's described effect is resolved immediately.

## Countermeasures

*Countermeasures represent a Unit's ability to avoid attacks and damage.
In Downsync, weapon and Countermeasure details are purposely abstracted to avoid the tedium of tracking what
Countermeasures would be effective against what weapons under what conditions.*

### Spending Countermeasures

When hit by an Attack, a Unit may spend a Countermeasure Token to perform a Countermeasure Check.
If the Countermeasure Check is successful the Combat Action's effect is negated.
The Countermeasure Token is spent regardless of the Countermeasure Check outcome.

When a Countermeasure Check fails, the Unit may spend additional Countermeasure Tokens to attempt to negate the effect.
Each check is resolved before deciding to spend an additional Countermeasure Token.
The unit may continue to spend Countermeasure Tokens until all of them have been spent.

When first hit by an Attack or after failing a Countermeasure Check, a Unit is not required to spend a Countermeasure
Token.
Instead, the Unit may allow the Attack's effect to be applied.

Special Actions (**&starf;** effect) cannot be negated by any type of Countermeasures.

### Spending Hardened Countermeasures

Any time a Unit could spend a Countermeasure Token it may spend a Hardened Countermeasure Token instead.
If it does the Countermeasure Check is automatically successful without a die roll.
The Controlling Player must decide which to use before performing a Countermeasure Check.

#### Countermeasure Check

Roll 3+ on 1d6 to negate the effect of one attack.

| Outcome       | Result  |
|---------------|---------|
| 1d6 roll >= 3 | Success |
| 1d6 roll < 3  | Failure |

[Hardened Countermeasures](#hardened-countermeasure-token) automatically succeed Countermeasure Checks.

#### Regenerating Countermeasures

When a Unit is [Refreshed](#refresh) it replenishes its Countermeasure Tokens so that it has a number equal to its CM
stat. [Hardened Countermeasures](#hardened-countermeasure-token) do not Regenerate.

## Reaction Engagements

Units controlled by a non-active player that have not activated this round (or have
an [Overwatch Token](#overwatch-token)), have a chance to react and possibly act before activating Units.

### Initiating a Reaction Engagement

A non-active player may initiate a reaction engagement after the active player completes the movement phase of their
Taskforce Activation, but before the Unit Activation phase.

#### Who Can Participate

Units that have not activated this round or have an [Overwatch Token](#overwatch-token) are eligible to be selected as
participating Units.

### Resolving a Reaction Engagement

#### Declare Participating Units

The active player's Taskforce Units are automatically participating in the Reaction Engagement.
The active player may declare any number of their non-taskforce units with an Overwatch Token to join the Taskforce and
participate.
Then the non-active player declares which eligible units will participate in the Reaction Engagement.

The number of non-active player Units participating may not exceed the active player's participating unit count without
spending Command Points.
See: [Adding Additional Non-Active Player Units](#adding-additional-non-active-player-units).

The active player's participating units now become part of the active player's Taskforce. The non-active player's
participating units are now considered to be in a Reaction Taskforce. A Reaction Taskforce is identical to a Taskforce
in the case of rules that refer to Units in the same Taskforce.

##### Adding Additional Non-Active Player Units

The non-active player may spend Command Point(s) to include additional unit(s) exceeding the number of active player
units participating at a cost of 1 Command Point per Unit.

#### Reaction Priority Order

Each participating Unit will have a Reaction Priority number and will act in order from highest to lowest. The active
Player wins ties between opposing Units. Ties between friendly Units act in an order determined by their controlling
player. After the Reaction Priority of each participating unit is determined place a d6 indicating the Reaction Priority
next to each participating Unit.

#### Determine Reaction Priority

Each Unit participating in the Reaction Engagement performs a Reaction Priority Roll.

##### Boosting Reaction Priority

Players may spend a Command Point to boost a single Unit's Reaction Priority roll. Starting with the active player, each
player declares zero or more participating Units to boost and spends a Command Point for each one. Then both players
perform a Reaction Priority Roll for each participating Unit.

##### Reaction Priority Roll

A participating Unit rolls 1d6 to determine its Reaction Priority. Keep the die with the result next to the Unit.

| Case                                                | Roll Advantage Adjustments |
|-----------------------------------------------------|----------------------------|
| Unit has an **[Overwatch Token](#overwatch-token)** | +1 Advantage               |
| Unit has a **[Stun Token](#stun-token)**            | -1 Advantage               |
| Roll Boosted                                        | +1 Advantage               |

See: [Roll Advantage](#roll-advantage)

#### Resolve Reactions

In reaction priority order, each Unit may perform a Unit Activation. Instead of performing a Unit Activation, a Unit may
hold its reaction by reducing the value of its Reaction Priority die by 1. Units not in the activating Taskforce
are [Refreshed](#refresh) immediately before resolving their reaction Unit Activation.

A unit with an **Overwatch Token** removes that token immediately before resolving its Unit Activation. When activating,
Units may perform an Overwatch Action as normal and gain an Overwatch token to be used in a later Reaction Engagement.

##### Reaction Engagement Stun Effects

A unit that gains a [Stun Token](#stun-token) during a Reaction Engagement suffers no immediate effect. The Unit has
already rolled for Reaction Priority and will not have to forfeit is Unit Activation. The Stun Token will affect the
Unit's next movement or Unit Activation.

#### Cleanup

After all reactions are resolved each participating Unit gains an Activated Token.

## Missions

All missions are played on a 4x4 foot table and have players on opposite sides of the table.

### Mission: VIP Capture

**Deployment Zones**: Both players deploy Pings within 10" of their table edge

**Setup**: Place a VIP token in the bottom right corner of each player's table side 12" from the right and the back
edge. The token
may be represented by a civilian vehicle model but does not block LOS and can be moved through.

**Scoring**: Players score by capturing the VIP on their opponents side of the table. When a player ends a Taskforce
Activation, each unit within 1" of the opposing VIP scores 1 Victory Point. Each opposing unit within 4" subtracts 1
Victory Point from this amount. Units with multiple Infantry Bases must have more than half of their non-destroyed
unit's bases within
1".

**Victory Conditions**: The game ends when a Force gains its 3rd Victory Point or one side is wiped out.

## Special Rules

### Ability Stacking

Multiple instances of the same ability do not stack unless specified as such.
Including if an ability with the same name comes from multiple sources.

### Rule Specificity

Rules text on Unit Cards take precedence over rulebook text.
Unit Cards are intended to modify the core rules of the game.

## Unit Counters

Unit Counters represent temporary game state typically lasting until the end of a Taskforce Activation.
They do not have included physical components to represent them as they rarely needed.
Unit Cards will describe when a Unit gains an X Counter and what that Counter does.

*A Unit may gain a Tag Counter that is removed at the end of this Taskforce Activation.
So you easily remember which unit is tagged as you complete the Turn.*

*In an atypical Turn where 3 Units have a Tag Counter it becomes more difficult to remember.
In such cases you should to mark Unit Counters with a die, generic token, or creative improvisation.
Then discard them when the Unit Counters are removed.*

### Breach Counter

|                       |                                                                                                                                       |
|-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| **Gained**            | When a Unit suffers the BREACH effect                                                                                                 |
| **Can have multiple** | Yes                                                                                                                                   |
| **Multi-Base Units**  | Gained by the Unit as a whole. If the Unit has X Breach Counters, any targeted Infantry Base is considered to have X Breach Counters. |
| **Removed**           | End of Taskforce Activation                                                                                                           |

## Unit Tokens

Each Unit has tokens represented by 8mm colored cubes. The tokens are placed on the base of the Unit to clearly
show what Unit they belong to. When a Unit *spends* a token it is removed from the Unit's base and set aside.

### Activated Token

A Unit with an Activated Token has activated this Round. The Unit cannot activate, be part of a Taskforce, or
participate in Reaction Engagements until the next round.

|                       |                                                                           |
|-----------------------|:--------------------------------------------------------------------------|
| **Color**             | <span class="token token-shadow" style="background:green"></span> Green   |
| **Gained**            | After Unit Activates                                                      |
| **Can have multiple** | No                                                                        |
| **Multi-Base Units**  | 1 Token for the Unit as each Infantry Base in the Unit activates together |
| **Removed**           | Round start                                                               |

### Countermeasure Token

When a Unit is hit by an Attack it may spend a Countermeasure Token to perform
a [Countermeasure Check](#countermeasure-check).

|                       |                                                                                |
|-----------------------|--------------------------------------------------------------------------------|
| **Color**             | <span class="token token-shadow" style="background:white"></span> White        |
| **Gained**            | When Unit is first [Revealed](#revealing) and when it is [Refreshed](#refresh) |
| **Can have multiple** | Yes                                                                            |
| **Multi-Base Units**  | Each Infantry Base gains Countermeasure Tokens equal to the Unit's CM stat     |
| **Removed**           | When spent                                                                     |

### Hardened Countermeasure Token

When a Unit is hit by an Attack it may spend a Hardened Countermeasure Token to perform and automatically succeed
a [Countermeasure Check](#countermeasure-check).
Hardened Countermeasures do not [Regenerate](#regenerating-countermeasures).

|                       |                                                                                      |
|-----------------------|--------------------------------------------------------------------------------------|
| **Color**             | <span class="token token-shadow" style="background:yellow"></span> Yellow            |
| **Gained**            | When unit is first Revealed                                                          |
| **Can have multiple** | Yes                                                                                  |
| **Multi-Base Units**  | Each Infantry Base gains Hardened Countermeasure Tokens equal to the Unit's CM+ stat |
| **Removed**           | When spent                                                                           |

### Overwatch Token

A Unit with an Overwatch Token can participate in Reaction Engagements even if it has an Activated Token and gains
+1 [Advantage](#roll-advantage) to [Reaction Priority Rolls](#reaction-priority-roll).

|                       |                                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| **Color**             | <span class="token" style="background:purple"></span> Purple                    |
| **Gained**            | After performing an [Overwatch Action](#overwatch-action)                       |
| **Can have multiple** | No                                                                              |
| **Multi-Base Units**  | 1 Token for the Unit as each Infantry Base in the Unit activates together       |
| **Removed**           | Taskforce Designation or after resolving an Activation in a Reaction Engagement |

### Stun Token

A Unit with a Stun Token is considered Stunned and may only perform a move or action when activating and suffers
-1 [Advantage](#roll-advantage) for [Reaction Priority Rolls](#reaction-priority-roll).

|                       |                                                                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Color**             | <span class="token" style="background:orange"></span> Orange                                                                     |
| **Gained**            | After suffering the STUN effect                                                                                                  |
| **Can have multiple** | No                                                                                                                               |
| **Multi-Base Units**  | 1 Token for the Unit. All Infantry bases suffer the effects of STUN                                                              |
| **Removed**           | After resolving an activation that suffered its effect or spending a Command Point to remove it in the [Refresh](#refresh) phase |

### Stealth Token

A Unit with a Stealth Token cannot be targeted by enemy attacks.
A Unit loses its Stealth Token immediately after resolving a Combat Action and in all cases that would cause a Ping to
be [Revealed](#revealing).
A Unit cannot gain a Stealth Token if an enemy Unit is within 2".

|                       |                                                                                                                                                                  |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Color**             | <span class="token" style="background:black"></span> Black                                                                                                       |
| **Gained**            | By unit special abilities                                                                                                                                        |
| **Can have multiple** | No                                                                                                                                                               |
| **Multi-Base Units**  | 1 Token for the Unit. All Infantry bases benefit from the effects of a Stealth Token                                                                             |
| **Removed**           | A Unit looses the token when it makes an attack action or an enemy Unit successfully REVEALS it or an enemy Unit (or it) ends a movement or placement within 2". |

### Unit Token Quick Reference

| Token                                                         | Color                                                                     |
|---------------------------------------------------------------|---------------------------------------------------------------------------|
| **[Command Point](#command-points)**                          | <span class="token" style="background:blue"></span> Blue                  |
| **[Activated](#activated-token)**                             | <span class="token" style="background:green"></span> Green                |
| **[Countermeasure](#countermeasure-token)**                   | <span class="token token-shadow" style="background:white"></span> White   |
| **[Hardened Countermeasure](#hardened-countermeasure-token)** | <span class="token token-shadow" style="background:yellow"></span> Yellow |
| **[Overwatch](#overwatch-token)**                             | <span class="token" style="background:purple"></span> Purple              |
| **[Stun](#stun-token)**                                       | <span class="token" style="background:orange"></span> Orange              |
| **[Stealth](#stealth-token)**                                 | <span class="token" style="background:black"></span> Black                |
