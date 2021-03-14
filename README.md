# Circular inverse list

![CI](https://github.com/falsandtru/invlist/workflows/CI/badge.svg)

A node-oriented list data structure.

## Maintenance

This repository is maintained on the following source repository.

https://github.com/falsandtru/spica

## API

```ts
export class List<T> {
  readonly length: number;
  head: Node<T> | undefined;
  readonly tail: Node<T> | undefined;
  readonly last: Node<T> | undefined;
  clear(): void;
  unshift(value: T): Node<T>;
  unshiftRotationally(value: T): Node<T>;
  shift(): T | undefined;
  push(value: T): Node<T>;
  pushRotationally(value: T): Node<T>;
  pop(): T | undefined;
  [Symbol.iterator](): Iterator<T, undefined, undefined>;
}

export interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
  readonly list: List<T>;
  delete(): T;
  insertBefore(value: T): Node<T>;
  insertAfter(value: T): Node<T>;
  move(before: Node<T> | undefined): boolean;
  moveToHead(): void;
  moveToLast(): void;
  swap(node: Node<T>): boolean;
}
```
