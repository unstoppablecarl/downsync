# Downsync Rules (beta)

[[toc]]

## Intro

High level abstraction of far future combat with limited information.

High lethality and technology make conflict outcome less about weapons defeating armor and more about information,
stealth, and deception.

### Design Goals

- create opportunities for players to do surprising things without it being a "gotcha, you forgot X" moment
- hidden units with minimal bookkeeping
- units cannot be engaged until detected
- avoid IGOUGO via alternate activation of unit groups called taskforces
- activated unit groupings are flexible and dynamic not strict like platoons or companies and can change from turn to
  turn
- having more/better information than your opponent gives an advantage
- encourage players to have possible operational taskforce groupings in mind when designating army lists
- keep the game dynamic by not rewarding staying still
- avoid mechanics that force players to carefully spread out every single unit (area of effect weapons)
- miniature scale is 15mm. Scale is highly abstracted though
- games should take 45-60 min

### Components

- Dice: d6
- Measuring tape
- Circular bases of size: 40mm, 70mm, 80mm, 90mm
- Tokens
- Models

### Scale

The scale is highly abstracted. The scale of models is not important as the base they are placed on is what matters in
the game. The table size is intended to be 4x4 ft.

### Measuring

When measuring distances to or from a Unit/Ping, any point on the edge of the base may be used. Players may make
measurements at any time.

### Terminology

- **Active Player**:        The player who is currently taking their turn.
- **Battlefield**:          The 4x4 ft. surface containing models and terrain where the game is taking place.
- **Force**:                A collection of Units/Pings controlled by a single player.
  - **Force List**:         Detailed list of the type and quantity of Units/Pings in a Force.
  - **Reserve**:            A collection of a Force's Units/Pings not on the Battlefield.
  - **Controlling Player**: The Player controlling the Force and its Units/Pings.
- **Unit**:                 A single detected unit represented by one or more models on a base of a given size.
- **Ping**:                 Marker/base representing a sensor Signature indicating a hidden Unit.
- **Controlling Force**:    The Force a Unit/Ping belongs to.
- **Taskforce**:            A collection of Units/Pings acting together.
- **Signature**:            Units and Pings have a Size that determines the diameter of a Ping or Unit base.
  - **Small**: 60mm
  - **Medium**: 70mm
  - **Large**: 80mm
- **Infantry Unit Bases**: 40mm circle (does not have a ping equivalent).
- **Round**:                Collection of Turns. A Round ends when all units have been Activated.
- **Turn**:                 In a Round, players alternate taking turns. Each turn the active player designates a
  Taskforce to act in that turn.
- **Unit Activation**:      Resolving a single unit's actions after moving all units during a Taskforce Activation.
- **Activated Unit**:       Unit that has already completed its Activation this Round.
- **Refresh**: Units are refreshed in the Taskforce Designation phase and immediately before a reaction move/action.
  Some events are triggered when a unit refreshes such as Countermeasure Token regeneration.
- **LOS**: Line of Sight
- **ROF**: Rate of Fire

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
  - For each Unit in a Force List, deploy a Ping of matching Size within the scenarios deployment zone

### Round

- Cleanup: Remove all Activated Tokens
- Each Player alternates resolving Taskforce Activations until all Units/Pings have been activated
- When starting a new Round the player that did not perform the last Taskforce Activation of the previous Round goes
  first

### Turn Overview

The Active Player resolves a Taskforce Activation

#### Taskforce Activation Phases

- **Designate**: Select Units/Pings to be included in the Taskforce
- **Refresh**: Resolve abilities triggered in the Refresh Phase
- **Reveal**: Any Pings in the Taskforce may be Revealed
- **Move**: Move all Units/Pings in the Taskforce
  - **Reaction Engagement (optional)**: The non-active player may initiate a Reaction Engagement
- **Unit Activation**: Activate each Unit in the Taskforce one at a time

#### Designate

The Active Player declares which Units/Pings will be included in the Taskforce. Any unactivated Units/Pings the player's
force may be included. Designated Units are now considered to be "Taskforce Units".

#### Refresh

Remove all overwatch tokens from Taskforce units. Regenerate Countermeasure Tokens. Resolve special abilities that
trigger when a Taskforce Unit is refreshed.

#### Reveal

Any Pings in the Taskforce may be Revealed. See: [Revealing](#revealing)

#### Move

Each Taskforce Unit/Ping may use a different type of movement and may move in any direction without restriction. The
controlling player declares the movement path and destination of the activating Units/Pings. The opposing player may
initiate a Reaction Engagement in response to the movement of the Taskforce. See: **Reactions**

##### Movement Types

| Type   | Move Distance                                                         |
|:-------|:----------------------------------------------------------------------|
| Normal | Up to SPD stat in inches.                                             |                                           
| Double | Up to double SPD stat in inches but does not receive an Action Point. |

### Unit Activation

The Active Player declares a Taskforce Unit to be Activated and then completely resolves its activation then repeats
this process. Each Taskforce Unit may only be activated once and each Unit's activation must be completed before
activating the next unit.

When a Unit is activated it gains 1 Action Point and may perform one or more actions. See: **Actions**.

After a Unit's Activation is resolved it gains an Activated Token.

The opposing player may initiate a Reaction Engagement in response to a Unit action. See: **Reactions**.

## Visibility

### Line Of Sight (LOS)

For determining LOS, Units/Pings have a volume matching the footprint of the base with 1" height. Units/Pings have Line
of Sight to each other if a line can be drawn from any point on one Unit/Ping's volume to any point on the other
Unit/Ping's volume. Friendly and enemy Units/Pings do not block LOS.

### Concealment

A Unit/Ping is concealed if any part of its base/volume overlaps with concealing area terrain or it is partially blocked
by intervening concealing or LOS blocking terrain.

To determine if a target is concealed by intervening terrain, the acting unit's controlling player selects a point on
the volume of the acting unit. The target is concealed if a line can be drawn from that point to any point on the volume
of the target that crosses intervening terrain.

### Terrain

#### Area Terrain

| Type         | Movement | Concealment |
|--------------|----------|-------------|
| Forest       | 50%      | Yes         |
| Urban        | -        | 50%         |
| Rough Ground | 50%      | -           |

#### Concealing Area Terrain

Units can see through all concealing area terrain within 6". Units can see through up to 2" of concealing area terrain
from greater than 6" away. A Unit can never see completely through concealing area terrain from one side of it to the
other without being in the area terrain.

## Units

A Unit is represented by 1 or more models on a base.

### Stats

| Stat                 | Description                                                                         | Typical Range |
|----------------------|-------------------------------------------------------------------------------------|---------------|
| SIG, Signature       | Small / Medium / Large                                                              |               |
| SPD, Speed           | Movement distance in inches.                                                        | 6"            |
| SCAN, Scan           | Stat added to 2d6 when rolling to scan                                              | 5-8           |
| TARG, Targeting      | Stat added to 2d6 when rolling to hit                                               | 5-8           |
| DEF, Defense         | Target Number to hit when rolling an attack                                         | 12-14         |
| CM, Countermeasures* | Number of Countermeasure Tokens this unit starts with and the max the unit can have | 0-1           |

*If a CM stat has 2 numbers (example: 2/1) the second number is the number of Countermeasure tokens the unit regenerates
when it is **Refreshed**. Units are **Refreshed** in the Refresh phase and immediately before a reaction move/action.
When a Unit regenerates it gains Countermeasure Tokens but cannot exceed its starting amount. There is no limit on the
number of countermeasure tokens a unit may have from other sources.

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

All Pings have a SPD stat of 8". Pings cannot double move. A Unit can have a minimum SPD stat of 4". So a Ping moving 8"
per turn is equivalent to the slowest unit making a double move each turn.

### Activating

Pings do not activate or perform actions.

### Revealing

When a Ping is Revealed, the Controlling Player selects a Unit from their Reserve with the same Signature as the Ping.
The Unit's model is placed on the Ping (circular base). The circular base and model are now considered a Revealed Unit
instead of a Ping.

A Ping is Revealed when:

- The controlling player chooses to Reveal it in the Reveal phase of a Taskforce Activation.
- An enemy Unit ends its movement within 3".
- It is Successfully Scanned by an enemy Unit.

## Actions

When a Unit Activates it gains 1 Action Point. A Unit may perform any number of actions provided the action cost is
paid. Each action must be completely resolved before performing another action.

The actions a Unit can perform and their costs are indicated on the Unit's card.

### Action Stats

| Stat   | Description                                                                         |
|--------|-------------------------------------------------------------------------------------|
| Cost   | Cost to perform this action                                                         |
| Target | Valid targets for this action                                                       |
| Range  | Max range in inches*                                                                |
| ROF    | Number of times this action repeats/number of targets when this action is performed |
| Effect | Effect of a successful hit by this weapon                                           |

*Weapons with range dash (-) have an unlimited range

#### Action Cost Icons

- **A**: 1 Action Point
- **C**: 1 Command Point
- **A/C**: 1 Action Point **OR** 1 Command Point
- **A+C**: 1 Action Point **AND** 1 Command Point

Some actions have no cost and are labeled as a "Free Action".

### Overwatch Action

Although not included on the Unit cards, all units can perform the Overwatch Action for the cost of 1 Action Point. When
the Overwatch action is performed the Unit gains 1 Overwatch Token. Overwatch Tokens allow Units to perform Reactions
with a higher chance to act first. See: **Reactions**

### Scan Action

Any Action with a **SCAN** effect is a Scan Action. When performing a Scan Action, a Scan Check may be performed for
each ROF of the Scan Action. Each Scan Check must be resolved before the next.

#### Scan Check

When a Unit performs a Scan Check, select an enemy Ping within the Scan Action Range and resolve a Scan Roll against it.

**Scan Roll** = 2d6 + SCAN stat + mods vs Ping Defense.

| Ping Signature | Defense |
|----------------|---------|
| Small          | 14      |
| Medium         | 13      |
| Large          | 12      |

| Modifiers                    |     |
|------------------------------|-----|
| Ping Concealed or out of LOS | -1  |

| Outcome                   | Effect   |
|---------------------------|----------|
| Scan Roll >= Ping Defense | Revealed |
| Scan Roll < Ping Defense  | Failure  |

### Combat Actions

Any Action with a **KILL**, **STUN**, or **LOCK** effect is a combat action. Combat actions may only target enemy Units.

When a Unit performs a Combat Action it may perform an attack for each point of the Action's ROF.

### Attacks

When a Unit performs an Attack, select an enemy Unit within the Combat Action's Range and LOS, then resolve an Attack
Roll against it.

**Attack Roll** = 2d6 + TARG stat + mods vs Unit Defense.

| Outcome                                    | Effect |
|--------------------------------------------|--------|
| Attacker Targeting + 2d6 >= Target Defense | Hit    |
| Attacker Targeting + 2d6 < Target Defense  | Miss   |

| Modifiers             | Mod |
|-----------------------|-----|
| Short Range ( < 6" )* | +1  |
| Long Range ( > 16" )  | -1  |
| Target Concealed      | -1  |

*Attacks with a range of 6" or less do not gain the short-range bonus.

### Attack Effects

If an Attack results in a successful hit, resolve the Combat Action's Effect against the targeted Unit.

| Effect   | Description                                                                                                                                                                                                                                         |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **KILL** | The unit is destroyed and removed from the game.                                                                                                                                                                                                    |
| **STUN** | The target of the attack gains a Stun Token. The STUN effect can not be negated with countermeasures. If the target already has a Stun Token, the effect becomes a **KILL** effect. This KILL effect may be negated with countermeasures as normal. |
| **LOCK** | The target of the attack becomes Target Locked. Target Locked Units suffer -2 DEF until the end of the current Taskforce Activation or Reaction Engagement. A Unit may only be Target Locked once.                                                  |

### Countermeasures

A unit may spend a Countermeasure Token to perform a Countermeasure Check.

#### Countermeasure Check

Roll 3+ on 1d6 to negate one attack effect.

When a Countermeasure Check fails, the unit may spend additional Countermeasure Tokens to attempt to negate the effect.
Each check is resolved before deciding to spend additional Countermeasure Tokens.

# Reaction Engagements

Units controlled by a non-active player that have not activated this round (or have an Overwatch Token), have a chance
to react and possibly act before activating Units.

## Initiating a Reaction Engagement

A non-active player may initiate a reaction engagement after the active player completes the movement of their
Taskforce.

#### Who Can Participate

Units that have not activated this round or have an Overwatch Token are eligible to be selected as participating Units.
Active player units that performed a double move cannot participate in a Reaction Engagement unless they have an
Overwatch token.

## Resolving a Reaction Engagement

#### Declare Participating Units

The non-active player declares any number of eligible units to participate in the Reaction Engagement.
The active player's Taskforce Units are automatically participating. The active player may declare any number of their
eligible non-taskforce units to also be participating. Each Player alternates declaring additional participating Units
this way until **BOTH** players pass without adding additional reacting units.

The active player's participating units now become part of the active player's Taskforce. The non-active player's
participating units are now considered to be in a Reaction Taskforce.

#### Roll Reaction Order

All reacting Units roll 1d6.

- Units with an Overwatch token roll 2d6 and pick the highest die
- Units with a Stun token roll 2d6 and pick the lowest die
- Units with both an Overwatch and Stun Token roll 1d6

Units will react in order of reaction roll from highest to lowest. The activating Player wins ties between opposing
units. Ties between friendly units act in an order determined by the controlling player.

#### Resolve Reactions

In reaction roll order, each Unit may resolve a move or Unit Activation. Instead of performing a move or Unit
Activation, a Unit may hold its reaction by reducing the value of its reaction die by 1. Units not in the activating
Taskforce (that would have already been Refreshed) are Refreshed immediately before resolving their reaction movement or
activation.

#### Cleanup

- All Units involved remove Overwatch Tokens
- All Units involved gain an Activated Token

## Special Rules

### Ability Stacking

Multiple instances of the same ability do not stack.

## Tokens/Templates

### Placed Tokens/Templates

The following tokens/templates are placed on the battlefield. Placed tokens/templates have no impact on the movement or
LOS of Units/Pings.

| Token               | Description                                                                             | Removed                                                  |
|---------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------|
| **Shroud Template** | A 3" radius template that does not block LOS and grants concealment to units within it. | When the Controlling Unit is **Refreshed** or destroyed. |

### Unit Tokens

The following tokens are attached to a Unit.

| Token              | Description                                                                                                                                           | Can Have Multiple | Removed                                                                                                                            |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Activated**      | Unit has activated this Round. Cannot activate or perform reactions until the next round.                                                             | No                | Round start                                                                                                                        |
| **Overwatch**      | Unit uses the highest of 2d6 for reactions and can perform reactions even if it has an Activated Token.                                               | No                | Taskforce Designation                                                                                                              |
| **Stunned**        | Unit may only perform a move or action when activating and use the lowest of 2d6 for reactions.                                                       | No                | After performing an activation or reaction                                                                                         |
| **Stealth**        | A Unit with a Stealth Token cannot be targeted by enemy attacks.                                                                                      | No                | A Unit looses the token when it makes an attack or an enemy Unit successful scans it or an enemy Unit ends its movement within 3". |                                      |
| **Countermeasure** | Unit may spend this token to roll 1d6, on a 3+ it negates an attack result. Multiple may be spent against the same attack result if an attempt fails. | Yes               | Never                                                                                                                              |