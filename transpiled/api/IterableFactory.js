"use strict";
var x_44813_iterables;
(function (x_44813_iterables) {
    // #region Callback definitions
    ;
    // #endregion
    x_44813_iterables.IteratorFactory = (function () {
        var constructor = Class.create();
        // #region Static members
        /**
         * Creates an iterator from a factory function
         * @template TYield - The yielded value type.
         * @template TReturn - The final value type.
         * @template TNext - The type of value that may be passed to the {@link Iterator.next} method.
         * @param {IIteratorNextFunc<TYield, TReturn, TNext>} onNext - The callback method that returns the next iteration result object.
         * @param {(boolean | IReturnHandler<TReturn>)} [handleReturn] - Deterimines whether the iterator will implement the {@link Iterator.return} method.
         * If this is a function, then it will be used as the {@link Iterator.return} method;
         * otherwise, if this is a true value, a return method will be created which creates teh return object from the optional parameter of the {@link Iterator.return} method.
         * @param {IIteratorThrowHandler<TYield, TReturn>} [onThrow] - Optional callback method that implements the {@link Iterator.throw} method.
         * @param {*} [thisObj] - The optional object to use as the 'this' object for callback methods.
         * @return {Iterator<TYield, TReturn, TNext>} The new iterator.
         * @memberof IteratorFactoryConstructor
         */
        constructor.create = function (onNext, handleReturn, onThrow, thisObj) {
            var iterator;
            var context = {};
            iterator = {
                next: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (typeof context["return"] !== 'undefined')
                        return context["return"];
                    var resultObj = assertIteratorResult("next", onNext.apply(thisObj, args));
                    if (resultObj.done === true)
                        context["return"] = resultObj;
                    return resultObj;
                }
            };
            if (typeof handleReturn === 'function')
                iterator["return"] = function (value) {
                    var resultObj = assertIteratorResult("next", (arguments.length == 0) ? handleReturn.call(thisObj) : handleReturn.call(thisObj, value));
                    if (typeof context["return"] === 'undefined')
                        context["return"] = resultObj;
                    return resultObj;
                };
            else if (handleReturn === true)
                iterator["return"] = function (value) {
                    var resultObj = { done: true, value: ((typeof value === 'undefined') ? null : value) };
                    if (typeof context["return"] === 'undefined')
                        context["return"] = resultObj;
                    return resultObj;
                };
            if (typeof onThrow === 'function')
                iterator["throw"] = function (e) {
                    var resultObj = assertIteratorResult("throw", (arguments.length == 0) ? onThrow.call(thisObj) : onThrow.call(thisObj, e));
                    if (resultObj.done === true && typeof context["return"] === 'undefined')
                        context["return"] = resultObj;
                    return resultObj;
                };
            return iterator;
        };
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
        constructor.filter = function (source, predicate, thisArg) {
            var context = {};
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined')
                return createRelayIterator(context, source, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (typeof context["return"] !== 'undefined')
                        return context["return"];
                    var result = assertIteratorResult("next", source.next.apply(source, args));
                    if (result.done) {
                        context["return"] = result;
                        return result;
                    }
                    if (typeof args !== undefined && args.length > 0) {
                        while (!predicate.apply(undefined, arrayUtil.concat([result.value], args))) {
                            if ((result = source.next.apply(source, args)).done) {
                                context["return"] = result;
                                break;
                            }
                        }
                    }
                    else
                        while (!predicate(result.value)) {
                            if ((result = source.next.apply(source, args)).done) {
                                context["return"] = result;
                                break;
                            }
                        }
                    return result;
                });
            return createRelayIterator(context, source, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof context["return"] !== 'undefined')
                    return context["return"];
                var result = source.next.apply(source, args);
                if (result.done) {
                    context["return"] = result;
                    return result;
                }
                if (typeof args !== undefined && args.length > 0)
                    while (!predicate.apply(thisArg, arrayUtil.concat([result.value], args))) {
                        if ((result = source.next.apply(source, args)).done) {
                            context["return"] = result;
                            break;
                        }
                    }
                else
                    while (!predicate.call(thisArg, result.value)) {
                        if ((result = source.next.apply(source, args)).done) {
                            context["return"] = result;
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
        constructor.reiterate = function (source, callbackFn, thisArg) {
            var context = {};
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined')
                return createRelayIterator(context, source, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (typeof context["return"] !== 'undefined')
                        return context["return"];
                    var result = source.next.apply(source, args);
                    if (result.done) {
                        context["return"] = result;
                        return result;
                    }
                    if (typeof args !== undefined && args.length > 0)
                        callbackFn.apply(undefined, arrayUtil.concat([result.value], args));
                    else
                        callbackFn(result.value);
                    return result;
                });
            return createRelayIterator(context, source, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof context["return"] !== 'undefined')
                    return context["return"];
                var result = source.next.apply(source, args);
                if (result.done) {
                    context["return"] = result;
                    return result;
                }
                if (typeof args !== undefined && args.length > 0)
                    callbackFn.apply(thisArg, arrayUtil.concat([result.value], args));
                else
                    callbackFn.call(thisArg, result.value);
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
        constructor.map = function (source, mapper, thisArg) {
            var context = {};
            var iterator;
            var arrayUtil = new global.ArrayUtil();
            if (typeof thisArg === 'undefined') {
                iterator = {
                    next: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (typeof context["return"] !== 'undefined')
                            return context["return"];
                        var result = source.next.apply(source, args);
                        if (result.done) {
                            context["return"] = result;
                            return result;
                        }
                        if (typeof args !== undefined && args.length > 0)
                            return { value: mapper.apply(undefined, arrayUtil.concat([result.value], args)) };
                        return { value: mapper(result.value) };
                    }
                };
                if (typeof source["return"] !== 'undefined')
                    iterator["return"] = function (value) {
                        if (typeof source["return"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = assertIteratorResult("return", (arguments.length > 0) ? source["return"](value) : source["return"]());
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper(result.value) };
                        }
                        if (typeof value !== 'undefined')
                            context["return"].value = value;
                        return context["return"];
                    };
                if (typeof source["throw"] !== 'undefined')
                    iterator["throw"] = function (e) {
                        if (typeof source["throw"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = assertIteratorResult("throw", (arguments.length > 0) ? source["throw"](e) : source["throw"]());
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper(result.value) };
                        }
                        return context["return"];
                    };
            }
            else {
                iterator = {
                    next: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (typeof context["return"] !== 'undefined')
                            return context["return"];
                        var result = source.next.apply(source, args);
                        if (result.done) {
                            context["return"] = result;
                            return result;
                        }
                        if (typeof args !== undefined && args.length > 0)
                            return { value: mapper.apply(thisArg, arrayUtil.concat([result.value], args)) };
                        return { value: mapper.call(thisArg, result.value) };
                    }
                };
                if (typeof source["return"] !== 'undefined')
                    iterator["return"] = function (value) {
                        if (typeof source["return"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = source["return"](value);
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper.call(thisArg, result.value) };
                        }
                        if (typeof value !== 'undefined')
                            context["return"].value = value;
                        return context["return"];
                    };
                if (typeof source["throw"] !== 'undefined')
                    iterator["throw"] = function (e) {
                        if (typeof source["throw"] === 'undefined')
                            context["return"] = { done: true, value: null };
                        else {
                            var result = source["throw"](e);
                            if (result.done) {
                                context["return"] = result;
                                return result;
                            }
                            context["return"] = { done: true, value: null };
                            return { value: mapper.call(thisArg, result.value) };
                        }
                        return context["return"];
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
        constructor.reduce = function (source, initialValue, reducerFn, thisArg) {
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
        constructor.first = function (source, predicate, thisArg) {
            var result = source.next();
            if (typeof predicate === 'undefined') {
                if (!result.done)
                    return result.value;
            }
            else if (typeof thisArg === 'undefined')
                while (!result.done) {
                    if (predicate(result.value))
                        return result.value;
                    result = source.next();
                }
            else
                while (!result.done) {
                    if (predicate.call(thisArg, result.value))
                        return result.value;
                    result = source.next();
                }
        };
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
        constructor.firstOrDefault = function (source, ifEmpty, predicate, thisArg) {
            var result = source.next();
            if (typeof predicate === 'undefined') {
                if (!result.done)
                    return result.value;
            }
            else if (typeof thisArg === 'undefined')
                while (!result.done) {
                    if (predicate(result.value))
                        return result.value;
                    result = source.next();
                }
            else
                while (!result.done) {
                    if (predicate.call(thisArg, result.value))
                        return result.value;
                    result = source.next();
                }
            if (typeof ifEmpty === "function")
                return ifEmpty();
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
        constructor.limit = function (source, count) {
            if (isNaN(count))
                count = 0;
            var context = { iterations: 0 };
            return createRelayIterator(context, source, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof context["return"] !== 'undefined')
                    return context["return"];
                context.iterations++;
                if (context.iterations > count) {
                    context["return"] = { done: true, value: null };
                    return context["return"];
                }
                var result = source.next.apply(source, args);
                if (result.done) {
                    context["return"] = result;
                    return result;
                }
                return result;
            });
        };
        /**
         * Converts the yielded values of an interator to an array.
         * @template TYield - The yielded result type for the iterator.
         * @param {Iterator<TYield>} source - The source iterator.
         * @param {number} [limit] - The optional maximum number of elements (iterations).
         * @return {TYield[]} The yielded values of the iterator.
         * @static
         * @memberof IteratorFactory
         */
        constructor.toArray = function (source, limit) {
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
        };
        // #endregion
        constructor.prototype = {
            initialize: function (source) { this._source = source; },
            /**
             * Creates an interator from the array that was passed to the constructor.
             * @template TReturn - The optional final value type for the iterator.
             * @template TNext - The optional parameter type for obtaining a yielded result.
             * @param {ToArrayOptions<T, TReturn, TNext>} [options] - Options for the iterator implementation.
             * @return {Iterator<T, TReturn, TNext>} - The iterator created from the array that was passed to the constructor.
             * @memberof IteratorFactory
             */
            iterator: function (options) {
                var context = {
                    index: (typeof options === 'undefined' || typeof options.startIndex !== 'number' || options.startIndex < 0) ? 0 : options.startIndex,
                    array: this._source
                };
                if (typeof options !== 'undefined' && typeof options.count === 'number')
                    context.endIndex = (options.count < 1) ? context.index : context.index + options.count;
                var endOfIterationHandler;
                if (typeof options === 'undefined')
                    endOfIterationHandler = defaultEndOfIterationHandler;
                else if (typeof options.onEndOfIteration === 'function')
                    endOfIterationHandler = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return assertIteratorResult("next", options.onEndOfIteration.apply(undefined, args));
                    };
                else if (typeof options.endOfIterationValue !== 'undefined')
                    endOfIterationHandler = function () {
                        return { done: true, value: options.endOfIterationValue };
                    };
                else
                    endOfIterationHandler = defaultEndOfIterationHandler;
                var iterator = {
                    next: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (typeof context["return"] === 'undefined') {
                            if (context.index < ((typeof context.endIndex === 'number' && context.endIndex < context.array.length) ? context.endIndex : context.array.length)) {
                                var result = { value: context.array[context.index] };
                                context.index++;
                                return result;
                            }
                            context["return"] = endOfIterationHandler.apply(this, args);
                        }
                        return context["return"];
                    }
                };
                if (typeof options !== 'undefined') {
                    if (typeof options.handleReturn === 'function')
                        iterator["return"] = function (value) {
                            var result = assertIteratorResult("return", options.handleReturn(value));
                            if (typeof context["return"] === 'undefined')
                                context["return"] = result;
                            return result;
                        };
                    else if (options.handleReturn === true)
                        iterator["return"] = function (value) {
                            var result = (typeof value === "undefined") ? { done: true, value: null } : { done: true, value: value };
                            if (typeof context["return"] === 'undefined')
                                context["return"] = result;
                            return result;
                        };
                    if (typeof options.onThrow === 'function')
                        iterator["throw"] = function (e) {
                            var result = assertIteratorResult("throw", options.onThrow(e));
                            if (result.done && typeof context["return"] === 'undefined')
                                context["return"] = result;
                            return result;
                        };
                }
                return iterator;
            },
            type: "IteratorFactory"
        };
        // #region Private members
        function defaultEndOfIterationHandler() { return { done: true, value: null }; }
        function assertIteratorResult(methodName, iteratorResult) {
            if (typeof iteratorResult !== 'object' || iteratorResult === null)
                throw new TypeError("iterator." + methodName + "() returned a non-object value");
            if (typeof iteratorResult.done !== 'boolean' && typeof iteratorResult.value === 'undefined')
                throw new TypeError("Object returned by iterator." + methodName +
                    "() does not imlement the IteratorResult interface");
            return iteratorResult;
        }
        function createRelayIterator(context, source, onNext) {
            var relayIterator = { next: onNext };
            if (typeof source["return"] !== 'undefined')
                relayIterator["return"] = function (value) {
                    var iteratorResult;
                    if (typeof source["return"] === 'undefined') {
                        iteratorResult = (typeof value === 'undefined') ? { done: true, value: null } : { done: true, value: value };
                        if (typeof context["return"] === 'undefined')
                            context["return"] = iteratorResult;
                    }
                    else {
                        iteratorResult = assertIteratorResult("return", (arguments.length > 0) ? source["return"](value) : source["return"]());
                        if (typeof context["return"] === 'undefined') {
                            if (iteratorResult.done === true)
                                context["return"] = iteratorResult;
                            else
                                context["return"] = (typeof value === 'undefined') ? { done: true, value: null } : { done: true, value: value };
                        }
                    }
                    return iteratorResult;
                };
            if (typeof source["throw"] !== 'undefined')
                relayIterator["throw"] = function (e) {
                    var iteratorResult;
                    if (typeof source["throw"] === 'undefined') {
                        iteratorResult = { done: true, value: null };
                        if (typeof context["return"] === 'undefined')
                            context["return"] = iteratorResult;
                    }
                    else {
                        iteratorResult = assertIteratorResult("throw", (arguments.length > 0) ? source["throw"](e) : source["throw"]());
                        if (typeof context["return"] === 'undefined')
                            context["return"] = (iteratorResult.done === true) ? iteratorResult : { done: true, value: null };
                    }
                    return iteratorResult;
                };
            return relayIterator;
        }
        // #endregion
        return constructor;
    })();
})(x_44813_iterables || (x_44813_iterables = {}));
