namespace x_44813_iterables {
    // #region Callback definitions

    /**
     * Callback method to produce the final {@link IteratorReturnResult} object.
     * @export
     * @interface IEndOfIterationHandler
     * @template TReturn - The type of the final iteration result value.
     * @template TNext - The type of value that may be passed to the {@link Iterator.next} method.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    export interface IEndOfIterationHandler<TReturn = any, TNext = undefined, TThis = any> {
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
    export interface IReturnHandler<TReturn = any, TThis = any> {
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
     export interface IThrowFunc<TYield, TReturn = any, TThis = any> {
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
    export interface IIteratorNextFunc<TYield, TReturn = null, TNext = undefined, TThis = any> {
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
    export interface IIterationPredicate<TYield, TNext = undefined, TThis = any> {
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
    export interface IIteratorNextCallback<TYield, TNext = undefined, TThis = any> {
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
    export interface IMapFunc<TInput, TResult, TNext = undefined, TThis = any> {
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
    export interface IReducerFunc<TAcc, TInput, TThis = any> {
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
    export interface IPredicate<T, TThis = any> {
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
    export interface IIteratorThrowHandler<TYield, TReturn = any, TThis = any> {
        /**
         * Produces an optional return value from an error state.
         * @param {TThis} this - The 'this' object for the method invocation.
         * @param {*} [e] - An optional object representing the exception.
         * @return {IteratorResult<TYield, TReturn>} The iterator result value for a thrown error.
         * @memberof IIteratorThrowHandler
         */
        (this: TThis, e?: any): IteratorResult<TYield, TReturn>;
    };

    // #endregion

    // #region Implementation definitions

    /**
     * Interface implemented by the {@link IteratorFactory} class.
     * @export
     * @interface IIteratorFactory
     * @template T - The array element type.
     */
    export interface IIteratorFactory<T> {
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
    export interface IIteratorFactoryPrototype<T> extends IIteratorFactory<T> {
        _source: T[];
        initialize(source: T[]): void;
    }

    /**
     * Defines a constructed IteratorFactory API instance.
     * @export
     * @typedef {Readonly<IIteratorFactory>} IteratorFactory;
     * @template T - The source array element type.
     */
    export declare type IteratorFactory<T> = Readonly<IIteratorFactory<T>>;

    /**
     * Defines the constructor for the IteratorFactory API
     * @export
     * @interface IteratorFactoryConstructor
     * @extends {$$class.Constructor<IteratorFactory<T>, IIteratorFactoryPrototype<T>>}
     * @template T - The source array element type.
     */
    export interface IteratorFactoryConstructor<T> extends $$class.Constructor<IteratorFactory<T>, IIteratorFactoryPrototype<T>> {
        /**
         * Creates a new IteratorFactory instance.
         * @param {T[]} source - The source array of values.
         * @return {IteratorFactory<T>} A new IteratorFactory object.
         * @memberof IteratorFactoryConstructor
         */
        new(source: T[]): IteratorFactory<T>;

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
        create<TYield, TReturn = any, TNext = undefined, TThis = any>(onNext: IIteratorNextFunc<TYield, TReturn, TNext, TThis>, options: IIteratorOptions<TYield, TReturn, TThis> | undefined,
            thisObj: TThis): Iterator<TYield, TReturn, TNext>;

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
        filter<TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext, TThis>,
            thisArg: TThis): Iterator<TYield, TReturn, TNext>;
        
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
        reiterate<TYield, TReturn = any, TNext = undefined, TThis = any>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext, TThis>,
            thisArg: TThis): Iterator<TYield, TReturn, TNext>;
        
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
        firstOrDefault<TYield>(source: Iterator<TYield>, ifEmpty: TYield | { (): TYield; }, predicate?: IPredicate<TYield>): TYield;

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
        firstOrDefault<TYield, TThis = any>(source: Iterator<TYield>, ifEmpty: TYield | { (this: TThis): TYield; }, predicate: IPredicate<TYield, TThis> | undefined, thisArg: TThis): TYield;

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

    // #endregion

    // #region Option definitions

    /**
     * Iterator creation options.
     * @export
     * @interface IIteratorOptions
     * @template TYield - The yielded result type for the iterator.
     * @template TReturn - The final value type for the iterator.
     * @template TThis - The type of object to which the 'this' keyword can refer.
     */
    export interface IIteratorOptions<TYield, TReturn = any, TThis = any> {
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
    export interface IIteratorToArrayBaseOptions<TYield, TReturn = any, TThis = any> extends IIteratorOptions<TYield, TReturn, TThis> {
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
    export interface IToArrayOptions<TYield, TReturn = any, TNext = undefined, TThis = any> extends IIteratorToArrayBaseOptions<TYield, TReturn, TThis> {
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
    export interface IToArrayOptionsWithFinalValue<TYield, TReturn = any, TThis = any> extends IIteratorToArrayBaseOptions<TYield, TReturn, TThis> {
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
    export type ToArrayOptions<TYield, TReturn = any, TNext = undefined, TThis = any> = IToArrayOptions<TYield, TReturn, TNext> | IToArrayOptionsWithFinalValue<TYield, TReturn, TThis>;

    // #endregion

    interface IReturnContext<TReturn = any> { return?: IteratorReturnResult<TReturn>; }

    export const IteratorFactory: IteratorFactoryConstructor<any> = (function<T>(): IteratorFactoryConstructor<T> {
        var constructor: IteratorFactoryConstructor<T> = Class.create<IteratorFactory<T>, IteratorFactoryConstructor<T>>();

        // #region Static members

        /**
         * Creates an iterator from a factory function
         * @template TYield - The yielded value type.
         * @template TReturn - The final value type.
         * @template TNext - The type of value that may be passed to the {@link Iterator.next} method.
         * @param {IIteratorNextFunc<TYield, TReturn, TNext>} onNext - The callback method that returns the next iteration result object.
         * @param {IIteratorOptions<TYield, TReturn, TNext>} [options] - Iterator options.
         * @param {*} [thisObj] - The optional object to use as the 'this' object for callback methods.
         * @return {Iterator<TYield, TReturn, TNext>} The new iterator.
         * @memberof IteratorFactoryConstructor
         */
        constructor.create = function<TYield, TReturn = any, TNext = undefined>(onNext: IIteratorNextFunc<TYield, TReturn, TNext>, options?: IIteratorOptions<TYield, TReturn>,
                thisObj?: any): Iterator<TYield, TReturn, TNext> {
            var iterator: Iterator<TYield, TReturn, TNext>;
            var context: IReturnContext<TReturn> = { };
            iterator = {
                next: function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                    if (typeof context.return !== 'undefined')
                        return context.return;
                    var resultObj = assertIteratorResult<TYield, TReturn>("next", onNext.apply(thisObj, args));
                    if (resultObj.done === true)
                        context.return = resultObj;
                    return resultObj;
                }
            };

            if (typeof options === 'undefined') return iterator;

            if (typeof options.handleReturn === 'function')
                iterator.return = function(value?: TReturn): IteratorResult<TYield, TReturn> {
                    var resultObj = <IteratorReturnResult<TReturn>>assertIteratorResult<TYield, TReturn>("next", (arguments.length == 0) ? (<IReturnHandler<TReturn>>options.handleReturn).call(thisObj) :
                        (<IReturnHandler<TReturn>>options.handleReturn).call(thisObj, value));
                    if (typeof context.return === 'undefined')
                        context.return = resultObj;
                    return resultObj;
                };
            else if (options.handleReturn === true)
                iterator.return = function(value?: TReturn): IteratorResult<TYield, TReturn> {
                    var resultObj = <IteratorReturnResult<TReturn>>{ done: true, value: <TReturn>((typeof value === 'undefined') ? null : value) };
                    if (typeof context.return === 'undefined')
                        context.return = resultObj;
                    return resultObj;
                };
            if (typeof options.onThrow === 'function')
                iterator.throw = function(e?: any): IteratorResult<TYield, TReturn> {
                    var resultObj = <IteratorReturnResult<TReturn>>assertIteratorResult<TYield, TReturn>("next", (arguments.length == 0) ? (<IIteratorThrowHandler<TYield, TReturn>>options.onThrow).call(thisObj) :
                        (<IIteratorThrowHandler<TYield, TReturn>>options.onThrow).call(thisObj, e));
                    if (resultObj.done === true && typeof context.return === 'undefined')
                        context.return = resultObj;
                    return resultObj;
                };
            return iterator;
        }

        /**
         * Creates a new iterator which is a filtered result set of a given iterator.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIterationPredicate<TYield, TNext>} predicate - Determines whether a value will be yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the 'this' keyword can refer in the predicate function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator yielding filtered results.
         * @static
         * @memberof IteratorFactory
         */
        constructor.filter = function<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, predicate: IIterationPredicate<TYield, TNext>,
                thisArg?: any): Iterator<TYield, TReturn, TNext> {
            var context: IReturnContext<TReturn> = { };
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined')
                return createRelayIterator<TYield, TReturn, TNext>(context, source, function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                    if (typeof context.return !== 'undefined') return context.return;
                    var result = assertIteratorResult<TYield, TReturn>("next", source.next.apply(source, args));
                    if (result.done) {
                        context.return = result;
                        return result;
                    }
                    if (typeof args !== undefined && args.length > 0) {
                        while (!predicate.apply(undefined, <[TYield] | [TYield, TNext]>arrayUtil.concat(<any[]>[result.value], args))) {
                            if ((result = source.next.apply(source, args)).done) {
                                context.return = result;
                                break;
                            }
                        }
                    } else
                        while (!predicate((<IteratorYieldResult<TYield>>result).value)) {
                            if ((result = source.next.apply(source, args)).done) {
                                context.return = result;
                                break;
                            }
                        }
                    return result;
                });
            return createRelayIterator<TYield, TReturn, TNext>(context, source, function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                if (typeof context.return !== 'undefined') return context.return;
                var result = source.next.apply(source, args);
                if (result.done) {
                    context.return = result;
                    return result;
                }
                if (typeof args !== undefined && args.length > 0)
                    while (!predicate.apply(thisArg, <[TYield] | [TYield, TNext]>arrayUtil.concat(<any[]>[(<IteratorYieldResult<TYield>>result).value], args))) {
                        if ((result = source.next.apply(source, args)).done) {
                            context.return = result;
                            break;
                        }
                    }
                else
                    while (!predicate.call(thisArg, (<IteratorYieldResult<TYield>>result).value)) {
                        if ((result = source.next.apply(source, args)).done) {
                            context.return = result;
                            break;
                        }
                    }
                return result;
            });
        };

        /**
         * Creates a new iterator which applies a given function before each value is yielded.
         * @template TYield - The yielded result type for the iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IIteratorNextCallback<TYield, TNext>} callbackFn - The function that is applied to each value before it is yielded in the result iterator.
         * @param {*} [thisArg] - An optional object to which the 'this' keyword can refer in the callback function.
         * @return {Iterator<TYield, TReturn, TNext>} A wrapper for the original iterator.
         * @static
         * @memberof IteratorFactory
         */
        constructor.reiterate = function<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, callbackFn: IIteratorNextCallback<TYield, TNext>,
                thisArg?: any): Iterator<TYield, TReturn, TNext> {
            var context: IReturnContext<TReturn> = { };
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined')
                return createRelayIterator<TYield, TReturn, TNext>(context, source, function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                    if (typeof context.return !== 'undefined') return context.return;
                    var result = source.next.apply(source, args);
                    if (result.done) {
                        context.return = result;
                        return result;
                    }
                    if (typeof args !== undefined && args.length > 0)
                        callbackFn.apply(undefined, <[TYield] | [TYield, TNext]>arrayUtil.concat(<any[]>[(<IteratorYieldResult<TYield>>result).value], args));
                    else
                        callbackFn((<IteratorYieldResult<TYield>>result).value);
                    return result;
                });
            return createRelayIterator<TYield, TReturn, TNext>(context, source, function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                if (typeof context.return !== 'undefined') return context.return;
                var result = source.next.apply(source, args);
                if (result.done) {
                    context.return = result;
                    return result;
                }
                if (typeof args !== undefined && args.length > 0)
                    callbackFn.apply(thisArg, <[TYield] | [TYield, TNext]>arrayUtil.concat(<any[]>[(<IteratorYieldResult<TYield>>result).value], args));
                else
                    callbackFn.call(thisArg, (<IteratorYieldResult<TYield>>result).value);
                return result;
            });
        };

        /**
         * Maps the yielded results of an iterator to another value or type.
         * @template TInput - The yielded result type for the source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TInput, TReturn, TNext>} source - The source iterator.
         * @param {IMapFunc<TInput, TYield, TNext>} mapper - A function that converts each value from the source iterator as it is yielded.
         * @param {*} [thisArg] - An optional object to which the 'this' keyword can refer in the mapper function.
         * @return {Iterator<TYield, TReturn, TNext>} The iterator with mapped values.
         * @static
         * @memberof IteratorFactory
         */
        constructor.map = function<TInput, TYield, TReturn = any, TNext = undefined>(source: Iterator<TInput, TReturn, TNext>, mapper: IMapFunc<TInput, TYield, TNext>,
                thisArg?: any): Iterator<TYield, TReturn, TNext> {
            var context: { return?: IteratorReturnResult<TReturn>; } = { };
            var iterator: Iterator<TYield, TReturn, TNext>;
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined') {
                iterator = {
                    next: function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                        if (typeof context.return !== 'undefined') return context.return;
                        var result = source.next.apply(source, args);
                        if (result.done) {
                            context.return = result;
                            return result;
                        }
                        if (typeof args !== undefined && args.length > 0)
                            return { value: mapper.apply(undefined, <[TInput] | [TInput, TNext]>arrayUtil.concat(<any[]>[result.value], args)) };
                        return { value: mapper(result.value) };
                    }
                };
                if (typeof source.return !== 'undefined')
                    iterator.return = function(value?: TReturn): IteratorResult<TYield, TReturn> {
                        if (typeof source.return === 'undefined')
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                        else {
                            var result = assertIteratorResult<TInput, TReturn>("return", (arguments.length > 0) ? source.return(value) : source.return());
                            if (result.done) {
                                context.return = result;
                                return result;
                            }
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                            return { value: mapper(result.value) };
                        }
                        if (typeof value !== 'undefined')
                            context.return.value = value;
                        return context.return;
                    };
                if (typeof source.throw !== 'undefined')
                    iterator.throw = function(e?: any): IteratorResult<TYield, TReturn> {
                        if (typeof source.throw === 'undefined')
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                        else {
                            var result = assertIteratorResult<TInput, TReturn>("throw", (arguments.length > 0) ? source.throw(e) : source.throw());
                            if (result.done) {
                                context.return = result;
                                return result;
                            }
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                            return { value: mapper(result.value) };
                        }
                        return context.return;
                    };
            } else {
                iterator = {
                    next: function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                        if (typeof context.return !== 'undefined') return context.return;
                        var result = source.next.apply(source, args);
                        if (result.done) {
                            context.return = result;
                            return result;
                        }
                        if (typeof args !== undefined && args.length > 0)
                            return { value: mapper.apply(thisArg, <[TInput] | [TInput, TNext]>arrayUtil.concat(<any[]>[result.value], args)) };
                        return { value: mapper.call(thisArg, result.value) }
                    }
                };
                if (typeof source.return !== 'undefined')
                    iterator.return = function(value?: TReturn): IteratorResult<TYield, TReturn> {
                        if (typeof source.return === 'undefined')
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                        else {
                            var result = source.return(value);
                            if (result.done) {
                                context.return = result;
                                return result;
                            }
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                            return { value: mapper.call(thisArg, result.value) };
                        }
                        if (typeof value !== 'undefined')
                            context.return.value = value;
                        return context.return;
                    };
                if (typeof source.throw !== 'undefined')
                    iterator.throw = function(e?: any): IteratorResult<TYield, TReturn> {
                        if (typeof source.throw === 'undefined')
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                        else {
                            var result = source.throw(e);
                            if (result.done) {
                                context.return = result;
                                return result;
                            }
                            context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                            return { value: mapper.call(thisArg, result.value) };
                        }
                        return context.return;
                    };
            }
            return iterator;
        };

        /**
         * Creates an aggregated value from all yielded values of an iterator.
         * @template TInput - The yielded result type for the source iterator.
         * @template TAcc - The type of aggregated value.
         * @param {Iterator<TInput>} source - The source iterator.
         * @param {TAcc} initialValue - The initial aggregated value.
         * @param {IReducerFunc<TAcc, TInput>} reducerFn - The function that calculates the aggregated value for each yielded iterator value.
         * @param {*} [thisArg] - An optional object to which the 'this' keyword can refer in the reducer function.
         * @return {TAcc} The final aggregated value.
         * @static
         * @memberof IteratorFactory
         */
        constructor.reduce = function<TInput, TAcc>(source: Iterator<TInput>, initialValue: TAcc, reducerFn: IReducerFunc<TAcc, TInput>,
                thisArg?: any): TAcc {
            var result = source.next();
            if (typeof thisArg === 'undefined')
                while (!result.done) {
                    initialValue = reducerFn(initialValue, result.value);
                    result = source.next();
                }
            else
                while (!result.done) {
                    initialValue = reducerFn.call(thisArg, initialValue, result.value);
                    result = source.next();
                }
            return initialValue;
        };

        /**
         * Gets the first yielded result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @param {*} [thisArg] - An optional object to which the 'this' keyword can refer in the predicate function.
         * @return {(TYield | undefined)} The first yielded result that wasn't filered out by the predicate.
         * @static
         * @memberof IteratorFactory
         */
        constructor.first = function<TYield>(source: Iterator<TYield>, predicate?: IPredicate<TYield>, thisArg?: any): TYield | undefined {
            var result = source.next();
            if (typeof predicate === 'undefined') {
                if (!result.done) return result.value;
            } else if (typeof thisArg === 'undefined')
                while (!result.done) {
                    if (predicate(result.value)) return result.value;
                    result = source.next();
                }
            else
                while (!result.done) {
                    if (predicate.call(thisArg, result.value)) return result.value;
                    result = source.next();
                }
        }

        /**
         * Gets the first yielded or default result from an iterator.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {(TYield | { (): TYield; })} ifEmpty - Default value or function that produces the default value if no value was yieled which was not filtered out.
         * @param {IPredicate<TYield>} [predicate] - Optional predicate that determines whether to ignore a yielded value.
         * @param {*} [thisArg] - An optional object to which the 'this' keyword can refer in the predicate function.
         * @return {TYield} The first yeilded value that was not filtered out or the default value.
         * @static
         * @memberof IteratorFactory
         */
        constructor.firstOrDefault = function<TYield>(source: Iterator<TYield>, ifEmpty: TYield | { (): TYield; }, predicate?: IPredicate<TYield>, thisArg?: any): TYield {
            var result = source.next();
            if (typeof predicate === 'undefined') {
                if (!result.done) return result.value;
            } else if (typeof thisArg === 'undefined')
                while (!result.done) {
                    if (predicate(result.value)) return result.value;
                    result = source.next();
                }
            else
                while (!result.done) {
                    if (predicate.call(thisArg, result.value)) return result.value;
                    result = source.next();
                }
            if (typeof ifEmpty === "function") return (<{ (): TYield; }>ifEmpty)();
            return ifEmpty;
        };
        
        /**
         * Creates a wrapper iterator that limits the number of iterations from a source iterator.
         * @template TYield - The yielded result type for the mapped iterator.
         * @template TReturn - The optional final value type for the iterator.
         * @template TNext - The optional parameter type for obtaining a yielded result.
         * @param {Iterator<TYield, TReturn, TNext>} source - The source iterator.
         * @param {number} count - The maximum number of iterations.
         * @return {Iterator<TYield, TReturn, TNext>} - A wrapper iterator with a limited number of iterations.
         * @static
         * @memberof IteratorFactory
         */
        constructor.limit = function<TYield, TReturn = any, TNext = undefined>(source: Iterator<TYield, TReturn, TNext>, count: number): Iterator<TYield, TReturn, TNext> {
            if (isNaN(count)) count = 0;
            var context: IReturnContext<TReturn> & { iterations: number; } = { iterations: 0 };
            return createRelayIterator<TYield, TReturn, TNext>(context, source, function(...args: [] | [TNext]): IteratorResult<TYield, TReturn> {
                if (typeof context.return !== 'undefined') return context.return;
                context.iterations++;
                if (context.iterations > count) {
                    context.return = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                    return context.return;
                }
                var result = source.next.apply(source, args);
                if (result.done) {
                    context.return = result;
                    return result;
                }
                return result;
            });
        }
        
        /**
         * Converts the yielded values of an interator to an array.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {number} [limit] - The optional maximum number of elements (iterations).
         * @return {TYield[]} The yielded values of the iterator.
         * @static
         * @memberof IteratorFactory
         */
        constructor.toArray = function<TYield>(source: Iterator<TYield>, limit?: number): TYield[] {
            var result = [];
            var yielded = source.next();
            if (typeof limit === 'number' && !isNaN(limit))
                while (result.length < limit && !yielded.done) {
                    result.push(yielded.value);
                    yielded = source.next();
                }
            else
                while (!yielded.done) {
                    result.push(yielded.value);
                    yielded = source.next();
                }
            return result;
        }

        // #endregion
        
        constructor.prototype = <IIteratorFactoryPrototype<T>>{
            initialize: function(source: T[]): void { this._source = source; },

            /**
             * Creates an interator from the array that was passed to the constructor.
             * @template TReturn - The optional final value type for the iterator.
             * @template TNext - The optional parameter type for obtaining a yielded result.
             * @param {ToArrayOptions<T, TReturn, TNext>} [options] - Options for the iterator implementation.
             * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array that was passed to the constructor.
             * @memberof IteratorFactory
             */
            iterator: function<TReturn = any, TNext = undefined>(this: IIteratorFactoryPrototype<T>, options?: ToArrayOptions<T, TReturn, TNext>): Iterator<T, TReturn, TNext> {
                var context: IReturnContext<TReturn> & {
                    index: number;
                    array: T[];
                    endIndex?: number;
                } = {
                    index: (typeof options === 'undefined' || typeof options.startIndex !== 'number' || options.startIndex < 0) ? 0 : options.startIndex,
                    array: this._source
                };
                
                if (typeof options !== 'undefined' && typeof options.count === 'number')
                    context.endIndex = (options.count < 1) ? context.index : context.index + options.count;
                
                var endOfIterationHandler: IEndOfIterationHandler<TReturn, TNext>;
                if (typeof options === 'undefined')
                    endOfIterationHandler = defaultEndOfIterationHandler;
                else if (typeof (<IToArrayOptions<T, TReturn, TNext>>options).onEndOfIteration === 'function')
                    endOfIterationHandler = function(...args: [] | [TNext]): IteratorReturnResult<TReturn> {
                        return <IteratorReturnResult<TReturn>>assertIteratorResult<T, TReturn>("next", (<IEndOfIterationHandler<TReturn, TNext>>(<IToArrayOptions<T, TReturn, TNext>>options).onEndOfIteration).apply(undefined, args));
                    };
                else if (typeof (<IToArrayOptionsWithFinalValue<T, TReturn>>options).endOfIterationValue !== 'undefined')
                    endOfIterationHandler = function(): IteratorReturnResult<TReturn> {
                        return { done: true, value: (<IToArrayOptionsWithFinalValue<T, TReturn>>options).endOfIterationValue };
                    };
                else
                    endOfIterationHandler = defaultEndOfIterationHandler;
                
                var iterator: Iterator<T, TReturn, TNext> = {
                    next: function(...args: [] | [TNext]): IteratorResult<T, TReturn> {
                        if (typeof context.return === 'undefined') {
                            if (context.index < ((typeof context.endIndex === 'number' && context.endIndex < context.array.length) ? context.endIndex : context.array.length)) {
                                var result:  IteratorYieldResult<T> = { value: context.array[context.index] };
                                context.index++;
                                return result;
                            }
                            context.return = endOfIterationHandler.apply(this, args);
                        }
                        return context.return;
                    }
                };

                if (typeof options !== 'undefined') {
                    if (typeof options.handleReturn === 'function')
                        iterator.return = function(value?: TReturn): IteratorResult<T, TReturn> {
                            var result: IteratorReturnResult<TReturn> = <IteratorReturnResult<TReturn>>assertIteratorResult<T, TReturn>("return", (<IReturnHandler<TReturn>>options.handleReturn)(value));
                            if (typeof context.return === 'undefined')
                                context.return = result;
                            return result;
                        };
                    else if (options.handleReturn === true)
                        iterator.return = function(value?: TReturn): IteratorResult<T, TReturn> {
                            var result: IteratorReturnResult<TReturn> = (typeof value === "undefined") ? <IteratorReturnResult<TReturn>><any>{ done: true, value: null } : { done: true, value: value };
                            if (typeof context.return === 'undefined')
                                context.return = result;
                            return result;
                        };
                    
                    if (typeof options.onThrow === 'function')
                        iterator.throw = function(e?: any): IteratorResult<T, TReturn> {
                            var result = assertIteratorResult<T, TReturn>("throw", (<IIteratorThrowHandler<T, TReturn>>options.onThrow)(e));
                            if (result.done && typeof context.return === 'undefined')
                                context.return = result;
                            return result;
                        };
                }
                return iterator;
            },

            type: "IteratorFactory"
        };

        // #region Private members

        function defaultEndOfIterationHandler<TReturn = null>(): IteratorReturnResult<TReturn> { return <IteratorReturnResult<TReturn>><any>{ done: true, value: null }; }

        function assertIteratorResult<TYield, TReturn = any>(methodName: string, iteratorResult: any | undefined): IteratorResult<TYield, TReturn> {
            if (typeof iteratorResult !== 'object' || iteratorResult === null)
                throw new TypeError("iterator." + methodName + "() returned a non-object value");
            if (typeof iteratorResult.done !== 'boolean' && typeof iteratorResult.value === 'undefined') throw new TypeError("Object returned by iterator." + methodName +
                "() does not imlement the IteratorResult interface");
            return <IteratorResult<TYield, TReturn>>iteratorResult;
        }

        function createRelayIterator<TYield, TReturn = any, TNext = undefined>(context: IReturnContext<TReturn>, source: Iterator<TYield, TReturn, TNext>,
                onNext: { (...args: [] | [TNext]): IteratorResult<TYield, TReturn>; }): Iterator<TYield, TReturn, TNext> {
            var relayIterator: Iterator<TYield, TReturn, TNext> = { next: onNext };
            if (typeof source.return !== 'undefined')
                relayIterator.return = function(value?: TReturn): IteratorResult<TYield, TReturn> {
                    var iteratorResult: IteratorResult<TYield, TReturn>;
                    if (typeof source.return === 'undefined') {
                        iteratorResult = (typeof value === 'undefined') ? <IteratorReturnResult<TReturn>><any>{ done: true, value: null } : { done: true, value: value };
                        if (typeof context.return === 'undefined')
                            context.return = iteratorResult;
                    } else {
                        iteratorResult = assertIteratorResult<TYield, TReturn>("return", (arguments.length > 0) ? source.return(value) : source.return());
                        if(typeof context.return === 'undefined') {
                            if (iteratorResult.done === true)
                                context.return = iteratorResult;
                            else
                                context.return = (typeof value === 'undefined') ? <IteratorReturnResult<TReturn>><any>{ done: true, value: null } : { done: true, value: value };
                        }
                    }
                    return iteratorResult;
                }
            if (typeof source.throw !== 'undefined')
                relayIterator.throw = function(e?: any): IteratorResult<TYield, TReturn> {
                    var iteratorResult: IteratorResult<TYield, TReturn>;
                    if (typeof source.throw === 'undefined') {
                        iteratorResult = <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                        if (typeof context.return === 'undefined')
                            context.return = iteratorResult;
                    } else {
                        iteratorResult = assertIteratorResult<TYield, TReturn>("throw", (arguments.length > 0) ? source.throw(e) : source.throw());
                        if (typeof context.return === 'undefined')
                            context.return = (iteratorResult.done === true) ? iteratorResult : <IteratorReturnResult<TReturn>><any>{ done: true, value: null };
                    }
                    return iteratorResult;
                }
            return relayIterator;
        }

        // #endregion
        
        return constructor;
    })();
}
