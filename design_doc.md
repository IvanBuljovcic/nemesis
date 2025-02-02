# Nemesis

## Entities
- [Room](###Room)
- [Player](###Player)
- Intruder

### Room
Properties:
- Explored `bool`
- Items to explore `number` - `max 5`
- Malufunctioning `bool`
- On fire `bool`
- Connecting corridor has sound `bool`

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

## Cards
- Objective
- Action
- Contamination
- Item
- Event
