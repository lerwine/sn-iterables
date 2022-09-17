/// <reference types="sn-types-scoped-server" />
declare namespace x_44813_iterables {
    /**
     * Callback method to produce the final {@link IteratorReturnResult} object.
     * @export
     * @interface IEndOfIterationHandler
     * @template TReturn - The type of the final iteration result value.
     * @template TNext - The type of value that may be passed to the {@link Iterator.next} method.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IEndOfIterationHandler<TReturn = any, TNext = undefined, TThis = any> {
        /**
         * Creates the final {@link IteratorReturnResult} object.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {(...[] | [TNext])} args - Arguments that were passed to the {@link Iterator.next} method.
         * @return {IteratorReturnResult<TReturn>} The final iteration result object.
         * @memberof IEndOfIterationHandler
         */
        (this: TThis, ...args: [] | [TNext]): IteratorReturnResult<TReturn>;
    }
    /**
     * Callback method to implement the {@link Iterator.return} method.
     * @export
     * @interface IReturnHandler
     * @template TReturn - The type of the final iteration result value.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IReturnHandler<TReturn = any, TThis = any> {
        /**
         * Implements the {@link Iterator.return} method.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {TReturn} [value] - The optional return value.
         * @return {IteratorReturnResult<TReturn>} The final iteration result object.
         * @memberof IReturnHandler
         */
        (this: TThis, value?: TReturn): IteratorReturnResult<TReturn>;
    }
    /**
     * Callback function that produces an {@link IteratorResult} object when the {@link Iterator.throw} method is invoked on the target {@link Iterator}.
     * @export
     * @interface IThrowFunc
     * @template TYield - The type of value yielded by the target {@link Iterator}.
     * @template TReturn - The final value type returned by the target {@link Iterator}.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IThrowFunc<TYield, TReturn = any, TThis = any> {
        /**
         * Produces an {@link IteratorResult} object when the {@link Iterator.throw} method is invoked on the target {@link Iterator}.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {*} [e] - An optional object representing the exception.
         * @return {IteratorResult<TYield, TReturn>} The iterator result object representing a yielded value or the end of the iteration.
         * @memberof IThrowFunc
         */
        (this: TThis, e?: any): IteratorResult<TYield, TReturn>;
    }
    /**
     * Callback function that implements the {@link Iterator.next} method.
     * @export
     * @interface IIteratorNextFunc
     * @template TYield - The type of yielded value.
     * @template TReturn - The type of value returned with the end of the iteration.
     * @template TNext - The type of value that can be passed to the {@link Iterator.next} method.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IIteratorNextFunc<TYield, TReturn = null, TNext = undefined, TThis = any> {
        /**
         * Implements the {@link Iterator.next} method.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {(...[] | [TNext])} args - The arguments that were passed to the {@link Iterator.next} method.
         * @return {IteratorResult<TYield, TReturn>} The iteration result object.
         * @memberof IIteratorNextFunc
         */
        (this: TThis, ...args: [] | [TNext]): IteratorResult<TYield, TReturn>;
    }
    /**
     * Predicate function for testing yielded value from the {@link Iterator.next} method of an {@link Iterator} object, including the arguments that were passed to the {@link Iterator.next} method.
     * @export
     * @interface IIterationPredicate
     * @template TYield - The type of value yielded by the target {@link Iterator}.
     * @template TNext - The type of value may be passed to the {@link Iterator.next} method on the target {@link Iterator}.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IIterationPredicate<TYield, TNext = undefined, TThis = any> {
        /**
         * Tests the yielded value from the {@link Iterator.next} method of the target {@link Iterator} object.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {TYield} value - The yielded value.
         * @param {(...[] | [TNext])} args - The arguments that were passed to the {@link Iterator.next} method.
         * @return {boolean} A value indicating whether the test passed.
         * @memberof IIterationPredicate
         */
        (this: TThis, value: TYield, ...args: [] | [TNext]): boolean;
    }
    /**
     * Callback function for processing a yielded value from the {@link Iterator.next} method of an {@link Iterator} object, including the arguments that were passed to the {@link Iterator.next} method.
     * @export
     * @interface IIteratorNextCallback
     * @template TYield - The type of value yielded by the target {@link Iterator}.
     * @template TNext - The type of value may be passed to the {@link Iterator.next} method on the target {@link Iterator}.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IIteratorNextCallback<TYield, TNext = undefined, TThis = any> {
        /**
         * Tests the yielded value from the {@link Iterator.next} method of the target {@link Iterator} object.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {TYield} value - The yielded value.
         * @param {(...[] | [TNext])} args - The arguments that were passed to the {@link Iterator.next} method.
         * @memberof IIterationPredicate
         */
        (this: TThis, value: TYield, ...args: [] | [TNext]): void;
    }
    /**
     * Function that converts the yielded value from the {@link Iterator.next} method of an {@link Iterator} object, including the arguments that were passed to the {@link Iterator.next} method.
     * @export
     * @interface IMapFunc
     * @template TInput - The type of value yielded by the target {@link Iterator}.
     * @template TResult - The type of converted value.
     * @template TNext - The type of value may be passed to the {@link Iterator.next} method on the target {@link Iterator}.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IMapFunc<TInput, TResult, TNext = undefined, TThis = any> {
        /**
         * Converts the yielded value from the {@link Iterator.next} method of the target {@link Iterator} object.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {TInput} value - The yielded value.
         * @param {(...[] | [TNext])} args - The arguments that were passed to the {@link Iterator.next} method.
         * @return {TResult} The converted value.
         * @memberof IMapFunc
         */
        (this: TThis, value: TInput, ...args: [] | [TNext]): TResult;
    }
    /**
     * Function that calculates an aggregate value from the next input value.
     * @export
     * @interface IReducerFunc
     * @template TAcc - The type of aggregated value.
     * @template TInput - The input value type.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IReducerFunc<TAcc, TInput, TThis = any> {
        /**
         * Calculates an aggregated value from the next input value.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {TAcc} acc - The current aggregated value.
         * @param {TInput} cur - The next input value.
         * @return {TAcc} The accumulated aggregate value.
         * @memberof IReducerFunc
         */
        (this: TThis, acc: TAcc, cur: TInput): TAcc;
    }
    /**
     * Function for testing a value.
     * @export
     * @interface IPredicate
     * @template T - The type of value to be tested.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IPredicate<T, TThis = any> {
        /**
         * Tests a value.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {T} value - The value to be tested.
         * @return {boolean} A value indictating whether the test passed.
         * @memberof IPredicate
         */
        (this: TThis, value: T): boolean;
    }
    /**
     * Function that produces an optional return value from an error state.
     * @export
     * @interface IIteratorThrowHandler
     * @template TReturn - The final return value type.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IIteratorThrowHandler<TYield, TReturn = any, TThis = any> {
        /**
         * Produces an optional return value from an error state.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {*} [e] - An optional object representing the exception.
         * @return {IteratorResult<TYield, TReturn>} The iterator result value for a thrown error.
         * @memberof IIteratorThrowHandler
         */
        (this: TThis, e?: any): IteratorResult<TYield, TReturn>;
    }
    /**
     * Interface implemented by the {@link IteratorFactory} class.
     * @export
     * @interface IIteratorFactory
     * @template T - The array element type.
     */
    interface IIteratorFactory<T> {
        type: "IteratorFactory";
        /**
         * Creates an interator from the array that was passed to the constructor.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {ToArrayOptions<T, TReturn, TNext>} [options] - Options for the iterator implementation.
         * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array that was passed to the constructor.
         * @memberof IIteratorFactory
         */
        iterator<TReturn = any, TNext = undefined>(options?: ToArrayOptions<T, TReturn, TNext>): Iterator<T, TReturn, TNext>;
        /**
         * Creates an interator from the array that was passed to the constructor.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of 'this' object for callback methods.
         * @param {(ToArrayOptions<T, TReturn, TNext, TThis> | undefined)} options - Options for the iterator implementation.
         * @param {TThis} thisObj - The object to use as the 'this' object for callback methods.
         * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array that was passed to the constructor.
         * @memberof IIteratorFactory
         */
        iterator<TReturn = any, TNext = undefined, TThis = any>(options: ToArrayOptions<T, TReturn, TNext, TThis> | undefined, thisObj: TThis): Iterator<T, TReturn, TNext>;
    }
    /**
     * Represents the prototype for the {@link IteratorFactory} class.
     * @export
     * @interface IIteratorFactoryPrototype
     * @extends {IIteratorFactory<T>}
     * @template T - The array element type.
     */
    interface IIteratorFactoryPrototype<T> extends IIteratorFactory<T> {
        _source: T[];
        initialize(source: T[]): void;
    }
    /**
     * Defines a constructed IteratorFactory API instance.
     * @export
     * @typedef {Readonly<IIteratorFactory>} IteratorFactory;
     * @template T - The source array element type.
     */
    type IteratorFactory<T> = Readonly<IIteratorFactory<T>>;
    /**
     * Defines the constructor for the IteratorFactory API
     * @export
     * @interface IteratorFactoryConstructor
     * @extends {$$class.Constructor<IteratorFactory<T>, IIteratorFactoryPrototype<T>>}
     * @template T - The source array element type.
     */
    interface IteratorFactoryConstructor<T> extends $$class.Constructor<IteratorFactory<T>, IIteratorFactoryPrototype<T>> {
        /**
         * Creates a new IteratorFactory instance.
         * @param {T[]} source - The source array of values.
         * @return {IteratorFactory<T>} A new IteratorFactory object.
         * @memberof IteratorFactoryConstructor
         */
        new (source: T[]): IteratorFactory<T>;
        /**
         * Creates a new IteratorFactory instance.
         * @param {T[]} source - The source array of values.
         * @return {IteratorFactory<T>} A new IteratorFactory object.
         * @memberof IteratorFactoryConstructor
         */
        (source: T[]): IteratorFactory<T>;
        /**
         * Creates an iterator from a factory function.
         * @template TYield - The yielded value type.
         * @template TReturn - The final value type.
         * @template TNext - The type of value that may be passed to the {@link Iterator.next} method.
         * @param {IIteratorNextFunc<TYield, TReturn, TNext>} onNext - The callback method that returns the next iteration result object.
         * @param {IIteratorOptions<TYield, TReturn>} [options] - Iterator options.
         * @return {Iterator<TYield, TReturn, TNext>} The new iterator.
         * @memberof IteratorFactoryConstructor
         */
        create<TYield, TReturn = any, TNext = undefined>(onNext: IIteratorNextFunc<TYield, TReturn, TNext>, options?: IIteratorOptions<TYield, TReturn>): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates an iterator from a factory function
         * @template TYield - The yielded value type.
         * @template TReturn - The final value type.
         * @template TNext - The type of value that may be passed to the {@link Iterator.next} method.
         * @template TThis - The type of 'this' object for callback methods.
         * @param {IThisIteratorNextFunc<TTThis, Yield, TReturn, TNext>} onNext - The callback method that returns the next iteration result object.
         * @param {(IThisIteratorOptions<TThis, TYield, TReturn, TNext> | undefined)} options - Iterator options.
         * @param {TThis} thisObj - The object to use as the 'this' object for callback methods.
         * @return {Iterator<TYield, TReturn, TNext>} The new iterator.
         * @memberof IteratorFactoryConstructor
         */
        create<TYield, TReturn = any, TNext = undefined, TThis = any>(onNext: IIteratorNextFunc<TYield, TReturn, TNext, TThis>, options: IIteratorOptions<TYield, TReturn, TThis> | undefined, thisObj: TThis): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates a new iterator which is a filtered result set of a given iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIterationPredicate<TYield, TNext>} predicate - Determines whether a value will be yielded in the result iterator.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @memberof IteratorFactoryConstructor
         */
        filter<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext>): Iterator<TYield, TReturn, TNext>;
        /**
         *
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of object to which the 'this' keyword can refer in the predicate function.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIterationPredicate<TYield, TNext>} predicate
         * @param {TThis} thisArg - An object to which the 'this' keyword can refer in the predicate function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @memberof IteratorFactoryConstructor
         */
        filter<TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates a new iterator which applies a given function before each value is yielded.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIteratorNextCallback<TYield, TNext>} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @memberof IteratorFactoryConstructor
         */
        reiterate<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext>): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates a new iterator which applies a given function before each value is yielded.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of object to which the 'this' keyword can refer in the predicate function.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIteratorNextCallback<TYield, TNext, TThis>} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @param {TThis} thisArg - An object to which the 'this' keyword can refer in the callback function.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @memberof IteratorFactoryConstructor
         */
        reiterate<TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
        /**
         * Maps the yielded results of an iterator to another value or type.
         * @template TInput - The yielded result type for the source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {IMapFunc<TInput, TYield, TNext>} mapper - A function that converts each value from the source iterator as it is yielded.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @memberof IteratorFactoryConstructor
         */
        map<TInput, TYield, TReturn = any, TNext = undefined>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext>): Iterator<TYield, TReturn, TNext>;
        /**
         * Maps the yielded results of an iterator to another value or type.
         * @template TInput - The yielded result type for the source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @template TThis - The type of object to which the 'this' keyword can refer in the predicate function.
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {IMapFunc<TInput, TYield, TNext, TThis>} mapper - A function that converts each value from the source iterator as it is yielded.
         * @param {TThis} thisArg - An object to which the 'this' keyword can refer in the mapper function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @memberof IteratorFactoryConstructor
         */
        map<TInput, TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext, TThis>, thisArg: TThis): Iterator<TYield, TReturn, TNext>;
        /**
         * Creates an aggregated value from all yielded values of an iterator.
         * @template TInput - The yielded result type for the source iterator.
         * @template TAcc - The type of aggregated value.
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {IReducerFunc<TAcc, TInput>} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @return {TAcc} The final aggregated value.
         * @memberof IteratorFactoryConstructor
         */
        reduce<TInput, TAcc>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput>): TAcc;
        /**
         * Creates an aggregated value from all yielded values of an iterator.
         * @template TInput - The yielded result type for the source iterator.
         * @template TAcc - The type of aggregated value.
         * @template TThis - The type of object to which the 'this' keyword can refer in the predicate function.
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {IReducerFunc<TAcc, TInput, TThis>} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @param {TThis} thisArg - An object to which the 'this' keyword can refer in the reducer function.
         * @return {TAcc} The final aggregated value.
         * @memberof IteratorFactoryConstructor
         */
        reduce<TInput, TAcc, TThis = any>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput, TThis>, thisArg: TThis): TAcc;
        /**
         * Gets the first yielded result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @memberof IteratorFactoryConstructor
         */
        first<TYield>(source: Iterator<TYield>, predicate?: IPredicate<TYield>): TYield | undefined;
        /**
         * Gets the first yielded result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TThis - The type of object to which the 'this' keyword can refer in the predicate function.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(IPredicate<TYield, TThis> | undefined)} predicate - Optional predicate that determines whether to ignore a yielded value.
         * @param {TThis} thisArg - An object to which the 'this' keyword can refer in the predicate function.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @memberof IteratorFactoryConstructor
         */
        first<TYield, TThis = any>(source: Iterator<TYield>, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield | undefined;
        /**
         * Gets the first yielded or default result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @memberof IteratorFactoryConstructor
         */
        firstOrDefault<TYield>(source: Iterator<TYield>, ifEmpty: TYield | {
            (): TYield;
        }, predicate?: IPredicate<TYield>): TYield;
        /**
         * Gets the first yielded or default result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TThis - The type of object to which the 'this' keyword can refer in the predicate function.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (this: TThis): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {(IPredicate<TYield, TThis> | undefined)} predicate - Optional predicate that determines whether to ignore a yielded value.
         * @param {TThis} thisArg - An object to which the 'this' keyword can refer in the predicate function.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @memberof IteratorFactoryConstructor
         */
        firstOrDefault<TYield, TThis = any>(source: Iterator<TYield>, ifEmpty: TYield | {
            (this: TThis): TYield;
        }, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield;
        /**
         * Creates a wrapper iterator that limits the number of iterations from a source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {number} count - The maximum number of iterations.
         * @return {Iterator<TYield, TReturn, TNext>} - A wrapper iterator with a limited number of iterations.
         * @memberof IteratorFactoryConstructor
         */
        limit<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, count: number): Iterator<TYield, TReturn, TNext>;
        /**
         * Converts the yielded values of an interator to an array.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {number} [limit] - The optional maximum number of elements (iterations).
         * @return {TYield[]} The yielded values of the iterator.
         * @memberof IteratorFactoryConstructor
         */
        toArray<TYield>(source: Iterator<TYield>, limit?: number): TYield[];
    }
    /**
     * Iterator creation options.
     * @export
     * @interface IIteratorOptions
     * @template TYield - The yielded result type for the iterator.
     * @template TReturn - The final value type for the iterator.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IIteratorOptions<TYield, TReturn = any, TThis = any> {
        /**
         * Indicates if the iterator will implement the {@link Iterator.return} method.
         * If this is a function, then it will be used as the {@link Iterator.return} method;
         * otherwise, if this is a true value, a return method will be created which creates teh return object from the optional parameter of the {@link Iterator.return} method.
         * @type {(boolean | IReturnHandler<TReturn, TThis>)}
         * @memberof IIteratorOptions
         */
        handleReturn?: boolean | IReturnHandler<TReturn, TThis>;
        /**
         * Optional callback method that implements the {@link Iterator.throw} method.
         * @type {IIteratorThrowHandler<TYield, TReturn, TThis>}
         * @memberof IIteratorOptions
         */
        onThrow?: IIteratorThrowHandler<TYield, TReturn, TThis>;
    }
    /**
     * Base interface for options for the {@link IteratorFactory.iterator} method.
     * @export
     * @interface IIteratorToArrayBaseOptions
     * @extends {IIteratorOptions<TYield, TReturn, TThis>}
     * @template TYield - The type of values that will be yielded by the target iterator.
     * @template TReturn - The type of value that will be returned by the target iterator.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IIteratorToArrayBaseOptions<TYield, TReturn = any, TThis = any> extends IIteratorOptions<TYield, TReturn, TThis> {
        /**
         * The starting index for the iteration.
         * @type {number}
         * @memberof IIteratorToArrayBaseOptions
         */
        startIndex?: number;
        /**
         * The maximum number of iterations.
         * @type {number}
         * @memberof IIteratorToArrayBaseOptions
         */
        count?: number;
    }
    /**
     * Options for the {@link IteratorFactory.iterator} method that may include a callback for the end of the iteration.
     * @export
     * @interface IToArrayOptions
     * @extends {IIteratorToArrayBaseOptions<TYield, TReturn, TThis>}
     * @template TYield - The type of values that will be yielded by the target iterator.
     * @template TReturn - The type of value that will be returned by the target iterator.
     * @template TNext - The type of value that can be passed to the {@link Iterator.next} method.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IToArrayOptions<TYield, TReturn = any, TNext = undefined, TThis = any> extends IIteratorToArrayBaseOptions<TYield, TReturn, TThis> {
        /**
         * Optional callback method that creates the return value upon the end of the iteration.
         * @type {IEndOfIterationHandler<TReturn, TNext, TThis>}
         * @memberof IToArrayOptions
         */
        onEndOfIteration?: IEndOfIterationHandler<TReturn, TNext, TThis>;
    }
    /**
     * Options for the {@link IteratorFactory.iterator} method that specifies the return value to use after the final iteration.
     * @export
     * @interface IToArrayOptionsWithFinalValue
     * @extends {IIteratorToArrayBaseOptions<TYield, TReturn, TThis>}
     * @template TYield - The type of values that will be yielded by the target iterator.
     * @template TReturn - The type of value that will be returned by the target iterator.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    interface IToArrayOptionsWithFinalValue<TYield, TReturn = any, TThis = any> extends IIteratorToArrayBaseOptions<TYield, TReturn, TThis> {
        /**
         * The value to return at the end of the iteration.
         * @type {TReturn}
         * @memberof IToArrayOptionsWithFinalValue
         */
        endOfIterationValue: TReturn;
    }
    /**
     * Options for the {@link IteratorFactory.iterator} method.
     * @export
     * @typedef {(IToArrayOptions<TYield, TReturn, TNext, TThis> | IToArrayOptionsWithFinalValue<TYield, TReturn, TThis>)}
     * @template TYield - The type of values that will be yielded by the target iterator.
     * @template TReturn - The type of value that will be returned by the target iterator.
     * @template TNext - The type of value that can be passed to the {@link Iterator.next} method.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    type ToArrayOptions<TYield, TReturn = any, TNext = undefined, TThis = any> = IToArrayOptions<TYield, TReturn, TNext> | IToArrayOptionsWithFinalValue<TYield, TReturn, TThis>;
    const IteratorFactory: IteratorFactoryConstructor<any>;
}
