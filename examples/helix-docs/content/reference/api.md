+++
title = "API Reference"
+++

Complete reference for the Helix Node API.

## Node Creation

```javascript
import { createNode } from '@helix/core';

const node = createNode({
  id: 'node-1',
  type: 'processor',
  options: {
    timeout: 5000,
    retry: 3
  }
});
```

| Key | Type | Description |
|-----|------|-------------|
| `id` | string | Unique identifier for the node |
| `type` | string | Node functional classification |
| `options` | object | Node-specific configuration |

## Event Handling

```javascript
node.on('process', (data) => {
  console.log(`Processing payload: ${data.id}`);
});

node.emit('ready', { status: 'online' });
```

| Method | Parameters | Description |
|--------|------------|-------------|
| `on` | `event`, `callback` | Registers an event listener |
| `emit` | `event`, `payload` | Dispatches an event to listeners |

## State Management

Nodes maintain internal state that can be queried and modified during execution.

```javascript
const currentState = node.getState();
node.setState({ active: true });
```

State changes trigger the `stateChange` event automatically. Always ensure that complex state transitions are handled through the defined action reducers rather than direct assignment.

For distributed node operations, consider the asynchronous state lock mechanism to prevent race conditions during cluster scale-out events.
