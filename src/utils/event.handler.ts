// src/utils/event.handler.ts

import { Event } from "../clase/event-1";

function handleEvent(event: Event): void {
  console.log(`Handling event: ${event.type}`);

}

export { handleEvent };
