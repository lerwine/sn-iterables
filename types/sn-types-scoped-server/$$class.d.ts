declare namespace $$class {
    export interface Class {
        new(): Object;
    }

    export interface Constructor<TInstance extends JSTypes, TPrototype extends TInstance = TInstance> {
        prototype: TPrototype;
        new (...args: any[]): TInstance & Object;
    }

    export interface JSTypes { }

    export interface ClassConstructor {
        prototype: Class;
        create<K extends keyof JSTypes, TPrototype extends JSTypes[K]>(jsTypeName: K): Constructor<JSTypes[K], TPrototype> & JSTypes[K];
        create<TInstance extends JSTypes, TConstructor extends Constructor<TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(jsTypeName?: string): Constructor<TInstance, TPrototype> & TConstructor;
    }

    export type PickPrototype<T, K extends keyof T> = T[K];
    
    export interface ObjectConstructor {
        extendsObject<B extends Function, TInstance, TPrototype extends TInstance = TInstance>(base: B, derived: TPrototype & ThisType<PickPrototype<B, 'prototype'> & TInstance>): PickPrototype<B, 'prototype'>  & TInstance & ThisType<PickPrototype<B, 'prototype'> & TInstance>;
    }
}

interface Object {
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
    constructor: Function;

    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
     * Determines whether an object has a property with the specified name.
     * @param v A property name.
     */
    hasOwnProperty(v: string): boolean;

    /**
     * Determines whether an object exists in another object's prototype chain.
     * @param v Another object whose prototype chain is to be checked.
     */
    isPrototypeOf(v: Object): boolean;

    /**
     * Determines whether a specified property is enumerable.
     * @param v A property name.
     */
    propertyIsEnumerable(v: string): boolean;

    /**
     * Creates a prototype which extends the prototype of a base class.
     * @template B - The base class type.
     * @template T - Type type of prototype.
     * @param {B} base - The base prototype object.
     * @param {(T & ThisType<$$class.PickPrototype<B, 'prototype'> & T>)} derived - A prototype which extends the prototype of the provided base class.
     * @return {($$class.PickPrototype<B, 'prototype'>  & T & ThisType<$$class.PickPrototype<B, 'prototype'> & T>)} A prototype object which extends the prototype of provided base class.
     * @memberof Object
     */
    extendsObject<B extends Function, T>(base: B, derived: T & ThisType<$$class.PickPrototype<B, 'prototype'> & T>): $$class.PickPrototype<B, 'prototype'>  & T & ThisType<$$class.PickPrototype<B, 'prototype'> & T>;
}

declare const Class: $$class.ClassConstructor;