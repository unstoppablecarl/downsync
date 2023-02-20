
# Downsync Rules (Beta)

Last Updated: Feb 6, 2023

[[toc]]

## Introduction

Downsync is a game with a high level abstraction of far future combat with limited information.

High lethality and technology make conflict outcome less about weapons defeating armor and more about information,
stealth, and deception.

### Design Goals

- create opportunities for players to do surprising things without it being a "gotcha, you forgot X" moment
- hidden units with minimal bookkeeping
- units cannot be engaged until detected
- avoid IGOUGO via alternate activation of unit groups called Taskforces
- activated unit groupings are flexible and dynamic not strict like platoons or companies and can change from turn to
  turn
- having more/better information than your opponent gives an advantage
- encourage players to have possible operational taskforce groupings in mind when designating army lists
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
| negative        | roll an additional 1d6 for each **negative** Advantage Value and keep the **lowest** xd6  |
| zero            | roll xd6                                                                                  |
| positive        | roll an additional 1d6 for each **positive** Advantage Value and keep the **highest** xd6 |

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

## Game Sizes

When constructing a force list you are limited by the signature and quantity limits of the game size.

*The current army list building rules are likely to be changed as the game grows and is further tested. This is a
starting point.*

### Small Game

**Command Point Capacity**: 5

| Unit Signature | Quantity |
|----------------|----------|
| Small          | 2        |
| Medium         | 3        |
| Large          | 1        |

### Standard Game

**Command Point Capacity**: 7

| Unit Signature | Quantity |
|----------------|----------|
| Small          | 4        |
| Medium         | 5        |
| Large          | 2        |

## Sequence of Play

A game is made up of a number of Rounds.
In each Round Forces alternate resolving Taskforce Activations.
In each Taskforce Activation, a Force Activates a selection of Units/Pings called a Taskforce.
When all Units/Pings have been Activated the Round ends.

### Setup

- Decide Mission
- Reveal Force Lists
- Determine Starting Player
    - Both players roll 2d6, and the higher rolling player chooses which player will deploy first
    - The player that deploys first will have the first turn of the game
- Deployment
    - For each Unit in a Force List, deploy a Ping of matching Signature (size) within the mission deployment zone

### Round

- Remove all [Activated Tokens](#activated-token)
- Regenerate Command Points. See [Game Size](#game-sizes)
- Each Player alternates resolving Taskforce Activations until all Units/Pings have been activated
    - When starting a new Round the player that did not perform the last Taskforce Activation of the previous Round goes
      first

### Turn Overview

The Active Player resolves a Taskforce Activation.

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

Each Taskforce Unit/Ping may move up to its **SPD** in inches in any direction without restriction.
Pings have a **SPD** of 4.

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

A Unit/Ping is concealed if any part of its base overlaps with concealing area terrain, or it is partially
blocked by intervening concealing or LOS blocking terrain.

To determine if a target is concealed by intervening terrain, the acting unit's controlling player selects a point on
the volume of the acting unit that can draw a line to the target. The target is concealed if a line can be drawn from
that point to any point on the volume of the target that crosses intervening terrain.

### Terrain

#### Area Terrain

| Type         | Movement | Concealment |
|--------------|----------|-------------|
| Forest       | -2"      | Yes         |
| Urban        |          | Yes         |
| Rough Ground | -2"      |             |

#### Concealing Area Terrain And LOS

For LOS purposes, Units can see through all concealing area terrain within 6" and can see through up to 2" of concealing
area terrain to targets greater than 6" away.

#### Buildings

When measuring the distance from or to a Unit in a building the height of the building is ignored

Only infantry Units may enter a building and a building may only contain as many infantry units as can fit on its roof.
Moving into or out of a building has no movement penalty.

*Players should agree what terrain pieces are considered buildings and how many 40mm infantry bases can fit on each
building before the game starts.*

##### Building Abstraction

For purposes of moving Units and measuring distances, a building is considered a flat 2d object with no height.
When moving into or through a building the Unit is placed on the roof directly above where it would be on the ground.

##### Building LOS

When drawing LOS to and from a Unit in a building, the entire building is considered the volume of that Unit. Where the
Unit is in the building does not matter for LOS, but the position of the Unit is still used for measuring movement.
Building height only affects LOS.

##### Building Size

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
| SCAN, Scan          | Stat added to 2d6 when rolling to scan                                      | 5-8           |
| TARG, Targeting     | Stat added to 2d6 when rolling to hit                                       | 5-8           |
| DEF, Defense        | Target Number to hit when rolling an attack                                 | 12-14         |
| CM, Countermeasures | Number of [Countermeasure Tokens](#countermeasure-token) this Unit can have | 0-3           |

### Multi-base Units

Some units have multiple infantry bases instead of a vehicle model. How many infantry bases a
multi-base Unit has is indicated on its Unit Card by a number in a circle next to the Unit description.
When a multi-base Unit activates each infantry base gains 1 Action Point and activates one at a time. Infantry base
Activations of the same Unit can not be split up and must be completed before activating another Unit.

Multi-base Units must end their movement such that all infantry bases in the Unit are within 12" of every other infantry
base in the Unit. In other words all infantry bases in a Unit must fit within a 12" diameter circle.

See: [Revealing Multi-Base Units](#revealing-multi-base-units)

## Pings

Pings are an abstract representation of imperfect battlefield information. Each Ping represents a potential unit of
matching Signature. To the enemy, they represent sensor hits indicating a small, medium, or large signature unit. To the
controlling force, they are potential locations of deployment for their Units.

In practice, a Ping is a Unit base without a model on it. When a Ping is Revealed, the Unit model is placed on the
Ping (circular base) and it is now considered a Unit instead of a Ping. Fully based minis may be used and swapped with
pings when revealed if desired.

### Movement

A Ping may never move within 3" and LOS of an enemy unit or Ping. Pings can never move through or end their movement in,
a position that would cause them to be automatically revealed by an enemy.

All Pings have a **SPD** stat of 4".

*The minimum Unit **SPD** is 4, so a Unit is always the same speed or faster than a Ping.*

### Activating

Pings can only perform a move action to move an additional 4".

### Revealing

When a Ping is Revealed, the Controlling Player selects a Unit from their Reserve with the same **SIG** (Signature) as
the
Ping. This Unit will be Revealed at the Ping's current position.

A Ping is Revealed when:

- The controlling player chooses to Reveal it in the Reveal phase of a Taskforce Activation
- If an enemy Unit ends a move within 2"
- It is successfully [Scanned](#scan-action) by an enemy Unit

**Note**: A Ping cannot end a move within 2" of an enemy Unit causing itself to be auto revealed.

#### Revealing Units

When Revealed the Unit's model is placed on the Ping (circular base). The circular base and model are now considered a
Revealed Unit
instead of a Ping. What was the Ping becomes the Unit's base.

#### Revealing Multi-Base Units

When Revealed, Multi-Base Units place each infantry base within 3" of the Ping (including the space occupied by the
Ping) and the Ping is removed.

See: [Multi-Base Units](#multi-base-units)

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

| Stat   | Description                                        |
|--------|----------------------------------------------------|
| Cost   | Cost to perform this action                        |
| Target | Valid targets for this action                      |
| Range  | Max range in inches*                               |
| ROF    | Number of times this action repeats when performed |
| Effect | The effect of a successful hit by this weapon      |

*Weapons with range dash (-) have an unlimited range

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

An Overwatch Action may be performed by a Unit participating in a [Reaction Engagement](#reaction-engagements).

### Scan Action

Any Action with a **SCAN** effect is a Scan Action.
When performing a Scan Action, a Scan Check may be performed for each ROF of the Scan Action.
Before each Scan Check declare the target of the Scan Action.
Each Scan Check must be resolved before the next.
Each Scan Check of a Scan Action may have the same or different targets.

#### Scan Check

When a Unit performs a Scan Check, select an enemy Ping within the Scan Action Range and resolve a Scan Roll against it.
Scan targets do not need to be in LOS but must be in range.

**Scan Roll** = 2d6 + SCAN stat + mods vs Ping **DEF**.

| Ping Signature | DEF (Defense) |
|----------------|---------------|
| Small          | 14            |
| Medium         | 13            |
| Large          | 12            |

| Modifiers                    |     |
|------------------------------|-----|
| Ping Concealed or out of LOS | -1  |

| Outcome                   | Result                 |
|---------------------------|------------------------|
| Scan Roll >= Ping Defense | [Revealed](#revealing) |
| Scan Roll < Ping Defense  | Failure                |

### Combat Actions

Any Action with a **KILL** or **STUN** effect is a combat action. Combat actions may only target enemy Units.

When a Unit performs a Combat Action it may perform an attack for each point of the Action's ROF.

### Attacks

When a Unit performs an Attack, select an enemy Unit within the Combat Action's Range and LOS, then resolve an Attack
Roll against it.

**Attack Roll** = 2d6 + **TARG** stat + mods vs Unit **DEF**.

| Outcome                                    | Result |
|--------------------------------------------|--------|
| Attacker Targeting + 2d6 >= Target Defense | Hit    |
| Attacker Targeting + 2d6 < Target Defense  | Miss   |

| Modifiers             | Mod |
|-----------------------|-----|
| Short Range ( < 6" )* | +1  |
| Long Range ( > 16" )  | -1  |
| Target Concealed      | -1  |

*Combat Actions with a range stat of 6" or less do not gain the short range bonus.

### Attack Effects

If an Attack results in a successful hit, resolve the Combat Action's Effect against the targeted Unit.

| Effect   | Description                                                                                                                     |
|----------|---------------------------------------------------------------------------------------------------------------------------------|
| **KILL** | The unit is destroyed and removed from the game.                                                                                |
| **STUN** | The target of the attack gains a [Stun Token](#stun-token). If the target already has a Stun Token, there is no further effect. |

### Countermeasures

A unit may spend a Countermeasure Token to perform a Countermeasure Check in an attempt to negate the effect of an
attack. Only **KILL** and **STUN** Effects can be negated. Effects from combat action special rules cannot be prevented
by Countermeasures.

#### Countermeasure Check

Roll 3+ on 1d6 to negate the effect of one attack.

When a Countermeasure Check fails, the unit may spend additional Countermeasure Tokens to attempt to negate the effect.
Each check is resolved before deciding to spend additional Countermeasure Tokens.

| Outcome  | Result  |
|----------|---------|
| 1d6 >= 3 | Success |
| 1d6 < 3  | Failure |

[Hardened Countermeasures](#hardened-countermeasure-token) automatically succeed Countermeasure Checks.

#### Regenerating Countermeasures

When a Unit is [Refreshed](#refresh) it replenishes its Countermeasure Tokens so that it has a number equal to its CM
stat. [Hardened Countermeasures](#hardened-countermeasure-token) do not Regenerate.

# Reaction Engagements

Units controlled by a non-active player that have not activated this round (or have
an [Overwatch Token](#overwatch-token)),
have a chance to react and possibly act before activating Units.

## Initiating a Reaction Engagement

A non-active player may initiate a reaction engagement after the active player completes the movement phase of their
Taskforce Activation, but before the Unit Activation phase.

### Who Can Participate

Units that have not activated this round or have an [Overwatch Token](#overwatch-token) are eligible to be selected as
participating Units.

## Resolving a Reaction Engagement

### Declare Participating Units

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

#### Adding Additional Non-Active Player Units

The non-active player may spend Command Point(s) to include additional unit(s) exceeding the number of active player
units participating at a cost of 1 Command Point per Unit.

### Reaction Priority Order

Each participating Unit will have a Reaction Priority number and will act in order from highest to lowest. The active
Player wins ties between opposing Units. Ties between friendly Units act in an order determined by their controlling
player. After the Reaction Priority of each participating unit is determined place a d6 indicating the Reaction Priority
next to each participating Unit.

### Determine Reaction Priority

Each Unit participating in the Reaction Engagement performs a Reaction Priority Roll.

#### Boosting Reaction Priority

Players may spend a Command Point to boost a single Unit's Reaction Priority roll. Starting with the active player, each
player declares zero or more participating Units to boost and spends a Command Point for each one. Then both players
perform a Reaction Priority Roll for each participating Unit.

#### Reaction Priority Roll

A participating Unit rolls 1d6 to determine its Reaction Priority. Keep the die with the result next to the Unit.

| Case                                                | Roll Advantage Adjustments |
|-----------------------------------------------------|----------------------------|
| Unit has an **[Overwatch Token](#overwatch-token)** | +1 Advantage               |
| Unit has a **[Stun Token](#stun-token)**            | -1 Advantage               |
| Roll Boosted                                        | +1 Advantage               |

See: [Roll Advantage](#roll-advantage)

### Resolve Reactions

In reaction priority order, each Unit may resolve a Unit Activation. Instead of performing a Unit Activation, a Unit may
hold its reaction by reducing the value of its Reaction Priority die by 1. Units not in the activating Taskforce
are [Refreshed](#refresh) immediately before resolving their reaction Unit Activation.

A unit with an **Overwatch Token** removes that token immediately before resolving its Unit Activation. When activating,
Units may perform an Overwatch Action and gain an Overwatch token to be used in a later Reaction Engagement.

#### Reaction Engagement Stun Effects

A unit that gains a [Stun Token](#stun-token) during a Reaction Engagement suffers no immediate effect. The Unit has
already rolled for Reaction Priority and will not have to forfeit is Unit Activation. The Stun Token will affect the
Unit's next movement or Unit Activation.

### Cleanup

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

Multiple instances of the same ability do not stack. Including if an ability with the same name comes from multiple
sources.

## Unit Tokens

Each Unit has tokens represented by 8mm colored wooden cubes. The tokens are placed on the base of the Unit to clearly
show what Unit the tokens belong to. When a Unit *spends* a token it is removed from the Unit's base and set aside.

### Activated Token

A Unit with an Activated Token has activated this Round. The Unit cannot activate, be part of a Taskforce, or
participate in Reaction Engagements until the next round.

|                       |                                                |
|-----------------------|:-----------------------------------------------|
| **Color**             | <span style="color:green">&#9632;</span> Green |
| **Gained**            | After Unit Activates                           |
| **Can have multiple** | No                                             |
| **Removed**           | Round start                                    |

### Countermeasure Token

When a Unit is hit by an Attack it may spend a Countermeasure Token to perform
a [Countermeasure Check](#countermeasure-check).

|                       |                                                                                |
|-----------------------|--------------------------------------------------------------------------------|
| **Color**             | <span class="token-shadow" style="color:white">&#9632;</span> White            |
| **Gained**            | When Unit is first [Revealed](#revealing) and when it is [Refreshed](#refresh) |
| **Can have multiple** | Yes                                                                            |
| **Removed**           | When spent                                                                     |

### Hardened Countermeasure Token

When a Unit is hit by an Attack it may spend a Hardened Countermeasure Token to perform and automatically succeed
a [Countermeasure Check](#countermeasure-check).
Hardened Countermeasures do not [Regenerate](#regenerating-countermeasures).

|                       |                                                                       |
|-----------------------|-----------------------------------------------------------------------|
| **Color**             | <span class="token-shadow" style="color:yellow">&#9632;</span> Yellow |
| **Gained**            | When unit is first Revealed                                           |
| **Can have multiple** | Yes                                                                   |
| **Removed**           | When spent                                                            |

### Overwatch Token

A Unit with an Overwatch Token can participate in Reaction Engagements even if it has an Activated Token and gains
+1 [Advantage](#roll-advantage) to [Reaction Priority Rolls](#reaction-priority-roll).

|                       |                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------|
| **Color**             | <span style="color:purple">&#9632;</span> Purple                                  |
| **Gained**            | After performing an [Overwatch Action](#overwatch-action)                         |
| **Can have multiple** | No                                                                                |
| **Removed**           | Taskforce Designation  or after performing an Activation in a Reaction Engagement |

### Stun Token

A Unit with a Stun Token is considered Stunned and may only perform a move or action when activating and suffers
-1 [Advantage](#roll-advantage) for [Reaction Priority Rolls](#reaction-priority-roll).

|                       |                                                                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Color**             | <span style="color:orange">&#9632;</span> Orange                                                                                  |
| **Gained**            | After suffering the STUN effect                                                                                                   |
| **Can have multiple** | No                                                                                                                                |
| **Removed**           | After performing an activation that suffered its effect or spending a Command Point to remove it in the [Refresh](#refresh) phase |

### Stealth Token

A Unit with a Stealth Token cannot be targeted by enemy attacks. A Unit looses its Stealth Token immediately after
performing an attack Action and in all cases that would cause a Ping to be [Revealed](#revealing). A Unit cannot gain a
Stealth Token if an enemy Unit is within 2".

|                       |                                                                                                                                            |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| **Color**             | <span style="color:black">&#9632;</span> Black                                                                                             |
| **Gained**            | By unit special abilities                                                                                                                  |
| **Can have multiple** | No                                                                                                                                         |
| **Removed**           | A Unit looses the token when it makes an attack or an enemy Unit successful scans it or an enemy Unit (or it) ends its movement within 2". |

### Unit Token Quick Reference

| Token                                                    | Color                                                                 |
|----------------------------------------------------------|-----------------------------------------------------------------------|
| **[Activated](#activated-token)**                        | <span style="color:green">&#9632;</span> Green                        |
| **[Countermeasure](#countermeasures)**                   | <span class="token-shadow" style="color:white">&#9632;</span> White   |
| **[Hardened Countermeasure](#hardened-countermeasures)** | <span class="token-shadow" style="color:yellow">&#9632;</span> Yellow |
| **[Overwatch](#overwatch-token)**                        | <span style="color:purple">&#9632;</span> Purple                      |
| **[Stun](#stun-token)**                                  | <span style="color:orange">&#9632;</span> Orange                      |
| **[Stealth](#stealth-token)**                            | <span style="color:black">&#9632;</span> Black                        |


