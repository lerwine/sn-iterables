declare namespace $$class {
    /**
     * The class object type for compatibility with the Rhino scripting environment.
     * @export
     * @interface Class
     */
    export interface Class {
        /**
         * Default constructor.
         * @return {Object} A constructed object instance.
         * @memberof Constructor
         */
        new(): Object;
    }

    /**
     * Defines an object constructor.
     * @export
     * @interface Constructor
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the constructor prototype.
     */
    export interface Constructor<TInstance extends JSProto, TPrototype extends TInstance = TInstance> {
        prototype: TPrototype;
        
        /**
         * Default constructor.
         * @param {...any[]} args - Costructor arguments.
         * @return {(TInstance & Object)} A constructed instance.
         * @memberof Constructor
         */
        new(...args: any[]): TInstance & Object;

        /**
         * Default constructor.
         * @param {...any[]} args - Costructor arguments.
         * @return {(TInstance & Object)} A constructed instance.
         * @memberof Constructor
         */
        (...args: any[]): TInstance & Object;
    }

    /**
     * Marker type for a JavaScript object type.
     * @export
     * @interface JSProto
     */
    export interface JSProto { }

    /**
     * Defines the class constructor for the Rhino scripting environment.
     * @export
     * @interface ClassConstructor
     */
    export interface ClassConstructor {
        prototype: Class;
        /**
         * Creates a class constructor object.
         * @template K - The class name.
         * @template TPrototype - The type of the class's prototype.
         * @param {K} jsTypeName - The class name.
         * @return {(Constructor<JSProto[K], TPrototype> & JSProto[K])} A constructor object.
         * @memberof ClassConstructor
         */
        create<K extends keyof JSProto, TPrototype extends JSProto[K]>(jsTypeName: K): Constructor<JSProto[K], TPrototype> & JSProto[K];

        /**
         * Creates a class constructor object
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @param {string} [jsTypeName] - Optional type name of the class
         * @return {(TConstructor & ThisType<TInstance>)} A constructor object.
         * @memberof ClassConstructor
         */
        create<TInstance extends JSProto, TConstructor extends Constructor<TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(jsTypeName?: string): TConstructor & ThisType<TInstance>;
    }

    export type PickProperty<T, K extends keyof T> = T[K];
}

/**
 * Object constructor compatible with ServiceNow scripting enviroment.
 * @interface ObjectConstructor
 */
interface ObjectConstructor {
    /**
     * Creates a prototype which extends the prototype of a base class.
     * @template B - The base class type.
     * @template TInstance - Type type of the instance.
     * @template TPrototype - Type type of prototype.
     * @param {B} base - The base prototype object.
     * @param {(TPrototype & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>)} derived - A prototype which extends the prototype of the provided base class.
     * @return {($$class.PickProperty<B, 'prototype'> & $$class.Constructor<TInstance & B, TPrototype & B> & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>)} A prototype object which extends the prototype of provided base class.
     * @memberof Object
     */
    extendsObject<B extends Function, TInstance, TPrototype extends TInstance = TInstance>(base: B, derived: TPrototype & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>):
        $$class.PickProperty<B, 'prototype'> & $$class.Constructor<TInstance & B, TPrototype & B> & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>;
}

declare const Class: $$class.ClassConstructor;