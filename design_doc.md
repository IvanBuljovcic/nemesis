# Nemesis

## Entities
- [Room](#Room)
- [Player](#Player)
- [Corridor](#Corridor)
- [Intruder](#Intruder)

### Room
Properties:
- Name `string`
- Explored `bool`
- Items to explore `number` - `max 5`
- Malufunctioning `bool`
- On fire `bool`
- Has computer `bool`
- Action `ROOM_ACTION` - `optional`
- Occupants `Array<PLAYER | INTRUDER>` - `optional`
- Technical corridor `CORRIDOR` - `optional`

### Player
- Wounds
  - Light `number` - `max 2`
  - Serious `number` - `max 3`
- Slime `bool`
- Signal `bool`
- Left hand `ITEM`
- Right hand `ITEM`
- Objective(s) `OBJECTIVE`
- Deck `DECK`

### Corridor
- Numbers `Array<string>`
- Entities `Array<PLAYER | INTRUDER>`
- Has sound token

### Intruder
- Type `string` - oneof `small | medium | large | huge`

## Cards
- Objective
- Action
- Contamination
- Item
- Event
