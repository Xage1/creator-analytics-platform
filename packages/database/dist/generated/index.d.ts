
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Creator
 * 
 */
export type Creator = $Result.DefaultSelection<Prisma.$CreatorPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model MetricSnapshot
 * 
 */
export type MetricSnapshot = $Result.DefaultSelection<Prisma.$MetricSnapshotPayload>
/**
 * Model EngagementStats
 * 
 */
export type EngagementStats = $Result.DefaultSelection<Prisma.$EngagementStatsPayload>
/**
 * Model AnomalyEvent
 * 
 */
export type AnomalyEvent = $Result.DefaultSelection<Prisma.$AnomalyEventPayload>
/**
 * Model SentimentScore
 * 
 */
export type SentimentScore = $Result.DefaultSelection<Prisma.$SentimentScorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  CAROUSEL: 'CAROUSEL',
  STORY: 'STORY',
  LIVE: 'LIVE',
  OTHER: 'OTHER'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


export const AnalyticsPeriod: {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY'
};

export type AnalyticsPeriod = (typeof AnalyticsPeriod)[keyof typeof AnalyticsPeriod]


export const AnomalySeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type AnomalySeverity = (typeof AnomalySeverity)[keyof typeof AnomalySeverity]


export const AnomalyStatus: {
  OPEN: 'OPEN',
  ACKNOWLEDGED: 'ACKNOWLEDGED',
  RESOLVED: 'RESOLVED',
  IGNORED: 'IGNORED'
};

export type AnomalyStatus = (typeof AnomalyStatus)[keyof typeof AnomalyStatus]


export const SentimentLabel: {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
  NEUTRAL: 'NEUTRAL',
  MIXED: 'MIXED'
};

export type SentimentLabel = (typeof SentimentLabel)[keyof typeof SentimentLabel]

}

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

export type AnalyticsPeriod = $Enums.AnalyticsPeriod

export const AnalyticsPeriod: typeof $Enums.AnalyticsPeriod

export type AnomalySeverity = $Enums.AnomalySeverity

export const AnomalySeverity: typeof $Enums.AnomalySeverity

export type AnomalyStatus = $Enums.AnomalyStatus

export const AnomalyStatus: typeof $Enums.AnomalyStatus

export type SentimentLabel = $Enums.SentimentLabel

export const SentimentLabel: typeof $Enums.SentimentLabel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Platforms
 * const platforms = await prisma.platform.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Platforms
   * const platforms = await prisma.platform.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creator`: Exposes CRUD operations for the **Creator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creator.findMany()
    * ```
    */
  get creator(): Prisma.CreatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricSnapshot`: Exposes CRUD operations for the **MetricSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricSnapshots
    * const metricSnapshots = await prisma.metricSnapshot.findMany()
    * ```
    */
  get metricSnapshot(): Prisma.MetricSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engagementStats`: Exposes CRUD operations for the **EngagementStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EngagementStats
    * const engagementStats = await prisma.engagementStats.findMany()
    * ```
    */
  get engagementStats(): Prisma.EngagementStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anomalyEvent`: Exposes CRUD operations for the **AnomalyEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnomalyEvents
    * const anomalyEvents = await prisma.anomalyEvent.findMany()
    * ```
    */
  get anomalyEvent(): Prisma.AnomalyEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sentimentScore`: Exposes CRUD operations for the **SentimentScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentimentScores
    * const sentimentScores = await prisma.sentimentScore.findMany()
    * ```
    */
  get sentimentScore(): Prisma.SentimentScoreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Platform: 'Platform',
    Creator: 'Creator',
    Post: 'Post',
    MetricSnapshot: 'MetricSnapshot',
    EngagementStats: 'EngagementStats',
    AnomalyEvent: 'AnomalyEvent',
    SentimentScore: 'SentimentScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "platform" | "creator" | "post" | "metricSnapshot" | "engagementStats" | "anomalyEvent" | "sentimentScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Creator: {
        payload: Prisma.$CreatorPayload<ExtArgs>
        fields: Prisma.CreatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          findFirst: {
            args: Prisma.CreatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          findMany: {
            args: Prisma.CreatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>[]
          }
          create: {
            args: Prisma.CreatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          createMany: {
            args: Prisma.CreatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>[]
          }
          delete: {
            args: Prisma.CreatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          update: {
            args: Prisma.CreatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          deleteMany: {
            args: Prisma.CreatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>[]
          }
          upsert: {
            args: Prisma.CreatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          aggregate: {
            args: Prisma.CreatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreator>
          }
          groupBy: {
            args: Prisma.CreatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatorCountArgs<ExtArgs>
            result: $Utils.Optional<CreatorCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      MetricSnapshot: {
        payload: Prisma.$MetricSnapshotPayload<ExtArgs>
        fields: Prisma.MetricSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          findFirst: {
            args: Prisma.MetricSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          findMany: {
            args: Prisma.MetricSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>[]
          }
          create: {
            args: Prisma.MetricSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          createMany: {
            args: Prisma.MetricSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>[]
          }
          delete: {
            args: Prisma.MetricSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          update: {
            args: Prisma.MetricSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MetricSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.MetricSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          aggregate: {
            args: Prisma.MetricSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricSnapshot>
          }
          groupBy: {
            args: Prisma.MetricSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MetricSnapshotCountAggregateOutputType> | number
          }
        }
      }
      EngagementStats: {
        payload: Prisma.$EngagementStatsPayload<ExtArgs>
        fields: Prisma.EngagementStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngagementStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngagementStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>
          }
          findFirst: {
            args: Prisma.EngagementStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngagementStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>
          }
          findMany: {
            args: Prisma.EngagementStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>[]
          }
          create: {
            args: Prisma.EngagementStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>
          }
          createMany: {
            args: Prisma.EngagementStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EngagementStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>[]
          }
          delete: {
            args: Prisma.EngagementStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>
          }
          update: {
            args: Prisma.EngagementStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>
          }
          deleteMany: {
            args: Prisma.EngagementStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngagementStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EngagementStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>[]
          }
          upsert: {
            args: Prisma.EngagementStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementStatsPayload>
          }
          aggregate: {
            args: Prisma.EngagementStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngagementStats>
          }
          groupBy: {
            args: Prisma.EngagementStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngagementStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngagementStatsCountArgs<ExtArgs>
            result: $Utils.Optional<EngagementStatsCountAggregateOutputType> | number
          }
        }
      }
      AnomalyEvent: {
        payload: Prisma.$AnomalyEventPayload<ExtArgs>
        fields: Prisma.AnomalyEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnomalyEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnomalyEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          findFirst: {
            args: Prisma.AnomalyEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnomalyEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          findMany: {
            args: Prisma.AnomalyEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>[]
          }
          create: {
            args: Prisma.AnomalyEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          createMany: {
            args: Prisma.AnomalyEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnomalyEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>[]
          }
          delete: {
            args: Prisma.AnomalyEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          update: {
            args: Prisma.AnomalyEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          deleteMany: {
            args: Prisma.AnomalyEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnomalyEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnomalyEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>[]
          }
          upsert: {
            args: Prisma.AnomalyEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyEventPayload>
          }
          aggregate: {
            args: Prisma.AnomalyEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnomalyEvent>
          }
          groupBy: {
            args: Prisma.AnomalyEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnomalyEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnomalyEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnomalyEventCountAggregateOutputType> | number
          }
        }
      }
      SentimentScore: {
        payload: Prisma.$SentimentScorePayload<ExtArgs>
        fields: Prisma.SentimentScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentimentScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentimentScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          findFirst: {
            args: Prisma.SentimentScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentimentScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          findMany: {
            args: Prisma.SentimentScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>[]
          }
          create: {
            args: Prisma.SentimentScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          createMany: {
            args: Prisma.SentimentScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentimentScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>[]
          }
          delete: {
            args: Prisma.SentimentScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          update: {
            args: Prisma.SentimentScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          deleteMany: {
            args: Prisma.SentimentScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentimentScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SentimentScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>[]
          }
          upsert: {
            args: Prisma.SentimentScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentScorePayload>
          }
          aggregate: {
            args: Prisma.SentimentScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentimentScore>
          }
          groupBy: {
            args: Prisma.SentimentScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentimentScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentimentScoreCountArgs<ExtArgs>
            result: $Utils.Optional<SentimentScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    platform?: PlatformOmit
    creator?: CreatorOmit
    post?: PostOmit
    metricSnapshot?: MetricSnapshotOmit
    engagementStats?: EngagementStatsOmit
    anomalyEvent?: AnomalyEventOmit
    sentimentScore?: SentimentScoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    creators: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creators?: boolean | PlatformCountOutputTypeCountCreatorsArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountCreatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorWhereInput
  }


  /**
   * Count Type CreatorCountOutputType
   */

  export type CreatorCountOutputType = {
    posts: number
    metricSnapshots: number
    engagementStats: number
    anomalyEvents: number
  }

  export type CreatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CreatorCountOutputTypeCountPostsArgs
    metricSnapshots?: boolean | CreatorCountOutputTypeCountMetricSnapshotsArgs
    engagementStats?: boolean | CreatorCountOutputTypeCountEngagementStatsArgs
    anomalyEvents?: boolean | CreatorCountOutputTypeCountAnomalyEventsArgs
  }

  // Custom InputTypes
  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorCountOutputType
     */
    select?: CreatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountMetricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricSnapshotWhereInput
  }

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountEngagementStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementStatsWhereInput
  }

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountAnomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyEventWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    metricSnapshots: number
    sentimentScores: number
    anomalyEvents: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metricSnapshots?: boolean | PostCountOutputTypeCountMetricSnapshotsArgs
    sentimentScores?: boolean | PostCountOutputTypeCountSentimentScoresArgs
    anomalyEvents?: boolean | PostCountOutputTypeCountAnomalyEventsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMetricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricSnapshotWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSentimentScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentScoreWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountAnomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    baseUrl: string | null
    description: string | null
    logoUrl: string | null
    supportsFollowers: boolean | null
    supportsLikes: boolean | null
    supportsComments: boolean | null
    supportsViews: boolean | null
    supportsShares: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    baseUrl: string | null
    description: string | null
    logoUrl: string | null
    supportsFollowers: boolean | null
    supportsLikes: boolean | null
    supportsComments: boolean | null
    supportsViews: boolean | null
    supportsShares: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    baseUrl: number
    description: number
    logoUrl: number
    supportsFollowers: number
    supportsLikes: number
    supportsComments: number
    supportsViews: number
    supportsShares: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlatformMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    baseUrl?: true
    description?: true
    logoUrl?: true
    supportsFollowers?: true
    supportsLikes?: true
    supportsComments?: true
    supportsViews?: true
    supportsShares?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    baseUrl?: true
    description?: true
    logoUrl?: true
    supportsFollowers?: true
    supportsLikes?: true
    supportsComments?: true
    supportsViews?: true
    supportsShares?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    baseUrl?: true
    description?: true
    logoUrl?: true
    supportsFollowers?: true
    supportsLikes?: true
    supportsComments?: true
    supportsViews?: true
    supportsShares?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: string
    name: string
    slug: string
    baseUrl: string
    description: string | null
    logoUrl: string | null
    supportsFollowers: boolean
    supportsLikes: boolean
    supportsComments: boolean
    supportsViews: boolean
    supportsShares: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlatformCountAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    baseUrl?: boolean
    description?: boolean
    logoUrl?: boolean
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creators?: boolean | Platform$creatorsArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    baseUrl?: boolean
    description?: boolean
    logoUrl?: boolean
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    baseUrl?: boolean
    description?: boolean
    logoUrl?: boolean
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    baseUrl?: boolean
    description?: boolean
    logoUrl?: boolean
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "baseUrl" | "description" | "logoUrl" | "supportsFollowers" | "supportsLikes" | "supportsComments" | "supportsViews" | "supportsShares" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creators?: boolean | Platform$creatorsArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      /**
       * Relationships
       */
      creators: Prisma.$CreatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Display Name
       */
      name: string
      /**
       * Internal identifier
       */
      slug: string
      /**
       * Homepage
       */
      baseUrl: string
      /**
       * Optional description
       */
      description: string | null
      /**
       * Branding
       */
      logoUrl: string | null
      /**
       * Capabilities
       */
      supportsFollowers: boolean
      supportsLikes: boolean
      supportsComments: boolean
      supportsViews: boolean
      supportsShares: boolean
      /**
       * Status
       */
      isActive: boolean
      /**
       * Audit
       */
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platforms and returns the data saved in the database.
     * @param {PlatformCreateManyAndReturnArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms and returns the data updated in the database.
     * @param {PlatformUpdateManyAndReturnArgs} args - Arguments to update many Platforms.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creators<T extends Platform$creatorsArgs<ExtArgs> = {}>(args?: Subset<T, Platform$creatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'String'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly slug: FieldRef<"Platform", 'String'>
    readonly baseUrl: FieldRef<"Platform", 'String'>
    readonly description: FieldRef<"Platform", 'String'>
    readonly logoUrl: FieldRef<"Platform", 'String'>
    readonly supportsFollowers: FieldRef<"Platform", 'Boolean'>
    readonly supportsLikes: FieldRef<"Platform", 'Boolean'>
    readonly supportsComments: FieldRef<"Platform", 'Boolean'>
    readonly supportsViews: FieldRef<"Platform", 'Boolean'>
    readonly supportsShares: FieldRef<"Platform", 'Boolean'>
    readonly isActive: FieldRef<"Platform", 'Boolean'>
    readonly createdAt: FieldRef<"Platform", 'DateTime'>
    readonly updatedAt: FieldRef<"Platform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform createManyAndReturn
   */
  export type PlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform updateManyAndReturn
   */
  export type PlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.creators
   */
  export type Platform$creatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    where?: CreatorWhereInput
    orderBy?: CreatorOrderByWithRelationInput | CreatorOrderByWithRelationInput[]
    cursor?: CreatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model Creator
   */

  export type AggregateCreator = {
    _count: CreatorCountAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
  }

  export type CreatorMinAggregateOutputType = {
    id: string | null
    platformId: string | null
    externalId: string | null
    username: string | null
    displayName: string | null
    profileUrl: string | null
    bio: string | null
    avatarUrl: string | null
    isVerified: boolean | null
    isActive: boolean | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreatorMaxAggregateOutputType = {
    id: string | null
    platformId: string | null
    externalId: string | null
    username: string | null
    displayName: string | null
    profileUrl: string | null
    bio: string | null
    avatarUrl: string | null
    isVerified: boolean | null
    isActive: boolean | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreatorCountAggregateOutputType = {
    id: number
    platformId: number
    externalId: number
    username: number
    displayName: number
    profileUrl: number
    bio: number
    avatarUrl: number
    isVerified: number
    isActive: number
    firstSeenAt: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreatorMinAggregateInputType = {
    id?: true
    platformId?: true
    externalId?: true
    username?: true
    displayName?: true
    profileUrl?: true
    bio?: true
    avatarUrl?: true
    isVerified?: true
    isActive?: true
    firstSeenAt?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreatorMaxAggregateInputType = {
    id?: true
    platformId?: true
    externalId?: true
    username?: true
    displayName?: true
    profileUrl?: true
    bio?: true
    avatarUrl?: true
    isVerified?: true
    isActive?: true
    firstSeenAt?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreatorCountAggregateInputType = {
    id?: true
    platformId?: true
    externalId?: true
    username?: true
    displayName?: true
    profileUrl?: true
    bio?: true
    avatarUrl?: true
    isVerified?: true
    isActive?: true
    firstSeenAt?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creator to aggregate.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: CreatorOrderByWithRelationInput | CreatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Creators
    **/
    _count?: true | CreatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorMaxAggregateInputType
  }

  export type GetCreatorAggregateType<T extends CreatorAggregateArgs> = {
        [P in keyof T & keyof AggregateCreator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreator[P]>
      : GetScalarType<T[P], AggregateCreator[P]>
  }




  export type CreatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorWhereInput
    orderBy?: CreatorOrderByWithAggregationInput | CreatorOrderByWithAggregationInput[]
    by: CreatorScalarFieldEnum[] | CreatorScalarFieldEnum
    having?: CreatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorCountAggregateInputType | true
    _min?: CreatorMinAggregateInputType
    _max?: CreatorMaxAggregateInputType
  }

  export type CreatorGroupByOutputType = {
    id: string
    platformId: string
    externalId: string
    username: string | null
    displayName: string | null
    profileUrl: string | null
    bio: string | null
    avatarUrl: string | null
    isVerified: boolean
    isActive: boolean
    firstSeenAt: Date
    lastSeenAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CreatorCountAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
  }

  type GetCreatorGroupByPayload<T extends CreatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorGroupByOutputType[P]>
        }
      >
    >


  export type CreatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    externalId?: boolean
    username?: boolean
    displayName?: boolean
    profileUrl?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
    posts?: boolean | Creator$postsArgs<ExtArgs>
    metricSnapshots?: boolean | Creator$metricSnapshotsArgs<ExtArgs>
    engagementStats?: boolean | Creator$engagementStatsArgs<ExtArgs>
    anomalyEvents?: boolean | Creator$anomalyEventsArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creator"]>

  export type CreatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    externalId?: boolean
    username?: boolean
    displayName?: boolean
    profileUrl?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creator"]>

  export type CreatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformId?: boolean
    externalId?: boolean
    username?: boolean
    displayName?: boolean
    profileUrl?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creator"]>

  export type CreatorSelectScalar = {
    id?: boolean
    platformId?: boolean
    externalId?: boolean
    username?: boolean
    displayName?: boolean
    profileUrl?: boolean
    bio?: boolean
    avatarUrl?: boolean
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platformId" | "externalId" | "username" | "displayName" | "profileUrl" | "bio" | "avatarUrl" | "isVerified" | "isActive" | "firstSeenAt" | "lastSeenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["creator"]>
  export type CreatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
    posts?: boolean | Creator$postsArgs<ExtArgs>
    metricSnapshots?: boolean | Creator$metricSnapshotsArgs<ExtArgs>
    engagementStats?: boolean | Creator$engagementStatsArgs<ExtArgs>
    anomalyEvents?: boolean | Creator$anomalyEventsArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }
  export type CreatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }

  export type $CreatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Creator"
    objects: {
      platform: Prisma.$PlatformPayload<ExtArgs>
      /**
       * Relationships
       */
      posts: Prisma.$PostPayload<ExtArgs>[]
      metricSnapshots: Prisma.$MetricSnapshotPayload<ExtArgs>[]
      engagementStats: Prisma.$EngagementStatsPayload<ExtArgs>[]
      anomalyEvents: Prisma.$AnomalyEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Platform relationship
       */
      platformId: string
      /**
       * Platform-specific account identity
       */
      externalId: string
      username: string | null
      /**
       * Public profile information
       */
      displayName: string | null
      profileUrl: string | null
      bio: string | null
      avatarUrl: string | null
      isVerified: boolean
      /**
       * Tracking status
       */
      isActive: boolean
      firstSeenAt: Date
      lastSeenAt: Date | null
      /**
       * Audit
       */
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creator"]>
    composites: {}
  }

  type CreatorGetPayload<S extends boolean | null | undefined | CreatorDefaultArgs> = $Result.GetResult<Prisma.$CreatorPayload, S>

  type CreatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatorCountAggregateInputType | true
    }

  export interface CreatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Creator'], meta: { name: 'Creator' } }
    /**
     * Find zero or one Creator that matches the filter.
     * @param {CreatorFindUniqueArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatorFindUniqueArgs>(args: SelectSubset<T, CreatorFindUniqueArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatorFindUniqueOrThrowArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatorFindUniqueOrThrowArgs>(args: SelectSubset<T, CreatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorFindFirstArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatorFindFirstArgs>(args?: SelectSubset<T, CreatorFindFirstArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorFindFirstOrThrowArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatorFindFirstOrThrowArgs>(args?: SelectSubset<T, CreatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creators
     * const creators = await prisma.creator.findMany()
     * 
     * // Get first 10 Creators
     * const creators = await prisma.creator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creatorWithIdOnly = await prisma.creator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreatorFindManyArgs>(args?: SelectSubset<T, CreatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creator.
     * @param {CreatorCreateArgs} args - Arguments to create a Creator.
     * @example
     * // Create one Creator
     * const Creator = await prisma.creator.create({
     *   data: {
     *     // ... data to create a Creator
     *   }
     * })
     * 
     */
    create<T extends CreatorCreateArgs>(args: SelectSubset<T, CreatorCreateArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creators.
     * @param {CreatorCreateManyArgs} args - Arguments to create many Creators.
     * @example
     * // Create many Creators
     * const creator = await prisma.creator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreatorCreateManyArgs>(args?: SelectSubset<T, CreatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creators and returns the data saved in the database.
     * @param {CreatorCreateManyAndReturnArgs} args - Arguments to create many Creators.
     * @example
     * // Create many Creators
     * const creator = await prisma.creator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creators and only return the `id`
     * const creatorWithIdOnly = await prisma.creator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreatorCreateManyAndReturnArgs>(args?: SelectSubset<T, CreatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creator.
     * @param {CreatorDeleteArgs} args - Arguments to delete one Creator.
     * @example
     * // Delete one Creator
     * const Creator = await prisma.creator.delete({
     *   where: {
     *     // ... filter to delete one Creator
     *   }
     * })
     * 
     */
    delete<T extends CreatorDeleteArgs>(args: SelectSubset<T, CreatorDeleteArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creator.
     * @param {CreatorUpdateArgs} args - Arguments to update one Creator.
     * @example
     * // Update one Creator
     * const creator = await prisma.creator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreatorUpdateArgs>(args: SelectSubset<T, CreatorUpdateArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creators.
     * @param {CreatorDeleteManyArgs} args - Arguments to filter Creators to delete.
     * @example
     * // Delete a few Creators
     * const { count } = await prisma.creator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreatorDeleteManyArgs>(args?: SelectSubset<T, CreatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creators
     * const creator = await prisma.creator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreatorUpdateManyArgs>(args: SelectSubset<T, CreatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creators and returns the data updated in the database.
     * @param {CreatorUpdateManyAndReturnArgs} args - Arguments to update many Creators.
     * @example
     * // Update many Creators
     * const creator = await prisma.creator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creators and only return the `id`
     * const creatorWithIdOnly = await prisma.creator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreatorUpdateManyAndReturnArgs>(args: SelectSubset<T, CreatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creator.
     * @param {CreatorUpsertArgs} args - Arguments to update or create a Creator.
     * @example
     * // Update or create a Creator
     * const creator = await prisma.creator.upsert({
     *   create: {
     *     // ... data to create a Creator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creator we want to update
     *   }
     * })
     */
    upsert<T extends CreatorUpsertArgs>(args: SelectSubset<T, CreatorUpsertArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorCountArgs} args - Arguments to filter Creators to count.
     * @example
     * // Count the number of Creators
     * const count = await prisma.creator.count({
     *   where: {
     *     // ... the filter for the Creators we want to count
     *   }
     * })
    **/
    count<T extends CreatorCountArgs>(
      args?: Subset<T, CreatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreatorAggregateArgs>(args: Subset<T, CreatorAggregateArgs>): Prisma.PrismaPromise<GetCreatorAggregateType<T>>

    /**
     * Group by Creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatorGroupByArgs['orderBy'] }
        : { orderBy?: CreatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Creator model
   */
  readonly fields: CreatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends Creator$postsArgs<ExtArgs> = {}>(args?: Subset<T, Creator$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metricSnapshots<T extends Creator$metricSnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Creator$metricSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    engagementStats<T extends Creator$engagementStatsArgs<ExtArgs> = {}>(args?: Subset<T, Creator$engagementStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anomalyEvents<T extends Creator$anomalyEventsArgs<ExtArgs> = {}>(args?: Subset<T, Creator$anomalyEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Creator model
   */
  interface CreatorFieldRefs {
    readonly id: FieldRef<"Creator", 'String'>
    readonly platformId: FieldRef<"Creator", 'String'>
    readonly externalId: FieldRef<"Creator", 'String'>
    readonly username: FieldRef<"Creator", 'String'>
    readonly displayName: FieldRef<"Creator", 'String'>
    readonly profileUrl: FieldRef<"Creator", 'String'>
    readonly bio: FieldRef<"Creator", 'String'>
    readonly avatarUrl: FieldRef<"Creator", 'String'>
    readonly isVerified: FieldRef<"Creator", 'Boolean'>
    readonly isActive: FieldRef<"Creator", 'Boolean'>
    readonly firstSeenAt: FieldRef<"Creator", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Creator", 'DateTime'>
    readonly createdAt: FieldRef<"Creator", 'DateTime'>
    readonly updatedAt: FieldRef<"Creator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Creator findUnique
   */
  export type CreatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where: CreatorWhereUniqueInput
  }

  /**
   * Creator findUniqueOrThrow
   */
  export type CreatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where: CreatorWhereUniqueInput
  }

  /**
   * Creator findFirst
   */
  export type CreatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: CreatorOrderByWithRelationInput | CreatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creators.
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creators.
     */
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * Creator findFirstOrThrow
   */
  export type CreatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: CreatorOrderByWithRelationInput | CreatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creators.
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creators.
     */
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * Creator findMany
   */
  export type CreatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creators to fetch.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: CreatorOrderByWithRelationInput | CreatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Creators.
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }

  /**
   * Creator create
   */
  export type CreatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Creator.
     */
    data: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
  }

  /**
   * Creator createMany
   */
  export type CreatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creators.
     */
    data: CreatorCreateManyInput | CreatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Creator createManyAndReturn
   */
  export type CreatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * The data used to create many Creators.
     */
    data: CreatorCreateManyInput | CreatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creator update
   */
  export type CreatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Creator.
     */
    data: XOR<CreatorUpdateInput, CreatorUncheckedUpdateInput>
    /**
     * Choose, which Creator to update.
     */
    where: CreatorWhereUniqueInput
  }

  /**
   * Creator updateMany
   */
  export type CreatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Creators.
     */
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyInput>
    /**
     * Filter which Creators to update
     */
    where?: CreatorWhereInput
    /**
     * Limit how many Creators to update.
     */
    limit?: number
  }

  /**
   * Creator updateManyAndReturn
   */
  export type CreatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * The data used to update Creators.
     */
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyInput>
    /**
     * Filter which Creators to update
     */
    where?: CreatorWhereInput
    /**
     * Limit how many Creators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Creator upsert
   */
  export type CreatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Creator to update in case it exists.
     */
    where: CreatorWhereUniqueInput
    /**
     * In case the Creator found by the `where` argument doesn't exist, create a new Creator with this data.
     */
    create: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
    /**
     * In case the Creator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatorUpdateInput, CreatorUncheckedUpdateInput>
  }

  /**
   * Creator delete
   */
  export type CreatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter which Creator to delete.
     */
    where: CreatorWhereUniqueInput
  }

  /**
   * Creator deleteMany
   */
  export type CreatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creators to delete
     */
    where?: CreatorWhereInput
    /**
     * Limit how many Creators to delete.
     */
    limit?: number
  }

  /**
   * Creator.posts
   */
  export type Creator$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Creator.metricSnapshots
   */
  export type Creator$metricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    where?: MetricSnapshotWhereInput
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    cursor?: MetricSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * Creator.engagementStats
   */
  export type Creator$engagementStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    where?: EngagementStatsWhereInput
    orderBy?: EngagementStatsOrderByWithRelationInput | EngagementStatsOrderByWithRelationInput[]
    cursor?: EngagementStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngagementStatsScalarFieldEnum | EngagementStatsScalarFieldEnum[]
  }

  /**
   * Creator.anomalyEvents
   */
  export type Creator$anomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    where?: AnomalyEventWhereInput
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    cursor?: AnomalyEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * Creator without action
   */
  export type CreatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Creator
     */
    omit?: CreatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    externalId: string | null
    type: $Enums.PostType | null
    content: string | null
    postUrl: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    externalId: string | null
    type: $Enums.PostType | null
    content: string | null
    postUrl: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    creatorId: number
    externalId: number
    type: number
    content: number
    postUrl: number
    thumbnailUrl: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    creatorId?: true
    externalId?: true
    type?: true
    content?: true
    postUrl?: true
    thumbnailUrl?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    creatorId?: true
    externalId?: true
    type?: true
    content?: true
    postUrl?: true
    thumbnailUrl?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    creatorId?: true
    externalId?: true
    type?: true
    content?: true
    postUrl?: true
    thumbnailUrl?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    creatorId: string
    externalId: string
    type: $Enums.PostType
    content: string | null
    postUrl: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    externalId?: boolean
    type?: boolean
    content?: boolean
    postUrl?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    metricSnapshots?: boolean | Post$metricSnapshotsArgs<ExtArgs>
    sentimentScores?: boolean | Post$sentimentScoresArgs<ExtArgs>
    anomalyEvents?: boolean | Post$anomalyEventsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    externalId?: boolean
    type?: boolean
    content?: boolean
    postUrl?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    externalId?: boolean
    type?: boolean
    content?: boolean
    postUrl?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    creatorId?: boolean
    externalId?: boolean
    type?: boolean
    content?: boolean
    postUrl?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "externalId" | "type" | "content" | "postUrl" | "thumbnailUrl" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    metricSnapshots?: boolean | Post$metricSnapshotsArgs<ExtArgs>
    sentimentScores?: boolean | Post$sentimentScoresArgs<ExtArgs>
    anomalyEvents?: boolean | Post$anomalyEventsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      creator: Prisma.$CreatorPayload<ExtArgs>
      /**
       * Relationships
       */
      metricSnapshots: Prisma.$MetricSnapshotPayload<ExtArgs>[]
      sentimentScores: Prisma.$SentimentScorePayload<ExtArgs>[]
      anomalyEvents: Prisma.$AnomalyEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Creator relationship
       */
      creatorId: string
      /**
       * Platform-specific post identity
       */
      externalId: string
      /**
       * Public content information
       */
      type: $Enums.PostType
      content: string | null
      postUrl: string | null
      thumbnailUrl: string | null
      /**
       * Publication information
       */
      publishedAt: Date | null
      /**
       * Audit
       */
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends CreatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatorDefaultArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metricSnapshots<T extends Post$metricSnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Post$metricSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentimentScores<T extends Post$sentimentScoresArgs<ExtArgs> = {}>(args?: Subset<T, Post$sentimentScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anomalyEvents<T extends Post$anomalyEventsArgs<ExtArgs> = {}>(args?: Subset<T, Post$anomalyEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly creatorId: FieldRef<"Post", 'String'>
    readonly externalId: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly content: FieldRef<"Post", 'String'>
    readonly postUrl: FieldRef<"Post", 'String'>
    readonly thumbnailUrl: FieldRef<"Post", 'String'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.metricSnapshots
   */
  export type Post$metricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    where?: MetricSnapshotWhereInput
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    cursor?: MetricSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * Post.sentimentScores
   */
  export type Post$sentimentScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    where?: SentimentScoreWhereInput
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    cursor?: SentimentScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * Post.anomalyEvents
   */
  export type Post$anomalyEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    where?: AnomalyEventWhereInput
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    cursor?: AnomalyEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model MetricSnapshot
   */

  export type AggregateMetricSnapshot = {
    _count: MetricSnapshotCountAggregateOutputType | null
    _avg: MetricSnapshotAvgAggregateOutputType | null
    _sum: MetricSnapshotSumAggregateOutputType | null
    _min: MetricSnapshotMinAggregateOutputType | null
    _max: MetricSnapshotMaxAggregateOutputType | null
  }

  export type MetricSnapshotAvgAggregateOutputType = {
    followerCount: number | null
    followingCount: number | null
    postCount: number | null
    totalLikes: number | null
    totalComments: number | null
    totalViews: number | null
    totalShares: number | null
    engagementRate: Decimal | null
  }

  export type MetricSnapshotSumAggregateOutputType = {
    followerCount: bigint | null
    followingCount: bigint | null
    postCount: bigint | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    engagementRate: Decimal | null
  }

  export type MetricSnapshotMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    postId: string | null
    followerCount: bigint | null
    followingCount: bigint | null
    postCount: bigint | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    engagementRate: Decimal | null
    capturedAt: Date | null
    source: string | null
    createdAt: Date | null
  }

  export type MetricSnapshotMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    postId: string | null
    followerCount: bigint | null
    followingCount: bigint | null
    postCount: bigint | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    engagementRate: Decimal | null
    capturedAt: Date | null
    source: string | null
    createdAt: Date | null
  }

  export type MetricSnapshotCountAggregateOutputType = {
    id: number
    creatorId: number
    postId: number
    followerCount: number
    followingCount: number
    postCount: number
    totalLikes: number
    totalComments: number
    totalViews: number
    totalShares: number
    engagementRate: number
    capturedAt: number
    source: number
    rawMetrics: number
    createdAt: number
    _all: number
  }


  export type MetricSnapshotAvgAggregateInputType = {
    followerCount?: true
    followingCount?: true
    postCount?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    engagementRate?: true
  }

  export type MetricSnapshotSumAggregateInputType = {
    followerCount?: true
    followingCount?: true
    postCount?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    engagementRate?: true
  }

  export type MetricSnapshotMinAggregateInputType = {
    id?: true
    creatorId?: true
    postId?: true
    followerCount?: true
    followingCount?: true
    postCount?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    engagementRate?: true
    capturedAt?: true
    source?: true
    createdAt?: true
  }

  export type MetricSnapshotMaxAggregateInputType = {
    id?: true
    creatorId?: true
    postId?: true
    followerCount?: true
    followingCount?: true
    postCount?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    engagementRate?: true
    capturedAt?: true
    source?: true
    createdAt?: true
  }

  export type MetricSnapshotCountAggregateInputType = {
    id?: true
    creatorId?: true
    postId?: true
    followerCount?: true
    followingCount?: true
    postCount?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    engagementRate?: true
    capturedAt?: true
    source?: true
    rawMetrics?: true
    createdAt?: true
    _all?: true
  }

  export type MetricSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricSnapshot to aggregate.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricSnapshots
    **/
    _count?: true | MetricSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricSnapshotMaxAggregateInputType
  }

  export type GetMetricSnapshotAggregateType<T extends MetricSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricSnapshot[P]>
      : GetScalarType<T[P], AggregateMetricSnapshot[P]>
  }




  export type MetricSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricSnapshotWhereInput
    orderBy?: MetricSnapshotOrderByWithAggregationInput | MetricSnapshotOrderByWithAggregationInput[]
    by: MetricSnapshotScalarFieldEnum[] | MetricSnapshotScalarFieldEnum
    having?: MetricSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricSnapshotCountAggregateInputType | true
    _avg?: MetricSnapshotAvgAggregateInputType
    _sum?: MetricSnapshotSumAggregateInputType
    _min?: MetricSnapshotMinAggregateInputType
    _max?: MetricSnapshotMaxAggregateInputType
  }

  export type MetricSnapshotGroupByOutputType = {
    id: string
    creatorId: string
    postId: string | null
    followerCount: bigint | null
    followingCount: bigint | null
    postCount: bigint | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    engagementRate: Decimal | null
    capturedAt: Date
    source: string | null
    rawMetrics: JsonValue | null
    createdAt: Date
    _count: MetricSnapshotCountAggregateOutputType | null
    _avg: MetricSnapshotAvgAggregateOutputType | null
    _sum: MetricSnapshotSumAggregateOutputType | null
    _min: MetricSnapshotMinAggregateOutputType | null
    _max: MetricSnapshotMaxAggregateOutputType | null
  }

  type GetMetricSnapshotGroupByPayload<T extends MetricSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MetricSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MetricSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    followerCount?: boolean
    followingCount?: boolean
    postCount?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    engagementRate?: boolean
    capturedAt?: boolean
    source?: boolean
    rawMetrics?: boolean
    createdAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | MetricSnapshot$postArgs<ExtArgs>
  }, ExtArgs["result"]["metricSnapshot"]>

  export type MetricSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    followerCount?: boolean
    followingCount?: boolean
    postCount?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    engagementRate?: boolean
    capturedAt?: boolean
    source?: boolean
    rawMetrics?: boolean
    createdAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | MetricSnapshot$postArgs<ExtArgs>
  }, ExtArgs["result"]["metricSnapshot"]>

  export type MetricSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    followerCount?: boolean
    followingCount?: boolean
    postCount?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    engagementRate?: boolean
    capturedAt?: boolean
    source?: boolean
    rawMetrics?: boolean
    createdAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | MetricSnapshot$postArgs<ExtArgs>
  }, ExtArgs["result"]["metricSnapshot"]>

  export type MetricSnapshotSelectScalar = {
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    followerCount?: boolean
    followingCount?: boolean
    postCount?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    engagementRate?: boolean
    capturedAt?: boolean
    source?: boolean
    rawMetrics?: boolean
    createdAt?: boolean
  }

  export type MetricSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "postId" | "followerCount" | "followingCount" | "postCount" | "totalLikes" | "totalComments" | "totalViews" | "totalShares" | "engagementRate" | "capturedAt" | "source" | "rawMetrics" | "createdAt", ExtArgs["result"]["metricSnapshot"]>
  export type MetricSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | MetricSnapshot$postArgs<ExtArgs>
  }
  export type MetricSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | MetricSnapshot$postArgs<ExtArgs>
  }
  export type MetricSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | MetricSnapshot$postArgs<ExtArgs>
  }

  export type $MetricSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetricSnapshot"
    objects: {
      creator: Prisma.$CreatorPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Owning creator
       */
      creatorId: string
      /**
       * Optional post-level association.
       * Null means this snapshot represents the creator account.
       */
      postId: string | null
      /**
       * Historical metrics
       */
      followerCount: bigint | null
      followingCount: bigint | null
      postCount: bigint | null
      totalLikes: bigint | null
      totalComments: bigint | null
      totalViews: bigint | null
      totalShares: bigint | null
      engagementRate: Prisma.Decimal | null
      /**
       * Collection metadata
       */
      capturedAt: Date
      source: string | null
      rawMetrics: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["metricSnapshot"]>
    composites: {}
  }

  type MetricSnapshotGetPayload<S extends boolean | null | undefined | MetricSnapshotDefaultArgs> = $Result.GetResult<Prisma.$MetricSnapshotPayload, S>

  type MetricSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricSnapshotCountAggregateInputType | true
    }

  export interface MetricSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetricSnapshot'], meta: { name: 'MetricSnapshot' } }
    /**
     * Find zero or one MetricSnapshot that matches the filter.
     * @param {MetricSnapshotFindUniqueArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricSnapshotFindUniqueArgs>(args: SelectSubset<T, MetricSnapshotFindUniqueArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetricSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricSnapshotFindUniqueOrThrowArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotFindFirstArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricSnapshotFindFirstArgs>(args?: SelectSubset<T, MetricSnapshotFindFirstArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotFindFirstOrThrowArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetricSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricSnapshots
     * const metricSnapshots = await prisma.metricSnapshot.findMany()
     * 
     * // Get first 10 MetricSnapshots
     * const metricSnapshots = await prisma.metricSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricSnapshotWithIdOnly = await prisma.metricSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricSnapshotFindManyArgs>(args?: SelectSubset<T, MetricSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetricSnapshot.
     * @param {MetricSnapshotCreateArgs} args - Arguments to create a MetricSnapshot.
     * @example
     * // Create one MetricSnapshot
     * const MetricSnapshot = await prisma.metricSnapshot.create({
     *   data: {
     *     // ... data to create a MetricSnapshot
     *   }
     * })
     * 
     */
    create<T extends MetricSnapshotCreateArgs>(args: SelectSubset<T, MetricSnapshotCreateArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetricSnapshots.
     * @param {MetricSnapshotCreateManyArgs} args - Arguments to create many MetricSnapshots.
     * @example
     * // Create many MetricSnapshots
     * const metricSnapshot = await prisma.metricSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricSnapshotCreateManyArgs>(args?: SelectSubset<T, MetricSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetricSnapshots and returns the data saved in the database.
     * @param {MetricSnapshotCreateManyAndReturnArgs} args - Arguments to create many MetricSnapshots.
     * @example
     * // Create many MetricSnapshots
     * const metricSnapshot = await prisma.metricSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetricSnapshots and only return the `id`
     * const metricSnapshotWithIdOnly = await prisma.metricSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetricSnapshot.
     * @param {MetricSnapshotDeleteArgs} args - Arguments to delete one MetricSnapshot.
     * @example
     * // Delete one MetricSnapshot
     * const MetricSnapshot = await prisma.metricSnapshot.delete({
     *   where: {
     *     // ... filter to delete one MetricSnapshot
     *   }
     * })
     * 
     */
    delete<T extends MetricSnapshotDeleteArgs>(args: SelectSubset<T, MetricSnapshotDeleteArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetricSnapshot.
     * @param {MetricSnapshotUpdateArgs} args - Arguments to update one MetricSnapshot.
     * @example
     * // Update one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricSnapshotUpdateArgs>(args: SelectSubset<T, MetricSnapshotUpdateArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetricSnapshots.
     * @param {MetricSnapshotDeleteManyArgs} args - Arguments to filter MetricSnapshots to delete.
     * @example
     * // Delete a few MetricSnapshots
     * const { count } = await prisma.metricSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricSnapshotDeleteManyArgs>(args?: SelectSubset<T, MetricSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricSnapshots
     * const metricSnapshot = await prisma.metricSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricSnapshotUpdateManyArgs>(args: SelectSubset<T, MetricSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricSnapshots and returns the data updated in the database.
     * @param {MetricSnapshotUpdateManyAndReturnArgs} args - Arguments to update many MetricSnapshots.
     * @example
     * // Update many MetricSnapshots
     * const metricSnapshot = await prisma.metricSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetricSnapshots and only return the `id`
     * const metricSnapshotWithIdOnly = await prisma.metricSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetricSnapshot.
     * @param {MetricSnapshotUpsertArgs} args - Arguments to update or create a MetricSnapshot.
     * @example
     * // Update or create a MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.upsert({
     *   create: {
     *     // ... data to create a MetricSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MetricSnapshotUpsertArgs>(args: SelectSubset<T, MetricSnapshotUpsertArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetricSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotCountArgs} args - Arguments to filter MetricSnapshots to count.
     * @example
     * // Count the number of MetricSnapshots
     * const count = await prisma.metricSnapshot.count({
     *   where: {
     *     // ... the filter for the MetricSnapshots we want to count
     *   }
     * })
    **/
    count<T extends MetricSnapshotCountArgs>(
      args?: Subset<T, MetricSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricSnapshotAggregateArgs>(args: Subset<T, MetricSnapshotAggregateArgs>): Prisma.PrismaPromise<GetMetricSnapshotAggregateType<T>>

    /**
     * Group by MetricSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MetricSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetricSnapshot model
   */
  readonly fields: MetricSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends CreatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatorDefaultArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends MetricSnapshot$postArgs<ExtArgs> = {}>(args?: Subset<T, MetricSnapshot$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetricSnapshot model
   */
  interface MetricSnapshotFieldRefs {
    readonly id: FieldRef<"MetricSnapshot", 'String'>
    readonly creatorId: FieldRef<"MetricSnapshot", 'String'>
    readonly postId: FieldRef<"MetricSnapshot", 'String'>
    readonly followerCount: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly followingCount: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly postCount: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly totalLikes: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly totalComments: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly totalViews: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly totalShares: FieldRef<"MetricSnapshot", 'BigInt'>
    readonly engagementRate: FieldRef<"MetricSnapshot", 'Decimal'>
    readonly capturedAt: FieldRef<"MetricSnapshot", 'DateTime'>
    readonly source: FieldRef<"MetricSnapshot", 'String'>
    readonly rawMetrics: FieldRef<"MetricSnapshot", 'Json'>
    readonly createdAt: FieldRef<"MetricSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetricSnapshot findUnique
   */
  export type MetricSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot findUniqueOrThrow
   */
  export type MetricSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot findFirst
   */
  export type MetricSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricSnapshots.
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricSnapshots.
     */
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * MetricSnapshot findFirstOrThrow
   */
  export type MetricSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricSnapshots.
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricSnapshots.
     */
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * MetricSnapshot findMany
   */
  export type MetricSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshots to fetch.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricSnapshots.
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * MetricSnapshot create
   */
  export type MetricSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a MetricSnapshot.
     */
    data: XOR<MetricSnapshotCreateInput, MetricSnapshotUncheckedCreateInput>
  }

  /**
   * MetricSnapshot createMany
   */
  export type MetricSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetricSnapshots.
     */
    data: MetricSnapshotCreateManyInput | MetricSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetricSnapshot createManyAndReturn
   */
  export type MetricSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many MetricSnapshots.
     */
    data: MetricSnapshotCreateManyInput | MetricSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricSnapshot update
   */
  export type MetricSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a MetricSnapshot.
     */
    data: XOR<MetricSnapshotUpdateInput, MetricSnapshotUncheckedUpdateInput>
    /**
     * Choose, which MetricSnapshot to update.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot updateMany
   */
  export type MetricSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetricSnapshots.
     */
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MetricSnapshots to update
     */
    where?: MetricSnapshotWhereInput
    /**
     * Limit how many MetricSnapshots to update.
     */
    limit?: number
  }

  /**
   * MetricSnapshot updateManyAndReturn
   */
  export type MetricSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update MetricSnapshots.
     */
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MetricSnapshots to update
     */
    where?: MetricSnapshotWhereInput
    /**
     * Limit how many MetricSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetricSnapshot upsert
   */
  export type MetricSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the MetricSnapshot to update in case it exists.
     */
    where: MetricSnapshotWhereUniqueInput
    /**
     * In case the MetricSnapshot found by the `where` argument doesn't exist, create a new MetricSnapshot with this data.
     */
    create: XOR<MetricSnapshotCreateInput, MetricSnapshotUncheckedCreateInput>
    /**
     * In case the MetricSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricSnapshotUpdateInput, MetricSnapshotUncheckedUpdateInput>
  }

  /**
   * MetricSnapshot delete
   */
  export type MetricSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter which MetricSnapshot to delete.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot deleteMany
   */
  export type MetricSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricSnapshots to delete
     */
    where?: MetricSnapshotWhereInput
    /**
     * Limit how many MetricSnapshots to delete.
     */
    limit?: number
  }

  /**
   * MetricSnapshot.post
   */
  export type MetricSnapshot$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * MetricSnapshot without action
   */
  export type MetricSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model EngagementStats
   */

  export type AggregateEngagementStats = {
    _count: EngagementStatsCountAggregateOutputType | null
    _avg: EngagementStatsAvgAggregateOutputType | null
    _sum: EngagementStatsSumAggregateOutputType | null
    _min: EngagementStatsMinAggregateOutputType | null
    _max: EngagementStatsMaxAggregateOutputType | null
  }

  export type EngagementStatsAvgAggregateOutputType = {
    totalPosts: number | null
    totalLikes: number | null
    totalComments: number | null
    totalViews: number | null
    totalShares: number | null
    averageLikes: Decimal | null
    averageComments: Decimal | null
    averageViews: Decimal | null
    averageEngagementRate: Decimal | null
  }

  export type EngagementStatsSumAggregateOutputType = {
    totalPosts: number | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    averageLikes: Decimal | null
    averageComments: Decimal | null
    averageViews: Decimal | null
    averageEngagementRate: Decimal | null
  }

  export type EngagementStatsMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    periodType: $Enums.AnalyticsPeriod | null
    periodStart: Date | null
    periodEnd: Date | null
    totalPosts: number | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    averageLikes: Decimal | null
    averageComments: Decimal | null
    averageViews: Decimal | null
    averageEngagementRate: Decimal | null
    calculatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EngagementStatsMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    periodType: $Enums.AnalyticsPeriod | null
    periodStart: Date | null
    periodEnd: Date | null
    totalPosts: number | null
    totalLikes: bigint | null
    totalComments: bigint | null
    totalViews: bigint | null
    totalShares: bigint | null
    averageLikes: Decimal | null
    averageComments: Decimal | null
    averageViews: Decimal | null
    averageEngagementRate: Decimal | null
    calculatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EngagementStatsCountAggregateOutputType = {
    id: number
    creatorId: number
    periodType: number
    periodStart: number
    periodEnd: number
    totalPosts: number
    totalLikes: number
    totalComments: number
    totalViews: number
    totalShares: number
    averageLikes: number
    averageComments: number
    averageViews: number
    averageEngagementRate: number
    calculatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EngagementStatsAvgAggregateInputType = {
    totalPosts?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    averageLikes?: true
    averageComments?: true
    averageViews?: true
    averageEngagementRate?: true
  }

  export type EngagementStatsSumAggregateInputType = {
    totalPosts?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    averageLikes?: true
    averageComments?: true
    averageViews?: true
    averageEngagementRate?: true
  }

  export type EngagementStatsMinAggregateInputType = {
    id?: true
    creatorId?: true
    periodType?: true
    periodStart?: true
    periodEnd?: true
    totalPosts?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    averageLikes?: true
    averageComments?: true
    averageViews?: true
    averageEngagementRate?: true
    calculatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EngagementStatsMaxAggregateInputType = {
    id?: true
    creatorId?: true
    periodType?: true
    periodStart?: true
    periodEnd?: true
    totalPosts?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    averageLikes?: true
    averageComments?: true
    averageViews?: true
    averageEngagementRate?: true
    calculatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EngagementStatsCountAggregateInputType = {
    id?: true
    creatorId?: true
    periodType?: true
    periodStart?: true
    periodEnd?: true
    totalPosts?: true
    totalLikes?: true
    totalComments?: true
    totalViews?: true
    totalShares?: true
    averageLikes?: true
    averageComments?: true
    averageViews?: true
    averageEngagementRate?: true
    calculatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EngagementStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EngagementStats to aggregate.
     */
    where?: EngagementStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EngagementStats to fetch.
     */
    orderBy?: EngagementStatsOrderByWithRelationInput | EngagementStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngagementStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EngagementStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EngagementStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EngagementStats
    **/
    _count?: true | EngagementStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EngagementStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EngagementStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngagementStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngagementStatsMaxAggregateInputType
  }

  export type GetEngagementStatsAggregateType<T extends EngagementStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateEngagementStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngagementStats[P]>
      : GetScalarType<T[P], AggregateEngagementStats[P]>
  }




  export type EngagementStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementStatsWhereInput
    orderBy?: EngagementStatsOrderByWithAggregationInput | EngagementStatsOrderByWithAggregationInput[]
    by: EngagementStatsScalarFieldEnum[] | EngagementStatsScalarFieldEnum
    having?: EngagementStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngagementStatsCountAggregateInputType | true
    _avg?: EngagementStatsAvgAggregateInputType
    _sum?: EngagementStatsSumAggregateInputType
    _min?: EngagementStatsMinAggregateInputType
    _max?: EngagementStatsMaxAggregateInputType
  }

  export type EngagementStatsGroupByOutputType = {
    id: string
    creatorId: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date
    periodEnd: Date
    totalPosts: number
    totalLikes: bigint
    totalComments: bigint
    totalViews: bigint
    totalShares: bigint
    averageLikes: Decimal | null
    averageComments: Decimal | null
    averageViews: Decimal | null
    averageEngagementRate: Decimal
    calculatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: EngagementStatsCountAggregateOutputType | null
    _avg: EngagementStatsAvgAggregateOutputType | null
    _sum: EngagementStatsSumAggregateOutputType | null
    _min: EngagementStatsMinAggregateOutputType | null
    _max: EngagementStatsMaxAggregateOutputType | null
  }

  type GetEngagementStatsGroupByPayload<T extends EngagementStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngagementStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngagementStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngagementStatsGroupByOutputType[P]>
            : GetScalarType<T[P], EngagementStatsGroupByOutputType[P]>
        }
      >
    >


  export type EngagementStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    periodType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalPosts?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    averageLikes?: boolean
    averageComments?: boolean
    averageViews?: boolean
    averageEngagementRate?: boolean
    calculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engagementStats"]>

  export type EngagementStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    periodType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalPosts?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    averageLikes?: boolean
    averageComments?: boolean
    averageViews?: boolean
    averageEngagementRate?: boolean
    calculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engagementStats"]>

  export type EngagementStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    periodType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalPosts?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    averageLikes?: boolean
    averageComments?: boolean
    averageViews?: boolean
    averageEngagementRate?: boolean
    calculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engagementStats"]>

  export type EngagementStatsSelectScalar = {
    id?: boolean
    creatorId?: boolean
    periodType?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    totalPosts?: boolean
    totalLikes?: boolean
    totalComments?: boolean
    totalViews?: boolean
    totalShares?: boolean
    averageLikes?: boolean
    averageComments?: boolean
    averageViews?: boolean
    averageEngagementRate?: boolean
    calculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EngagementStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "periodType" | "periodStart" | "periodEnd" | "totalPosts" | "totalLikes" | "totalComments" | "totalViews" | "totalShares" | "averageLikes" | "averageComments" | "averageViews" | "averageEngagementRate" | "calculatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["engagementStats"]>
  export type EngagementStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }
  export type EngagementStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }
  export type EngagementStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
  }

  export type $EngagementStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EngagementStats"
    objects: {
      creator: Prisma.$CreatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Creator relationship
       */
      creatorId: string
      /**
       * Aggregation window
       */
      periodType: $Enums.AnalyticsPeriod
      periodStart: Date
      periodEnd: Date
      /**
       * Aggregated metrics
       */
      totalPosts: number
      totalLikes: bigint
      totalComments: bigint
      totalViews: bigint
      totalShares: bigint
      averageLikes: Prisma.Decimal | null
      averageComments: Prisma.Decimal | null
      averageViews: Prisma.Decimal | null
      averageEngagementRate: Prisma.Decimal
      /**
       * Calculation metadata
       */
      calculatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["engagementStats"]>
    composites: {}
  }

  type EngagementStatsGetPayload<S extends boolean | null | undefined | EngagementStatsDefaultArgs> = $Result.GetResult<Prisma.$EngagementStatsPayload, S>

  type EngagementStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngagementStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngagementStatsCountAggregateInputType | true
    }

  export interface EngagementStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EngagementStats'], meta: { name: 'EngagementStats' } }
    /**
     * Find zero or one EngagementStats that matches the filter.
     * @param {EngagementStatsFindUniqueArgs} args - Arguments to find a EngagementStats
     * @example
     * // Get one EngagementStats
     * const engagementStats = await prisma.engagementStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngagementStatsFindUniqueArgs>(args: SelectSubset<T, EngagementStatsFindUniqueArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EngagementStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngagementStatsFindUniqueOrThrowArgs} args - Arguments to find a EngagementStats
     * @example
     * // Get one EngagementStats
     * const engagementStats = await prisma.engagementStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngagementStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, EngagementStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EngagementStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsFindFirstArgs} args - Arguments to find a EngagementStats
     * @example
     * // Get one EngagementStats
     * const engagementStats = await prisma.engagementStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngagementStatsFindFirstArgs>(args?: SelectSubset<T, EngagementStatsFindFirstArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EngagementStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsFindFirstOrThrowArgs} args - Arguments to find a EngagementStats
     * @example
     * // Get one EngagementStats
     * const engagementStats = await prisma.engagementStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngagementStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, EngagementStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EngagementStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EngagementStats
     * const engagementStats = await prisma.engagementStats.findMany()
     * 
     * // Get first 10 EngagementStats
     * const engagementStats = await prisma.engagementStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const engagementStatsWithIdOnly = await prisma.engagementStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EngagementStatsFindManyArgs>(args?: SelectSubset<T, EngagementStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EngagementStats.
     * @param {EngagementStatsCreateArgs} args - Arguments to create a EngagementStats.
     * @example
     * // Create one EngagementStats
     * const EngagementStats = await prisma.engagementStats.create({
     *   data: {
     *     // ... data to create a EngagementStats
     *   }
     * })
     * 
     */
    create<T extends EngagementStatsCreateArgs>(args: SelectSubset<T, EngagementStatsCreateArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EngagementStats.
     * @param {EngagementStatsCreateManyArgs} args - Arguments to create many EngagementStats.
     * @example
     * // Create many EngagementStats
     * const engagementStats = await prisma.engagementStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngagementStatsCreateManyArgs>(args?: SelectSubset<T, EngagementStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EngagementStats and returns the data saved in the database.
     * @param {EngagementStatsCreateManyAndReturnArgs} args - Arguments to create many EngagementStats.
     * @example
     * // Create many EngagementStats
     * const engagementStats = await prisma.engagementStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EngagementStats and only return the `id`
     * const engagementStatsWithIdOnly = await prisma.engagementStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EngagementStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, EngagementStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EngagementStats.
     * @param {EngagementStatsDeleteArgs} args - Arguments to delete one EngagementStats.
     * @example
     * // Delete one EngagementStats
     * const EngagementStats = await prisma.engagementStats.delete({
     *   where: {
     *     // ... filter to delete one EngagementStats
     *   }
     * })
     * 
     */
    delete<T extends EngagementStatsDeleteArgs>(args: SelectSubset<T, EngagementStatsDeleteArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EngagementStats.
     * @param {EngagementStatsUpdateArgs} args - Arguments to update one EngagementStats.
     * @example
     * // Update one EngagementStats
     * const engagementStats = await prisma.engagementStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngagementStatsUpdateArgs>(args: SelectSubset<T, EngagementStatsUpdateArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EngagementStats.
     * @param {EngagementStatsDeleteManyArgs} args - Arguments to filter EngagementStats to delete.
     * @example
     * // Delete a few EngagementStats
     * const { count } = await prisma.engagementStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngagementStatsDeleteManyArgs>(args?: SelectSubset<T, EngagementStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EngagementStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EngagementStats
     * const engagementStats = await prisma.engagementStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngagementStatsUpdateManyArgs>(args: SelectSubset<T, EngagementStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EngagementStats and returns the data updated in the database.
     * @param {EngagementStatsUpdateManyAndReturnArgs} args - Arguments to update many EngagementStats.
     * @example
     * // Update many EngagementStats
     * const engagementStats = await prisma.engagementStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EngagementStats and only return the `id`
     * const engagementStatsWithIdOnly = await prisma.engagementStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EngagementStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, EngagementStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EngagementStats.
     * @param {EngagementStatsUpsertArgs} args - Arguments to update or create a EngagementStats.
     * @example
     * // Update or create a EngagementStats
     * const engagementStats = await prisma.engagementStats.upsert({
     *   create: {
     *     // ... data to create a EngagementStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EngagementStats we want to update
     *   }
     * })
     */
    upsert<T extends EngagementStatsUpsertArgs>(args: SelectSubset<T, EngagementStatsUpsertArgs<ExtArgs>>): Prisma__EngagementStatsClient<$Result.GetResult<Prisma.$EngagementStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EngagementStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsCountArgs} args - Arguments to filter EngagementStats to count.
     * @example
     * // Count the number of EngagementStats
     * const count = await prisma.engagementStats.count({
     *   where: {
     *     // ... the filter for the EngagementStats we want to count
     *   }
     * })
    **/
    count<T extends EngagementStatsCountArgs>(
      args?: Subset<T, EngagementStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngagementStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EngagementStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EngagementStatsAggregateArgs>(args: Subset<T, EngagementStatsAggregateArgs>): Prisma.PrismaPromise<GetEngagementStatsAggregateType<T>>

    /**
     * Group by EngagementStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EngagementStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngagementStatsGroupByArgs['orderBy'] }
        : { orderBy?: EngagementStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EngagementStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngagementStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EngagementStats model
   */
  readonly fields: EngagementStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EngagementStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngagementStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends CreatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatorDefaultArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EngagementStats model
   */
  interface EngagementStatsFieldRefs {
    readonly id: FieldRef<"EngagementStats", 'String'>
    readonly creatorId: FieldRef<"EngagementStats", 'String'>
    readonly periodType: FieldRef<"EngagementStats", 'AnalyticsPeriod'>
    readonly periodStart: FieldRef<"EngagementStats", 'DateTime'>
    readonly periodEnd: FieldRef<"EngagementStats", 'DateTime'>
    readonly totalPosts: FieldRef<"EngagementStats", 'Int'>
    readonly totalLikes: FieldRef<"EngagementStats", 'BigInt'>
    readonly totalComments: FieldRef<"EngagementStats", 'BigInt'>
    readonly totalViews: FieldRef<"EngagementStats", 'BigInt'>
    readonly totalShares: FieldRef<"EngagementStats", 'BigInt'>
    readonly averageLikes: FieldRef<"EngagementStats", 'Decimal'>
    readonly averageComments: FieldRef<"EngagementStats", 'Decimal'>
    readonly averageViews: FieldRef<"EngagementStats", 'Decimal'>
    readonly averageEngagementRate: FieldRef<"EngagementStats", 'Decimal'>
    readonly calculatedAt: FieldRef<"EngagementStats", 'DateTime'>
    readonly createdAt: FieldRef<"EngagementStats", 'DateTime'>
    readonly updatedAt: FieldRef<"EngagementStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EngagementStats findUnique
   */
  export type EngagementStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * Filter, which EngagementStats to fetch.
     */
    where: EngagementStatsWhereUniqueInput
  }

  /**
   * EngagementStats findUniqueOrThrow
   */
  export type EngagementStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * Filter, which EngagementStats to fetch.
     */
    where: EngagementStatsWhereUniqueInput
  }

  /**
   * EngagementStats findFirst
   */
  export type EngagementStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * Filter, which EngagementStats to fetch.
     */
    where?: EngagementStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EngagementStats to fetch.
     */
    orderBy?: EngagementStatsOrderByWithRelationInput | EngagementStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EngagementStats.
     */
    cursor?: EngagementStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EngagementStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EngagementStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EngagementStats.
     */
    distinct?: EngagementStatsScalarFieldEnum | EngagementStatsScalarFieldEnum[]
  }

  /**
   * EngagementStats findFirstOrThrow
   */
  export type EngagementStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * Filter, which EngagementStats to fetch.
     */
    where?: EngagementStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EngagementStats to fetch.
     */
    orderBy?: EngagementStatsOrderByWithRelationInput | EngagementStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EngagementStats.
     */
    cursor?: EngagementStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EngagementStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EngagementStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EngagementStats.
     */
    distinct?: EngagementStatsScalarFieldEnum | EngagementStatsScalarFieldEnum[]
  }

  /**
   * EngagementStats findMany
   */
  export type EngagementStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * Filter, which EngagementStats to fetch.
     */
    where?: EngagementStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EngagementStats to fetch.
     */
    orderBy?: EngagementStatsOrderByWithRelationInput | EngagementStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EngagementStats.
     */
    cursor?: EngagementStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EngagementStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EngagementStats.
     */
    skip?: number
    distinct?: EngagementStatsScalarFieldEnum | EngagementStatsScalarFieldEnum[]
  }

  /**
   * EngagementStats create
   */
  export type EngagementStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a EngagementStats.
     */
    data: XOR<EngagementStatsCreateInput, EngagementStatsUncheckedCreateInput>
  }

  /**
   * EngagementStats createMany
   */
  export type EngagementStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EngagementStats.
     */
    data: EngagementStatsCreateManyInput | EngagementStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EngagementStats createManyAndReturn
   */
  export type EngagementStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * The data used to create many EngagementStats.
     */
    data: EngagementStatsCreateManyInput | EngagementStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EngagementStats update
   */
  export type EngagementStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a EngagementStats.
     */
    data: XOR<EngagementStatsUpdateInput, EngagementStatsUncheckedUpdateInput>
    /**
     * Choose, which EngagementStats to update.
     */
    where: EngagementStatsWhereUniqueInput
  }

  /**
   * EngagementStats updateMany
   */
  export type EngagementStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EngagementStats.
     */
    data: XOR<EngagementStatsUpdateManyMutationInput, EngagementStatsUncheckedUpdateManyInput>
    /**
     * Filter which EngagementStats to update
     */
    where?: EngagementStatsWhereInput
    /**
     * Limit how many EngagementStats to update.
     */
    limit?: number
  }

  /**
   * EngagementStats updateManyAndReturn
   */
  export type EngagementStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * The data used to update EngagementStats.
     */
    data: XOR<EngagementStatsUpdateManyMutationInput, EngagementStatsUncheckedUpdateManyInput>
    /**
     * Filter which EngagementStats to update
     */
    where?: EngagementStatsWhereInput
    /**
     * Limit how many EngagementStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EngagementStats upsert
   */
  export type EngagementStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the EngagementStats to update in case it exists.
     */
    where: EngagementStatsWhereUniqueInput
    /**
     * In case the EngagementStats found by the `where` argument doesn't exist, create a new EngagementStats with this data.
     */
    create: XOR<EngagementStatsCreateInput, EngagementStatsUncheckedCreateInput>
    /**
     * In case the EngagementStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngagementStatsUpdateInput, EngagementStatsUncheckedUpdateInput>
  }

  /**
   * EngagementStats delete
   */
  export type EngagementStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
    /**
     * Filter which EngagementStats to delete.
     */
    where: EngagementStatsWhereUniqueInput
  }

  /**
   * EngagementStats deleteMany
   */
  export type EngagementStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EngagementStats to delete
     */
    where?: EngagementStatsWhereInput
    /**
     * Limit how many EngagementStats to delete.
     */
    limit?: number
  }

  /**
   * EngagementStats without action
   */
  export type EngagementStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngagementStats
     */
    select?: EngagementStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EngagementStats
     */
    omit?: EngagementStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementStatsInclude<ExtArgs> | null
  }


  /**
   * Model AnomalyEvent
   */

  export type AggregateAnomalyEvent = {
    _count: AnomalyEventCountAggregateOutputType | null
    _avg: AnomalyEventAvgAggregateOutputType | null
    _sum: AnomalyEventSumAggregateOutputType | null
    _min: AnomalyEventMinAggregateOutputType | null
    _max: AnomalyEventMaxAggregateOutputType | null
  }

  export type AnomalyEventAvgAggregateOutputType = {
    expectedValue: Decimal | null
    observedValue: Decimal | null
    changePercent: Decimal | null
  }

  export type AnomalyEventSumAggregateOutputType = {
    expectedValue: Decimal | null
    observedValue: Decimal | null
    changePercent: Decimal | null
  }

  export type AnomalyEventMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    postId: string | null
    eventType: string | null
    severity: $Enums.AnomalySeverity | null
    status: $Enums.AnomalyStatus | null
    metricName: string | null
    expectedValue: Decimal | null
    observedValue: Decimal | null
    changePercent: Decimal | null
    description: string | null
    detectedAt: Date | null
    resolvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnomalyEventMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    postId: string | null
    eventType: string | null
    severity: $Enums.AnomalySeverity | null
    status: $Enums.AnomalyStatus | null
    metricName: string | null
    expectedValue: Decimal | null
    observedValue: Decimal | null
    changePercent: Decimal | null
    description: string | null
    detectedAt: Date | null
    resolvedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnomalyEventCountAggregateOutputType = {
    id: number
    creatorId: number
    postId: number
    eventType: number
    severity: number
    status: number
    metricName: number
    expectedValue: number
    observedValue: number
    changePercent: number
    description: number
    metadata: number
    detectedAt: number
    resolvedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnomalyEventAvgAggregateInputType = {
    expectedValue?: true
    observedValue?: true
    changePercent?: true
  }

  export type AnomalyEventSumAggregateInputType = {
    expectedValue?: true
    observedValue?: true
    changePercent?: true
  }

  export type AnomalyEventMinAggregateInputType = {
    id?: true
    creatorId?: true
    postId?: true
    eventType?: true
    severity?: true
    status?: true
    metricName?: true
    expectedValue?: true
    observedValue?: true
    changePercent?: true
    description?: true
    detectedAt?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnomalyEventMaxAggregateInputType = {
    id?: true
    creatorId?: true
    postId?: true
    eventType?: true
    severity?: true
    status?: true
    metricName?: true
    expectedValue?: true
    observedValue?: true
    changePercent?: true
    description?: true
    detectedAt?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnomalyEventCountAggregateInputType = {
    id?: true
    creatorId?: true
    postId?: true
    eventType?: true
    severity?: true
    status?: true
    metricName?: true
    expectedValue?: true
    observedValue?: true
    changePercent?: true
    description?: true
    metadata?: true
    detectedAt?: true
    resolvedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnomalyEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyEvent to aggregate.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnomalyEvents
    **/
    _count?: true | AnomalyEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnomalyEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnomalyEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnomalyEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnomalyEventMaxAggregateInputType
  }

  export type GetAnomalyEventAggregateType<T extends AnomalyEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnomalyEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnomalyEvent[P]>
      : GetScalarType<T[P], AggregateAnomalyEvent[P]>
  }




  export type AnomalyEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyEventWhereInput
    orderBy?: AnomalyEventOrderByWithAggregationInput | AnomalyEventOrderByWithAggregationInput[]
    by: AnomalyEventScalarFieldEnum[] | AnomalyEventScalarFieldEnum
    having?: AnomalyEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnomalyEventCountAggregateInputType | true
    _avg?: AnomalyEventAvgAggregateInputType
    _sum?: AnomalyEventSumAggregateInputType
    _min?: AnomalyEventMinAggregateInputType
    _max?: AnomalyEventMaxAggregateInputType
  }

  export type AnomalyEventGroupByOutputType = {
    id: string
    creatorId: string
    postId: string | null
    eventType: string
    severity: $Enums.AnomalySeverity
    status: $Enums.AnomalyStatus
    metricName: string
    expectedValue: Decimal | null
    observedValue: Decimal | null
    changePercent: Decimal | null
    description: string | null
    metadata: JsonValue | null
    detectedAt: Date
    resolvedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AnomalyEventCountAggregateOutputType | null
    _avg: AnomalyEventAvgAggregateOutputType | null
    _sum: AnomalyEventSumAggregateOutputType | null
    _min: AnomalyEventMinAggregateOutputType | null
    _max: AnomalyEventMaxAggregateOutputType | null
  }

  type GetAnomalyEventGroupByPayload<T extends AnomalyEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnomalyEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnomalyEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnomalyEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnomalyEventGroupByOutputType[P]>
        }
      >
    >


  export type AnomalyEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    eventType?: boolean
    severity?: boolean
    status?: boolean
    metricName?: boolean
    expectedValue?: boolean
    observedValue?: boolean
    changePercent?: boolean
    description?: boolean
    metadata?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | AnomalyEvent$postArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyEvent"]>

  export type AnomalyEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    eventType?: boolean
    severity?: boolean
    status?: boolean
    metricName?: boolean
    expectedValue?: boolean
    observedValue?: boolean
    changePercent?: boolean
    description?: boolean
    metadata?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | AnomalyEvent$postArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyEvent"]>

  export type AnomalyEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    eventType?: boolean
    severity?: boolean
    status?: boolean
    metricName?: boolean
    expectedValue?: boolean
    observedValue?: boolean
    changePercent?: boolean
    description?: boolean
    metadata?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | AnomalyEvent$postArgs<ExtArgs>
  }, ExtArgs["result"]["anomalyEvent"]>

  export type AnomalyEventSelectScalar = {
    id?: boolean
    creatorId?: boolean
    postId?: boolean
    eventType?: boolean
    severity?: boolean
    status?: boolean
    metricName?: boolean
    expectedValue?: boolean
    observedValue?: boolean
    changePercent?: boolean
    description?: boolean
    metadata?: boolean
    detectedAt?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnomalyEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "postId" | "eventType" | "severity" | "status" | "metricName" | "expectedValue" | "observedValue" | "changePercent" | "description" | "metadata" | "detectedAt" | "resolvedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["anomalyEvent"]>
  export type AnomalyEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | AnomalyEvent$postArgs<ExtArgs>
  }
  export type AnomalyEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | AnomalyEvent$postArgs<ExtArgs>
  }
  export type AnomalyEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorDefaultArgs<ExtArgs>
    post?: boolean | AnomalyEvent$postArgs<ExtArgs>
  }

  export type $AnomalyEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnomalyEvent"
    objects: {
      creator: Prisma.$CreatorPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Creator relationship
       */
      creatorId: string
      /**
       * Optional post association
       */
      postId: string | null
      /**
       * Anomaly classification
       */
      eventType: string
      severity: $Enums.AnomalySeverity
      status: $Enums.AnomalyStatus
      /**
       * Metric that triggered the anomaly
       */
      metricName: string
      expectedValue: Prisma.Decimal | null
      observedValue: Prisma.Decimal | null
      changePercent: Prisma.Decimal | null
      description: string | null
      metadata: Prisma.JsonValue | null
      /**
       * Lifecycle
       */
      detectedAt: Date
      resolvedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["anomalyEvent"]>
    composites: {}
  }

  type AnomalyEventGetPayload<S extends boolean | null | undefined | AnomalyEventDefaultArgs> = $Result.GetResult<Prisma.$AnomalyEventPayload, S>

  type AnomalyEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnomalyEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnomalyEventCountAggregateInputType | true
    }

  export interface AnomalyEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnomalyEvent'], meta: { name: 'AnomalyEvent' } }
    /**
     * Find zero or one AnomalyEvent that matches the filter.
     * @param {AnomalyEventFindUniqueArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnomalyEventFindUniqueArgs>(args: SelectSubset<T, AnomalyEventFindUniqueArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnomalyEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnomalyEventFindUniqueOrThrowArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnomalyEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnomalyEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventFindFirstArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnomalyEventFindFirstArgs>(args?: SelectSubset<T, AnomalyEventFindFirstArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventFindFirstOrThrowArgs} args - Arguments to find a AnomalyEvent
     * @example
     * // Get one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnomalyEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnomalyEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnomalyEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnomalyEvents
     * const anomalyEvents = await prisma.anomalyEvent.findMany()
     * 
     * // Get first 10 AnomalyEvents
     * const anomalyEvents = await prisma.anomalyEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anomalyEventWithIdOnly = await prisma.anomalyEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnomalyEventFindManyArgs>(args?: SelectSubset<T, AnomalyEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnomalyEvent.
     * @param {AnomalyEventCreateArgs} args - Arguments to create a AnomalyEvent.
     * @example
     * // Create one AnomalyEvent
     * const AnomalyEvent = await prisma.anomalyEvent.create({
     *   data: {
     *     // ... data to create a AnomalyEvent
     *   }
     * })
     * 
     */
    create<T extends AnomalyEventCreateArgs>(args: SelectSubset<T, AnomalyEventCreateArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnomalyEvents.
     * @param {AnomalyEventCreateManyArgs} args - Arguments to create many AnomalyEvents.
     * @example
     * // Create many AnomalyEvents
     * const anomalyEvent = await prisma.anomalyEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnomalyEventCreateManyArgs>(args?: SelectSubset<T, AnomalyEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnomalyEvents and returns the data saved in the database.
     * @param {AnomalyEventCreateManyAndReturnArgs} args - Arguments to create many AnomalyEvents.
     * @example
     * // Create many AnomalyEvents
     * const anomalyEvent = await prisma.anomalyEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnomalyEvents and only return the `id`
     * const anomalyEventWithIdOnly = await prisma.anomalyEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnomalyEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AnomalyEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnomalyEvent.
     * @param {AnomalyEventDeleteArgs} args - Arguments to delete one AnomalyEvent.
     * @example
     * // Delete one AnomalyEvent
     * const AnomalyEvent = await prisma.anomalyEvent.delete({
     *   where: {
     *     // ... filter to delete one AnomalyEvent
     *   }
     * })
     * 
     */
    delete<T extends AnomalyEventDeleteArgs>(args: SelectSubset<T, AnomalyEventDeleteArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnomalyEvent.
     * @param {AnomalyEventUpdateArgs} args - Arguments to update one AnomalyEvent.
     * @example
     * // Update one AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnomalyEventUpdateArgs>(args: SelectSubset<T, AnomalyEventUpdateArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnomalyEvents.
     * @param {AnomalyEventDeleteManyArgs} args - Arguments to filter AnomalyEvents to delete.
     * @example
     * // Delete a few AnomalyEvents
     * const { count } = await prisma.anomalyEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnomalyEventDeleteManyArgs>(args?: SelectSubset<T, AnomalyEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnomalyEvents
     * const anomalyEvent = await prisma.anomalyEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnomalyEventUpdateManyArgs>(args: SelectSubset<T, AnomalyEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyEvents and returns the data updated in the database.
     * @param {AnomalyEventUpdateManyAndReturnArgs} args - Arguments to update many AnomalyEvents.
     * @example
     * // Update many AnomalyEvents
     * const anomalyEvent = await prisma.anomalyEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnomalyEvents and only return the `id`
     * const anomalyEventWithIdOnly = await prisma.anomalyEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnomalyEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AnomalyEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnomalyEvent.
     * @param {AnomalyEventUpsertArgs} args - Arguments to update or create a AnomalyEvent.
     * @example
     * // Update or create a AnomalyEvent
     * const anomalyEvent = await prisma.anomalyEvent.upsert({
     *   create: {
     *     // ... data to create a AnomalyEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnomalyEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnomalyEventUpsertArgs>(args: SelectSubset<T, AnomalyEventUpsertArgs<ExtArgs>>): Prisma__AnomalyEventClient<$Result.GetResult<Prisma.$AnomalyEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnomalyEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventCountArgs} args - Arguments to filter AnomalyEvents to count.
     * @example
     * // Count the number of AnomalyEvents
     * const count = await prisma.anomalyEvent.count({
     *   where: {
     *     // ... the filter for the AnomalyEvents we want to count
     *   }
     * })
    **/
    count<T extends AnomalyEventCountArgs>(
      args?: Subset<T, AnomalyEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnomalyEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnomalyEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnomalyEventAggregateArgs>(args: Subset<T, AnomalyEventAggregateArgs>): Prisma.PrismaPromise<GetAnomalyEventAggregateType<T>>

    /**
     * Group by AnomalyEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnomalyEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnomalyEventGroupByArgs['orderBy'] }
        : { orderBy?: AnomalyEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnomalyEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnomalyEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnomalyEvent model
   */
  readonly fields: AnomalyEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnomalyEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnomalyEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends CreatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatorDefaultArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends AnomalyEvent$postArgs<ExtArgs> = {}>(args?: Subset<T, AnomalyEvent$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnomalyEvent model
   */
  interface AnomalyEventFieldRefs {
    readonly id: FieldRef<"AnomalyEvent", 'String'>
    readonly creatorId: FieldRef<"AnomalyEvent", 'String'>
    readonly postId: FieldRef<"AnomalyEvent", 'String'>
    readonly eventType: FieldRef<"AnomalyEvent", 'String'>
    readonly severity: FieldRef<"AnomalyEvent", 'AnomalySeverity'>
    readonly status: FieldRef<"AnomalyEvent", 'AnomalyStatus'>
    readonly metricName: FieldRef<"AnomalyEvent", 'String'>
    readonly expectedValue: FieldRef<"AnomalyEvent", 'Decimal'>
    readonly observedValue: FieldRef<"AnomalyEvent", 'Decimal'>
    readonly changePercent: FieldRef<"AnomalyEvent", 'Decimal'>
    readonly description: FieldRef<"AnomalyEvent", 'String'>
    readonly metadata: FieldRef<"AnomalyEvent", 'Json'>
    readonly detectedAt: FieldRef<"AnomalyEvent", 'DateTime'>
    readonly resolvedAt: FieldRef<"AnomalyEvent", 'DateTime'>
    readonly createdAt: FieldRef<"AnomalyEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"AnomalyEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnomalyEvent findUnique
   */
  export type AnomalyEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent findUniqueOrThrow
   */
  export type AnomalyEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent findFirst
   */
  export type AnomalyEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyEvents.
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyEvents.
     */
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * AnomalyEvent findFirstOrThrow
   */
  export type AnomalyEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvent to fetch.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyEvents.
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyEvents.
     */
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * AnomalyEvent findMany
   */
  export type AnomalyEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter, which AnomalyEvents to fetch.
     */
    where?: AnomalyEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyEvents to fetch.
     */
    orderBy?: AnomalyEventOrderByWithRelationInput | AnomalyEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnomalyEvents.
     */
    cursor?: AnomalyEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyEvents.
     */
    skip?: number
    distinct?: AnomalyEventScalarFieldEnum | AnomalyEventScalarFieldEnum[]
  }

  /**
   * AnomalyEvent create
   */
  export type AnomalyEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AnomalyEvent.
     */
    data: XOR<AnomalyEventCreateInput, AnomalyEventUncheckedCreateInput>
  }

  /**
   * AnomalyEvent createMany
   */
  export type AnomalyEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnomalyEvents.
     */
    data: AnomalyEventCreateManyInput | AnomalyEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnomalyEvent createManyAndReturn
   */
  export type AnomalyEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * The data used to create many AnomalyEvents.
     */
    data: AnomalyEventCreateManyInput | AnomalyEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnomalyEvent update
   */
  export type AnomalyEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AnomalyEvent.
     */
    data: XOR<AnomalyEventUpdateInput, AnomalyEventUncheckedUpdateInput>
    /**
     * Choose, which AnomalyEvent to update.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent updateMany
   */
  export type AnomalyEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnomalyEvents.
     */
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyEvents to update
     */
    where?: AnomalyEventWhereInput
    /**
     * Limit how many AnomalyEvents to update.
     */
    limit?: number
  }

  /**
   * AnomalyEvent updateManyAndReturn
   */
  export type AnomalyEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * The data used to update AnomalyEvents.
     */
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyEvents to update
     */
    where?: AnomalyEventWhereInput
    /**
     * Limit how many AnomalyEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnomalyEvent upsert
   */
  export type AnomalyEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AnomalyEvent to update in case it exists.
     */
    where: AnomalyEventWhereUniqueInput
    /**
     * In case the AnomalyEvent found by the `where` argument doesn't exist, create a new AnomalyEvent with this data.
     */
    create: XOR<AnomalyEventCreateInput, AnomalyEventUncheckedCreateInput>
    /**
     * In case the AnomalyEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnomalyEventUpdateInput, AnomalyEventUncheckedUpdateInput>
  }

  /**
   * AnomalyEvent delete
   */
  export type AnomalyEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
    /**
     * Filter which AnomalyEvent to delete.
     */
    where: AnomalyEventWhereUniqueInput
  }

  /**
   * AnomalyEvent deleteMany
   */
  export type AnomalyEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyEvents to delete
     */
    where?: AnomalyEventWhereInput
    /**
     * Limit how many AnomalyEvents to delete.
     */
    limit?: number
  }

  /**
   * AnomalyEvent.post
   */
  export type AnomalyEvent$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * AnomalyEvent without action
   */
  export type AnomalyEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyEvent
     */
    select?: AnomalyEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyEvent
     */
    omit?: AnomalyEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnomalyEventInclude<ExtArgs> | null
  }


  /**
   * Model SentimentScore
   */

  export type AggregateSentimentScore = {
    _count: SentimentScoreCountAggregateOutputType | null
    _avg: SentimentScoreAvgAggregateOutputType | null
    _sum: SentimentScoreSumAggregateOutputType | null
    _min: SentimentScoreMinAggregateOutputType | null
    _max: SentimentScoreMaxAggregateOutputType | null
  }

  export type SentimentScoreAvgAggregateOutputType = {
    score: Decimal | null
    confidence: Decimal | null
  }

  export type SentimentScoreSumAggregateOutputType = {
    score: Decimal | null
    confidence: Decimal | null
  }

  export type SentimentScoreMinAggregateOutputType = {
    id: string | null
    postId: string | null
    label: $Enums.SentimentLabel | null
    score: Decimal | null
    confidence: Decimal | null
    language: string | null
    provider: string | null
    modelName: string | null
    analyzedAt: Date | null
    createdAt: Date | null
  }

  export type SentimentScoreMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    label: $Enums.SentimentLabel | null
    score: Decimal | null
    confidence: Decimal | null
    language: string | null
    provider: string | null
    modelName: string | null
    analyzedAt: Date | null
    createdAt: Date | null
  }

  export type SentimentScoreCountAggregateOutputType = {
    id: number
    postId: number
    label: number
    score: number
    confidence: number
    language: number
    provider: number
    modelName: number
    analyzedAt: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type SentimentScoreAvgAggregateInputType = {
    score?: true
    confidence?: true
  }

  export type SentimentScoreSumAggregateInputType = {
    score?: true
    confidence?: true
  }

  export type SentimentScoreMinAggregateInputType = {
    id?: true
    postId?: true
    label?: true
    score?: true
    confidence?: true
    language?: true
    provider?: true
    modelName?: true
    analyzedAt?: true
    createdAt?: true
  }

  export type SentimentScoreMaxAggregateInputType = {
    id?: true
    postId?: true
    label?: true
    score?: true
    confidence?: true
    language?: true
    provider?: true
    modelName?: true
    analyzedAt?: true
    createdAt?: true
  }

  export type SentimentScoreCountAggregateInputType = {
    id?: true
    postId?: true
    label?: true
    score?: true
    confidence?: true
    language?: true
    provider?: true
    modelName?: true
    analyzedAt?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type SentimentScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentimentScore to aggregate.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentimentScores
    **/
    _count?: true | SentimentScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentimentScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentimentScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentimentScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentimentScoreMaxAggregateInputType
  }

  export type GetSentimentScoreAggregateType<T extends SentimentScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSentimentScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentimentScore[P]>
      : GetScalarType<T[P], AggregateSentimentScore[P]>
  }




  export type SentimentScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentScoreWhereInput
    orderBy?: SentimentScoreOrderByWithAggregationInput | SentimentScoreOrderByWithAggregationInput[]
    by: SentimentScoreScalarFieldEnum[] | SentimentScoreScalarFieldEnum
    having?: SentimentScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentimentScoreCountAggregateInputType | true
    _avg?: SentimentScoreAvgAggregateInputType
    _sum?: SentimentScoreSumAggregateInputType
    _min?: SentimentScoreMinAggregateInputType
    _max?: SentimentScoreMaxAggregateInputType
  }

  export type SentimentScoreGroupByOutputType = {
    id: string
    postId: string
    label: $Enums.SentimentLabel
    score: Decimal
    confidence: Decimal | null
    language: string | null
    provider: string | null
    modelName: string
    analyzedAt: Date
    metadata: JsonValue | null
    createdAt: Date
    _count: SentimentScoreCountAggregateOutputType | null
    _avg: SentimentScoreAvgAggregateOutputType | null
    _sum: SentimentScoreSumAggregateOutputType | null
    _min: SentimentScoreMinAggregateOutputType | null
    _max: SentimentScoreMaxAggregateOutputType | null
  }

  type GetSentimentScoreGroupByPayload<T extends SentimentScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentimentScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentimentScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentimentScoreGroupByOutputType[P]>
            : GetScalarType<T[P], SentimentScoreGroupByOutputType[P]>
        }
      >
    >


  export type SentimentScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    label?: boolean
    score?: boolean
    confidence?: boolean
    language?: boolean
    provider?: boolean
    modelName?: boolean
    analyzedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentScore"]>

  export type SentimentScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    label?: boolean
    score?: boolean
    confidence?: boolean
    language?: boolean
    provider?: boolean
    modelName?: boolean
    analyzedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentScore"]>

  export type SentimentScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    label?: boolean
    score?: boolean
    confidence?: boolean
    language?: boolean
    provider?: boolean
    modelName?: boolean
    analyzedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentScore"]>

  export type SentimentScoreSelectScalar = {
    id?: boolean
    postId?: boolean
    label?: boolean
    score?: boolean
    confidence?: boolean
    language?: boolean
    provider?: boolean
    modelName?: boolean
    analyzedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type SentimentScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "label" | "score" | "confidence" | "language" | "provider" | "modelName" | "analyzedAt" | "metadata" | "createdAt", ExtArgs["result"]["sentimentScore"]>
  export type SentimentScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type SentimentScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type SentimentScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $SentimentScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SentimentScore"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Primary Key
       */
      id: string
      /**
       * Post relationship
       */
      postId: string
      /**
       * Sentiment result
       */
      label: $Enums.SentimentLabel
      score: Prisma.Decimal
      confidence: Prisma.Decimal | null
      /**
       * Analysis metadata
       */
      language: string | null
      provider: string | null
      modelName: string
      analyzedAt: Date
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["sentimentScore"]>
    composites: {}
  }

  type SentimentScoreGetPayload<S extends boolean | null | undefined | SentimentScoreDefaultArgs> = $Result.GetResult<Prisma.$SentimentScorePayload, S>

  type SentimentScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SentimentScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SentimentScoreCountAggregateInputType | true
    }

  export interface SentimentScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentimentScore'], meta: { name: 'SentimentScore' } }
    /**
     * Find zero or one SentimentScore that matches the filter.
     * @param {SentimentScoreFindUniqueArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentimentScoreFindUniqueArgs>(args: SelectSubset<T, SentimentScoreFindUniqueArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SentimentScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SentimentScoreFindUniqueOrThrowArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentimentScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SentimentScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentimentScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreFindFirstArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentimentScoreFindFirstArgs>(args?: SelectSubset<T, SentimentScoreFindFirstArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentimentScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreFindFirstOrThrowArgs} args - Arguments to find a SentimentScore
     * @example
     * // Get one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentimentScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SentimentScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SentimentScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentimentScores
     * const sentimentScores = await prisma.sentimentScore.findMany()
     * 
     * // Get first 10 SentimentScores
     * const sentimentScores = await prisma.sentimentScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentimentScoreWithIdOnly = await prisma.sentimentScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SentimentScoreFindManyArgs>(args?: SelectSubset<T, SentimentScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SentimentScore.
     * @param {SentimentScoreCreateArgs} args - Arguments to create a SentimentScore.
     * @example
     * // Create one SentimentScore
     * const SentimentScore = await prisma.sentimentScore.create({
     *   data: {
     *     // ... data to create a SentimentScore
     *   }
     * })
     * 
     */
    create<T extends SentimentScoreCreateArgs>(args: SelectSubset<T, SentimentScoreCreateArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SentimentScores.
     * @param {SentimentScoreCreateManyArgs} args - Arguments to create many SentimentScores.
     * @example
     * // Create many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentimentScoreCreateManyArgs>(args?: SelectSubset<T, SentimentScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SentimentScores and returns the data saved in the database.
     * @param {SentimentScoreCreateManyAndReturnArgs} args - Arguments to create many SentimentScores.
     * @example
     * // Create many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SentimentScores and only return the `id`
     * const sentimentScoreWithIdOnly = await prisma.sentimentScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentimentScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, SentimentScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SentimentScore.
     * @param {SentimentScoreDeleteArgs} args - Arguments to delete one SentimentScore.
     * @example
     * // Delete one SentimentScore
     * const SentimentScore = await prisma.sentimentScore.delete({
     *   where: {
     *     // ... filter to delete one SentimentScore
     *   }
     * })
     * 
     */
    delete<T extends SentimentScoreDeleteArgs>(args: SelectSubset<T, SentimentScoreDeleteArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SentimentScore.
     * @param {SentimentScoreUpdateArgs} args - Arguments to update one SentimentScore.
     * @example
     * // Update one SentimentScore
     * const sentimentScore = await prisma.sentimentScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentimentScoreUpdateArgs>(args: SelectSubset<T, SentimentScoreUpdateArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SentimentScores.
     * @param {SentimentScoreDeleteManyArgs} args - Arguments to filter SentimentScores to delete.
     * @example
     * // Delete a few SentimentScores
     * const { count } = await prisma.sentimentScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentimentScoreDeleteManyArgs>(args?: SelectSubset<T, SentimentScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentimentScoreUpdateManyArgs>(args: SelectSubset<T, SentimentScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentScores and returns the data updated in the database.
     * @param {SentimentScoreUpdateManyAndReturnArgs} args - Arguments to update many SentimentScores.
     * @example
     * // Update many SentimentScores
     * const sentimentScore = await prisma.sentimentScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SentimentScores and only return the `id`
     * const sentimentScoreWithIdOnly = await prisma.sentimentScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SentimentScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, SentimentScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SentimentScore.
     * @param {SentimentScoreUpsertArgs} args - Arguments to update or create a SentimentScore.
     * @example
     * // Update or create a SentimentScore
     * const sentimentScore = await prisma.sentimentScore.upsert({
     *   create: {
     *     // ... data to create a SentimentScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentimentScore we want to update
     *   }
     * })
     */
    upsert<T extends SentimentScoreUpsertArgs>(args: SelectSubset<T, SentimentScoreUpsertArgs<ExtArgs>>): Prisma__SentimentScoreClient<$Result.GetResult<Prisma.$SentimentScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SentimentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreCountArgs} args - Arguments to filter SentimentScores to count.
     * @example
     * // Count the number of SentimentScores
     * const count = await prisma.sentimentScore.count({
     *   where: {
     *     // ... the filter for the SentimentScores we want to count
     *   }
     * })
    **/
    count<T extends SentimentScoreCountArgs>(
      args?: Subset<T, SentimentScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentimentScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentimentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SentimentScoreAggregateArgs>(args: Subset<T, SentimentScoreAggregateArgs>): Prisma.PrismaPromise<GetSentimentScoreAggregateType<T>>

    /**
     * Group by SentimentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SentimentScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentimentScoreGroupByArgs['orderBy'] }
        : { orderBy?: SentimentScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SentimentScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentimentScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SentimentScore model
   */
  readonly fields: SentimentScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SentimentScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentimentScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SentimentScore model
   */
  interface SentimentScoreFieldRefs {
    readonly id: FieldRef<"SentimentScore", 'String'>
    readonly postId: FieldRef<"SentimentScore", 'String'>
    readonly label: FieldRef<"SentimentScore", 'SentimentLabel'>
    readonly score: FieldRef<"SentimentScore", 'Decimal'>
    readonly confidence: FieldRef<"SentimentScore", 'Decimal'>
    readonly language: FieldRef<"SentimentScore", 'String'>
    readonly provider: FieldRef<"SentimentScore", 'String'>
    readonly modelName: FieldRef<"SentimentScore", 'String'>
    readonly analyzedAt: FieldRef<"SentimentScore", 'DateTime'>
    readonly metadata: FieldRef<"SentimentScore", 'Json'>
    readonly createdAt: FieldRef<"SentimentScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SentimentScore findUnique
   */
  export type SentimentScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore findUniqueOrThrow
   */
  export type SentimentScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore findFirst
   */
  export type SentimentScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentScores.
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentScores.
     */
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * SentimentScore findFirstOrThrow
   */
  export type SentimentScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScore to fetch.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentScores.
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentScores.
     */
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * SentimentScore findMany
   */
  export type SentimentScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter, which SentimentScores to fetch.
     */
    where?: SentimentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentScores to fetch.
     */
    orderBy?: SentimentScoreOrderByWithRelationInput | SentimentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentimentScores.
     */
    cursor?: SentimentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentScores.
     */
    skip?: number
    distinct?: SentimentScoreScalarFieldEnum | SentimentScoreScalarFieldEnum[]
  }

  /**
   * SentimentScore create
   */
  export type SentimentScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a SentimentScore.
     */
    data: XOR<SentimentScoreCreateInput, SentimentScoreUncheckedCreateInput>
  }

  /**
   * SentimentScore createMany
   */
  export type SentimentScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentimentScores.
     */
    data: SentimentScoreCreateManyInput | SentimentScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SentimentScore createManyAndReturn
   */
  export type SentimentScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * The data used to create many SentimentScores.
     */
    data: SentimentScoreCreateManyInput | SentimentScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentimentScore update
   */
  export type SentimentScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a SentimentScore.
     */
    data: XOR<SentimentScoreUpdateInput, SentimentScoreUncheckedUpdateInput>
    /**
     * Choose, which SentimentScore to update.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore updateMany
   */
  export type SentimentScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentimentScores.
     */
    data: XOR<SentimentScoreUpdateManyMutationInput, SentimentScoreUncheckedUpdateManyInput>
    /**
     * Filter which SentimentScores to update
     */
    where?: SentimentScoreWhereInput
    /**
     * Limit how many SentimentScores to update.
     */
    limit?: number
  }

  /**
   * SentimentScore updateManyAndReturn
   */
  export type SentimentScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * The data used to update SentimentScores.
     */
    data: XOR<SentimentScoreUpdateManyMutationInput, SentimentScoreUncheckedUpdateManyInput>
    /**
     * Filter which SentimentScores to update
     */
    where?: SentimentScoreWhereInput
    /**
     * Limit how many SentimentScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentimentScore upsert
   */
  export type SentimentScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the SentimentScore to update in case it exists.
     */
    where: SentimentScoreWhereUniqueInput
    /**
     * In case the SentimentScore found by the `where` argument doesn't exist, create a new SentimentScore with this data.
     */
    create: XOR<SentimentScoreCreateInput, SentimentScoreUncheckedCreateInput>
    /**
     * In case the SentimentScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentimentScoreUpdateInput, SentimentScoreUncheckedUpdateInput>
  }

  /**
   * SentimentScore delete
   */
  export type SentimentScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
    /**
     * Filter which SentimentScore to delete.
     */
    where: SentimentScoreWhereUniqueInput
  }

  /**
   * SentimentScore deleteMany
   */
  export type SentimentScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentimentScores to delete
     */
    where?: SentimentScoreWhereInput
    /**
     * Limit how many SentimentScores to delete.
     */
    limit?: number
  }

  /**
   * SentimentScore without action
   */
  export type SentimentScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentScore
     */
    select?: SentimentScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentScore
     */
    omit?: SentimentScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentScoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    baseUrl: 'baseUrl',
    description: 'description',
    logoUrl: 'logoUrl',
    supportsFollowers: 'supportsFollowers',
    supportsLikes: 'supportsLikes',
    supportsComments: 'supportsComments',
    supportsViews: 'supportsViews',
    supportsShares: 'supportsShares',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const CreatorScalarFieldEnum: {
    id: 'id',
    platformId: 'platformId',
    externalId: 'externalId',
    username: 'username',
    displayName: 'displayName',
    profileUrl: 'profileUrl',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    isVerified: 'isVerified',
    isActive: 'isActive',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreatorScalarFieldEnum = (typeof CreatorScalarFieldEnum)[keyof typeof CreatorScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    externalId: 'externalId',
    type: 'type',
    content: 'content',
    postUrl: 'postUrl',
    thumbnailUrl: 'thumbnailUrl',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const MetricSnapshotScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    postId: 'postId',
    followerCount: 'followerCount',
    followingCount: 'followingCount',
    postCount: 'postCount',
    totalLikes: 'totalLikes',
    totalComments: 'totalComments',
    totalViews: 'totalViews',
    totalShares: 'totalShares',
    engagementRate: 'engagementRate',
    capturedAt: 'capturedAt',
    source: 'source',
    rawMetrics: 'rawMetrics',
    createdAt: 'createdAt'
  };

  export type MetricSnapshotScalarFieldEnum = (typeof MetricSnapshotScalarFieldEnum)[keyof typeof MetricSnapshotScalarFieldEnum]


  export const EngagementStatsScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    periodType: 'periodType',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    totalPosts: 'totalPosts',
    totalLikes: 'totalLikes',
    totalComments: 'totalComments',
    totalViews: 'totalViews',
    totalShares: 'totalShares',
    averageLikes: 'averageLikes',
    averageComments: 'averageComments',
    averageViews: 'averageViews',
    averageEngagementRate: 'averageEngagementRate',
    calculatedAt: 'calculatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EngagementStatsScalarFieldEnum = (typeof EngagementStatsScalarFieldEnum)[keyof typeof EngagementStatsScalarFieldEnum]


  export const AnomalyEventScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    postId: 'postId',
    eventType: 'eventType',
    severity: 'severity',
    status: 'status',
    metricName: 'metricName',
    expectedValue: 'expectedValue',
    observedValue: 'observedValue',
    changePercent: 'changePercent',
    description: 'description',
    metadata: 'metadata',
    detectedAt: 'detectedAt',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnomalyEventScalarFieldEnum = (typeof AnomalyEventScalarFieldEnum)[keyof typeof AnomalyEventScalarFieldEnum]


  export const SentimentScoreScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    label: 'label',
    score: 'score',
    confidence: 'confidence',
    language: 'language',
    provider: 'provider',
    modelName: 'modelName',
    analyzedAt: 'analyzedAt',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type SentimentScoreScalarFieldEnum = (typeof SentimentScoreScalarFieldEnum)[keyof typeof SentimentScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostType[]'
   */
  export type ListEnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AnalyticsPeriod'
   */
  export type EnumAnalyticsPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalyticsPeriod'>
    


  /**
   * Reference to a field of type 'AnalyticsPeriod[]'
   */
  export type ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalyticsPeriod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AnomalySeverity'
   */
  export type EnumAnomalySeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnomalySeverity'>
    


  /**
   * Reference to a field of type 'AnomalySeverity[]'
   */
  export type ListEnumAnomalySeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnomalySeverity[]'>
    


  /**
   * Reference to a field of type 'AnomalyStatus'
   */
  export type EnumAnomalyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnomalyStatus'>
    


  /**
   * Reference to a field of type 'AnomalyStatus[]'
   */
  export type ListEnumAnomalyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnomalyStatus[]'>
    


  /**
   * Reference to a field of type 'SentimentLabel'
   */
  export type EnumSentimentLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SentimentLabel'>
    


  /**
   * Reference to a field of type 'SentimentLabel[]'
   */
  export type ListEnumSentimentLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SentimentLabel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: UuidFilter<"Platform"> | string
    name?: StringFilter<"Platform"> | string
    slug?: StringFilter<"Platform"> | string
    baseUrl?: StringFilter<"Platform"> | string
    description?: StringNullableFilter<"Platform"> | string | null
    logoUrl?: StringNullableFilter<"Platform"> | string | null
    supportsFollowers?: BoolFilter<"Platform"> | boolean
    supportsLikes?: BoolFilter<"Platform"> | boolean
    supportsComments?: BoolFilter<"Platform"> | boolean
    supportsViews?: BoolFilter<"Platform"> | boolean
    supportsShares?: BoolFilter<"Platform"> | boolean
    isActive?: BoolFilter<"Platform"> | boolean
    createdAt?: DateTimeFilter<"Platform"> | Date | string
    updatedAt?: DateTimeFilter<"Platform"> | Date | string
    creators?: CreatorListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    baseUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    supportsFollowers?: SortOrder
    supportsLikes?: SortOrder
    supportsComments?: SortOrder
    supportsViews?: SortOrder
    supportsShares?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creators?: CreatorOrderByRelationAggregateInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    baseUrl?: StringFilter<"Platform"> | string
    description?: StringNullableFilter<"Platform"> | string | null
    logoUrl?: StringNullableFilter<"Platform"> | string | null
    supportsFollowers?: BoolFilter<"Platform"> | boolean
    supportsLikes?: BoolFilter<"Platform"> | boolean
    supportsComments?: BoolFilter<"Platform"> | boolean
    supportsViews?: BoolFilter<"Platform"> | boolean
    supportsShares?: BoolFilter<"Platform"> | boolean
    isActive?: BoolFilter<"Platform"> | boolean
    createdAt?: DateTimeFilter<"Platform"> | Date | string
    updatedAt?: DateTimeFilter<"Platform"> | Date | string
    creators?: CreatorListRelationFilter
  }, "id" | "name" | "slug">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    baseUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    supportsFollowers?: SortOrder
    supportsLikes?: SortOrder
    supportsComments?: SortOrder
    supportsViews?: SortOrder
    supportsShares?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Platform"> | string
    name?: StringWithAggregatesFilter<"Platform"> | string
    slug?: StringWithAggregatesFilter<"Platform"> | string
    baseUrl?: StringWithAggregatesFilter<"Platform"> | string
    description?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    supportsFollowers?: BoolWithAggregatesFilter<"Platform"> | boolean
    supportsLikes?: BoolWithAggregatesFilter<"Platform"> | boolean
    supportsComments?: BoolWithAggregatesFilter<"Platform"> | boolean
    supportsViews?: BoolWithAggregatesFilter<"Platform"> | boolean
    supportsShares?: BoolWithAggregatesFilter<"Platform"> | boolean
    isActive?: BoolWithAggregatesFilter<"Platform"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
  }

  export type CreatorWhereInput = {
    AND?: CreatorWhereInput | CreatorWhereInput[]
    OR?: CreatorWhereInput[]
    NOT?: CreatorWhereInput | CreatorWhereInput[]
    id?: UuidFilter<"Creator"> | string
    platformId?: UuidFilter<"Creator"> | string
    externalId?: StringFilter<"Creator"> | string
    username?: StringNullableFilter<"Creator"> | string | null
    displayName?: StringNullableFilter<"Creator"> | string | null
    profileUrl?: StringNullableFilter<"Creator"> | string | null
    bio?: StringNullableFilter<"Creator"> | string | null
    avatarUrl?: StringNullableFilter<"Creator"> | string | null
    isVerified?: BoolFilter<"Creator"> | boolean
    isActive?: BoolFilter<"Creator"> | boolean
    firstSeenAt?: DateTimeFilter<"Creator"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Creator"> | Date | string | null
    createdAt?: DateTimeFilter<"Creator"> | Date | string
    updatedAt?: DateTimeFilter<"Creator"> | Date | string
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
    posts?: PostListRelationFilter
    metricSnapshots?: MetricSnapshotListRelationFilter
    engagementStats?: EngagementStatsListRelationFilter
    anomalyEvents?: AnomalyEventListRelationFilter
  }

  export type CreatorOrderByWithRelationInput = {
    id?: SortOrder
    platformId?: SortOrder
    externalId?: SortOrder
    username?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platform?: PlatformOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    metricSnapshots?: MetricSnapshotOrderByRelationAggregateInput
    engagementStats?: EngagementStatsOrderByRelationAggregateInput
    anomalyEvents?: AnomalyEventOrderByRelationAggregateInput
  }

  export type CreatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    platformId_externalId?: CreatorPlatformIdExternalIdCompoundUniqueInput
    platformId_username?: CreatorPlatformIdUsernameCompoundUniqueInput
    AND?: CreatorWhereInput | CreatorWhereInput[]
    OR?: CreatorWhereInput[]
    NOT?: CreatorWhereInput | CreatorWhereInput[]
    platformId?: UuidFilter<"Creator"> | string
    externalId?: StringFilter<"Creator"> | string
    username?: StringNullableFilter<"Creator"> | string | null
    displayName?: StringNullableFilter<"Creator"> | string | null
    profileUrl?: StringNullableFilter<"Creator"> | string | null
    bio?: StringNullableFilter<"Creator"> | string | null
    avatarUrl?: StringNullableFilter<"Creator"> | string | null
    isVerified?: BoolFilter<"Creator"> | boolean
    isActive?: BoolFilter<"Creator"> | boolean
    firstSeenAt?: DateTimeFilter<"Creator"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Creator"> | Date | string | null
    createdAt?: DateTimeFilter<"Creator"> | Date | string
    updatedAt?: DateTimeFilter<"Creator"> | Date | string
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
    posts?: PostListRelationFilter
    metricSnapshots?: MetricSnapshotListRelationFilter
    engagementStats?: EngagementStatsListRelationFilter
    anomalyEvents?: AnomalyEventListRelationFilter
  }, "id" | "platformId_externalId" | "platformId_username">

  export type CreatorOrderByWithAggregationInput = {
    id?: SortOrder
    platformId?: SortOrder
    externalId?: SortOrder
    username?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreatorCountOrderByAggregateInput
    _max?: CreatorMaxOrderByAggregateInput
    _min?: CreatorMinOrderByAggregateInput
  }

  export type CreatorScalarWhereWithAggregatesInput = {
    AND?: CreatorScalarWhereWithAggregatesInput | CreatorScalarWhereWithAggregatesInput[]
    OR?: CreatorScalarWhereWithAggregatesInput[]
    NOT?: CreatorScalarWhereWithAggregatesInput | CreatorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Creator"> | string
    platformId?: UuidWithAggregatesFilter<"Creator"> | string
    externalId?: StringWithAggregatesFilter<"Creator"> | string
    username?: StringNullableWithAggregatesFilter<"Creator"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"Creator"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"Creator"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Creator"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Creator"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Creator"> | boolean
    isActive?: BoolWithAggregatesFilter<"Creator"> | boolean
    firstSeenAt?: DateTimeWithAggregatesFilter<"Creator"> | Date | string
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Creator"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Creator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Creator"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    creatorId?: UuidFilter<"Post"> | string
    externalId?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    content?: StringNullableFilter<"Post"> | string | null
    postUrl?: StringNullableFilter<"Post"> | string | null
    thumbnailUrl?: StringNullableFilter<"Post"> | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
    metricSnapshots?: MetricSnapshotListRelationFilter
    sentimentScores?: SentimentScoreListRelationFilter
    anomalyEvents?: AnomalyEventListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    externalId?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    postUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: CreatorOrderByWithRelationInput
    metricSnapshots?: MetricSnapshotOrderByRelationAggregateInput
    sentimentScores?: SentimentScoreOrderByRelationAggregateInput
    anomalyEvents?: AnomalyEventOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    creatorId_externalId?: PostCreatorIdExternalIdCompoundUniqueInput
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    creatorId?: UuidFilter<"Post"> | string
    externalId?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    content?: StringNullableFilter<"Post"> | string | null
    postUrl?: StringNullableFilter<"Post"> | string | null
    thumbnailUrl?: StringNullableFilter<"Post"> | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
    metricSnapshots?: MetricSnapshotListRelationFilter
    sentimentScores?: SentimentScoreListRelationFilter
    anomalyEvents?: AnomalyEventListRelationFilter
  }, "id" | "creatorId_externalId">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    externalId?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    postUrl?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    creatorId?: UuidWithAggregatesFilter<"Post"> | string
    externalId?: StringWithAggregatesFilter<"Post"> | string
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    postUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type MetricSnapshotWhereInput = {
    AND?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    OR?: MetricSnapshotWhereInput[]
    NOT?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    id?: UuidFilter<"MetricSnapshot"> | string
    creatorId?: UuidFilter<"MetricSnapshot"> | string
    postId?: UuidNullableFilter<"MetricSnapshot"> | string | null
    followerCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    followingCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    postCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalLikes?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalComments?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalViews?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalShares?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    engagementRate?: DecimalNullableFilter<"MetricSnapshot"> | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    source?: StringNullableFilter<"MetricSnapshot"> | string | null
    rawMetrics?: JsonNullableFilter<"MetricSnapshot">
    createdAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type MetricSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrderInput | SortOrder
    followerCount?: SortOrderInput | SortOrder
    followingCount?: SortOrderInput | SortOrder
    postCount?: SortOrderInput | SortOrder
    totalLikes?: SortOrderInput | SortOrder
    totalComments?: SortOrderInput | SortOrder
    totalViews?: SortOrderInput | SortOrder
    totalShares?: SortOrderInput | SortOrder
    engagementRate?: SortOrderInput | SortOrder
    capturedAt?: SortOrder
    source?: SortOrderInput | SortOrder
    rawMetrics?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creator?: CreatorOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type MetricSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    OR?: MetricSnapshotWhereInput[]
    NOT?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    creatorId?: UuidFilter<"MetricSnapshot"> | string
    postId?: UuidNullableFilter<"MetricSnapshot"> | string | null
    followerCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    followingCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    postCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalLikes?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalComments?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalViews?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalShares?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    engagementRate?: DecimalNullableFilter<"MetricSnapshot"> | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    source?: StringNullableFilter<"MetricSnapshot"> | string | null
    rawMetrics?: JsonNullableFilter<"MetricSnapshot">
    createdAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type MetricSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrderInput | SortOrder
    followerCount?: SortOrderInput | SortOrder
    followingCount?: SortOrderInput | SortOrder
    postCount?: SortOrderInput | SortOrder
    totalLikes?: SortOrderInput | SortOrder
    totalComments?: SortOrderInput | SortOrder
    totalViews?: SortOrderInput | SortOrder
    totalShares?: SortOrderInput | SortOrder
    engagementRate?: SortOrderInput | SortOrder
    capturedAt?: SortOrder
    source?: SortOrderInput | SortOrder
    rawMetrics?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MetricSnapshotCountOrderByAggregateInput
    _avg?: MetricSnapshotAvgOrderByAggregateInput
    _max?: MetricSnapshotMaxOrderByAggregateInput
    _min?: MetricSnapshotMinOrderByAggregateInput
    _sum?: MetricSnapshotSumOrderByAggregateInput
  }

  export type MetricSnapshotScalarWhereWithAggregatesInput = {
    AND?: MetricSnapshotScalarWhereWithAggregatesInput | MetricSnapshotScalarWhereWithAggregatesInput[]
    OR?: MetricSnapshotScalarWhereWithAggregatesInput[]
    NOT?: MetricSnapshotScalarWhereWithAggregatesInput | MetricSnapshotScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MetricSnapshot"> | string
    creatorId?: UuidWithAggregatesFilter<"MetricSnapshot"> | string
    postId?: UuidNullableWithAggregatesFilter<"MetricSnapshot"> | string | null
    followerCount?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    followingCount?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    postCount?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    totalLikes?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    totalComments?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    totalViews?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    totalShares?: BigIntNullableWithAggregatesFilter<"MetricSnapshot"> | bigint | number | null
    engagementRate?: DecimalNullableWithAggregatesFilter<"MetricSnapshot"> | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeWithAggregatesFilter<"MetricSnapshot"> | Date | string
    source?: StringNullableWithAggregatesFilter<"MetricSnapshot"> | string | null
    rawMetrics?: JsonNullableWithAggregatesFilter<"MetricSnapshot">
    createdAt?: DateTimeWithAggregatesFilter<"MetricSnapshot"> | Date | string
  }

  export type EngagementStatsWhereInput = {
    AND?: EngagementStatsWhereInput | EngagementStatsWhereInput[]
    OR?: EngagementStatsWhereInput[]
    NOT?: EngagementStatsWhereInput | EngagementStatsWhereInput[]
    id?: UuidFilter<"EngagementStats"> | string
    creatorId?: UuidFilter<"EngagementStats"> | string
    periodType?: EnumAnalyticsPeriodFilter<"EngagementStats"> | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFilter<"EngagementStats"> | Date | string
    periodEnd?: DateTimeFilter<"EngagementStats"> | Date | string
    totalPosts?: IntFilter<"EngagementStats"> | number
    totalLikes?: BigIntFilter<"EngagementStats"> | bigint | number
    totalComments?: BigIntFilter<"EngagementStats"> | bigint | number
    totalViews?: BigIntFilter<"EngagementStats"> | bigint | number
    totalShares?: BigIntFilter<"EngagementStats"> | bigint | number
    averageLikes?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageComments?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageViews?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFilter<"EngagementStats"> | Date | string
    createdAt?: DateTimeFilter<"EngagementStats"> | Date | string
    updatedAt?: DateTimeFilter<"EngagementStats"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
  }

  export type EngagementStatsOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    periodType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrderInput | SortOrder
    averageComments?: SortOrderInput | SortOrder
    averageViews?: SortOrderInput | SortOrder
    averageEngagementRate?: SortOrder
    calculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: CreatorOrderByWithRelationInput
  }

  export type EngagementStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    creatorId_periodType_periodStart?: EngagementStatsCreatorIdPeriodTypePeriodStartCompoundUniqueInput
    AND?: EngagementStatsWhereInput | EngagementStatsWhereInput[]
    OR?: EngagementStatsWhereInput[]
    NOT?: EngagementStatsWhereInput | EngagementStatsWhereInput[]
    creatorId?: UuidFilter<"EngagementStats"> | string
    periodType?: EnumAnalyticsPeriodFilter<"EngagementStats"> | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFilter<"EngagementStats"> | Date | string
    periodEnd?: DateTimeFilter<"EngagementStats"> | Date | string
    totalPosts?: IntFilter<"EngagementStats"> | number
    totalLikes?: BigIntFilter<"EngagementStats"> | bigint | number
    totalComments?: BigIntFilter<"EngagementStats"> | bigint | number
    totalViews?: BigIntFilter<"EngagementStats"> | bigint | number
    totalShares?: BigIntFilter<"EngagementStats"> | bigint | number
    averageLikes?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageComments?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageViews?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFilter<"EngagementStats"> | Date | string
    createdAt?: DateTimeFilter<"EngagementStats"> | Date | string
    updatedAt?: DateTimeFilter<"EngagementStats"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
  }, "id" | "creatorId_periodType_periodStart">

  export type EngagementStatsOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    periodType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrderInput | SortOrder
    averageComments?: SortOrderInput | SortOrder
    averageViews?: SortOrderInput | SortOrder
    averageEngagementRate?: SortOrder
    calculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EngagementStatsCountOrderByAggregateInput
    _avg?: EngagementStatsAvgOrderByAggregateInput
    _max?: EngagementStatsMaxOrderByAggregateInput
    _min?: EngagementStatsMinOrderByAggregateInput
    _sum?: EngagementStatsSumOrderByAggregateInput
  }

  export type EngagementStatsScalarWhereWithAggregatesInput = {
    AND?: EngagementStatsScalarWhereWithAggregatesInput | EngagementStatsScalarWhereWithAggregatesInput[]
    OR?: EngagementStatsScalarWhereWithAggregatesInput[]
    NOT?: EngagementStatsScalarWhereWithAggregatesInput | EngagementStatsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EngagementStats"> | string
    creatorId?: UuidWithAggregatesFilter<"EngagementStats"> | string
    periodType?: EnumAnalyticsPeriodWithAggregatesFilter<"EngagementStats"> | $Enums.AnalyticsPeriod
    periodStart?: DateTimeWithAggregatesFilter<"EngagementStats"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"EngagementStats"> | Date | string
    totalPosts?: IntWithAggregatesFilter<"EngagementStats"> | number
    totalLikes?: BigIntWithAggregatesFilter<"EngagementStats"> | bigint | number
    totalComments?: BigIntWithAggregatesFilter<"EngagementStats"> | bigint | number
    totalViews?: BigIntWithAggregatesFilter<"EngagementStats"> | bigint | number
    totalShares?: BigIntWithAggregatesFilter<"EngagementStats"> | bigint | number
    averageLikes?: DecimalNullableWithAggregatesFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageComments?: DecimalNullableWithAggregatesFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageViews?: DecimalNullableWithAggregatesFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalWithAggregatesFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeWithAggregatesFilter<"EngagementStats"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EngagementStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EngagementStats"> | Date | string
  }

  export type AnomalyEventWhereInput = {
    AND?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    OR?: AnomalyEventWhereInput[]
    NOT?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    id?: UuidFilter<"AnomalyEvent"> | string
    creatorId?: UuidFilter<"AnomalyEvent"> | string
    postId?: UuidNullableFilter<"AnomalyEvent"> | string | null
    eventType?: StringFilter<"AnomalyEvent"> | string
    severity?: EnumAnomalySeverityFilter<"AnomalyEvent"> | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFilter<"AnomalyEvent"> | $Enums.AnomalyStatus
    metricName?: StringFilter<"AnomalyEvent"> | string
    expectedValue?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    observedValue?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"AnomalyEvent"> | string | null
    metadata?: JsonNullableFilter<"AnomalyEvent">
    detectedAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"AnomalyEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type AnomalyEventOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    metricName?: SortOrder
    expectedValue?: SortOrderInput | SortOrder
    observedValue?: SortOrderInput | SortOrder
    changePercent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: CreatorOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type AnomalyEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    OR?: AnomalyEventWhereInput[]
    NOT?: AnomalyEventWhereInput | AnomalyEventWhereInput[]
    creatorId?: UuidFilter<"AnomalyEvent"> | string
    postId?: UuidNullableFilter<"AnomalyEvent"> | string | null
    eventType?: StringFilter<"AnomalyEvent"> | string
    severity?: EnumAnomalySeverityFilter<"AnomalyEvent"> | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFilter<"AnomalyEvent"> | $Enums.AnomalyStatus
    metricName?: StringFilter<"AnomalyEvent"> | string
    expectedValue?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    observedValue?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"AnomalyEvent"> | string | null
    metadata?: JsonNullableFilter<"AnomalyEvent">
    detectedAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"AnomalyEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    creator?: XOR<CreatorScalarRelationFilter, CreatorWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type AnomalyEventOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    metricName?: SortOrder
    expectedValue?: SortOrderInput | SortOrder
    observedValue?: SortOrderInput | SortOrder
    changePercent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnomalyEventCountOrderByAggregateInput
    _avg?: AnomalyEventAvgOrderByAggregateInput
    _max?: AnomalyEventMaxOrderByAggregateInput
    _min?: AnomalyEventMinOrderByAggregateInput
    _sum?: AnomalyEventSumOrderByAggregateInput
  }

  export type AnomalyEventScalarWhereWithAggregatesInput = {
    AND?: AnomalyEventScalarWhereWithAggregatesInput | AnomalyEventScalarWhereWithAggregatesInput[]
    OR?: AnomalyEventScalarWhereWithAggregatesInput[]
    NOT?: AnomalyEventScalarWhereWithAggregatesInput | AnomalyEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AnomalyEvent"> | string
    creatorId?: UuidWithAggregatesFilter<"AnomalyEvent"> | string
    postId?: UuidNullableWithAggregatesFilter<"AnomalyEvent"> | string | null
    eventType?: StringWithAggregatesFilter<"AnomalyEvent"> | string
    severity?: EnumAnomalySeverityWithAggregatesFilter<"AnomalyEvent"> | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusWithAggregatesFilter<"AnomalyEvent"> | $Enums.AnomalyStatus
    metricName?: StringWithAggregatesFilter<"AnomalyEvent"> | string
    expectedValue?: DecimalNullableWithAggregatesFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    observedValue?: DecimalNullableWithAggregatesFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableWithAggregatesFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"AnomalyEvent"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"AnomalyEvent">
    detectedAt?: DateTimeWithAggregatesFilter<"AnomalyEvent"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"AnomalyEvent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnomalyEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnomalyEvent"> | Date | string
  }

  export type SentimentScoreWhereInput = {
    AND?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    OR?: SentimentScoreWhereInput[]
    NOT?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    id?: UuidFilter<"SentimentScore"> | string
    postId?: UuidFilter<"SentimentScore"> | string
    label?: EnumSentimentLabelFilter<"SentimentScore"> | $Enums.SentimentLabel
    score?: DecimalFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string
    confidence?: DecimalNullableFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string | null
    language?: StringNullableFilter<"SentimentScore"> | string | null
    provider?: StringNullableFilter<"SentimentScore"> | string | null
    modelName?: StringFilter<"SentimentScore"> | string
    analyzedAt?: DateTimeFilter<"SentimentScore"> | Date | string
    metadata?: JsonNullableFilter<"SentimentScore">
    createdAt?: DateTimeFilter<"SentimentScore"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type SentimentScoreOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    label?: SortOrder
    score?: SortOrder
    confidence?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    modelName?: SortOrder
    analyzedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type SentimentScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_modelName_analyzedAt?: SentimentScorePostIdModelNameAnalyzedAtCompoundUniqueInput
    AND?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    OR?: SentimentScoreWhereInput[]
    NOT?: SentimentScoreWhereInput | SentimentScoreWhereInput[]
    postId?: UuidFilter<"SentimentScore"> | string
    label?: EnumSentimentLabelFilter<"SentimentScore"> | $Enums.SentimentLabel
    score?: DecimalFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string
    confidence?: DecimalNullableFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string | null
    language?: StringNullableFilter<"SentimentScore"> | string | null
    provider?: StringNullableFilter<"SentimentScore"> | string | null
    modelName?: StringFilter<"SentimentScore"> | string
    analyzedAt?: DateTimeFilter<"SentimentScore"> | Date | string
    metadata?: JsonNullableFilter<"SentimentScore">
    createdAt?: DateTimeFilter<"SentimentScore"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "postId_modelName_analyzedAt">

  export type SentimentScoreOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    label?: SortOrder
    score?: SortOrder
    confidence?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    modelName?: SortOrder
    analyzedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SentimentScoreCountOrderByAggregateInput
    _avg?: SentimentScoreAvgOrderByAggregateInput
    _max?: SentimentScoreMaxOrderByAggregateInput
    _min?: SentimentScoreMinOrderByAggregateInput
    _sum?: SentimentScoreSumOrderByAggregateInput
  }

  export type SentimentScoreScalarWhereWithAggregatesInput = {
    AND?: SentimentScoreScalarWhereWithAggregatesInput | SentimentScoreScalarWhereWithAggregatesInput[]
    OR?: SentimentScoreScalarWhereWithAggregatesInput[]
    NOT?: SentimentScoreScalarWhereWithAggregatesInput | SentimentScoreScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SentimentScore"> | string
    postId?: UuidWithAggregatesFilter<"SentimentScore"> | string
    label?: EnumSentimentLabelWithAggregatesFilter<"SentimentScore"> | $Enums.SentimentLabel
    score?: DecimalWithAggregatesFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string
    confidence?: DecimalNullableWithAggregatesFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string | null
    language?: StringNullableWithAggregatesFilter<"SentimentScore"> | string | null
    provider?: StringNullableWithAggregatesFilter<"SentimentScore"> | string | null
    modelName?: StringWithAggregatesFilter<"SentimentScore"> | string
    analyzedAt?: DateTimeWithAggregatesFilter<"SentimentScore"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"SentimentScore">
    createdAt?: DateTimeWithAggregatesFilter<"SentimentScore"> | Date | string
  }

  export type PlatformCreateInput = {
    id?: string
    name: string
    slug: string
    baseUrl: string
    description?: string | null
    logoUrl?: string | null
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creators?: CreatorCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    baseUrl: string
    description?: string | null
    logoUrl?: string | null
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creators?: CreatorUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportsFollowers?: BoolFieldUpdateOperationsInput | boolean
    supportsLikes?: BoolFieldUpdateOperationsInput | boolean
    supportsComments?: BoolFieldUpdateOperationsInput | boolean
    supportsViews?: BoolFieldUpdateOperationsInput | boolean
    supportsShares?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creators?: CreatorUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportsFollowers?: BoolFieldUpdateOperationsInput | boolean
    supportsLikes?: BoolFieldUpdateOperationsInput | boolean
    supportsComments?: BoolFieldUpdateOperationsInput | boolean
    supportsViews?: BoolFieldUpdateOperationsInput | boolean
    supportsShares?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creators?: CreatorUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformCreateManyInput = {
    id?: string
    name: string
    slug: string
    baseUrl: string
    description?: string | null
    logoUrl?: string | null
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportsFollowers?: BoolFieldUpdateOperationsInput | boolean
    supportsLikes?: BoolFieldUpdateOperationsInput | boolean
    supportsComments?: BoolFieldUpdateOperationsInput | boolean
    supportsViews?: BoolFieldUpdateOperationsInput | boolean
    supportsShares?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportsFollowers?: BoolFieldUpdateOperationsInput | boolean
    supportsLikes?: BoolFieldUpdateOperationsInput | boolean
    supportsComments?: BoolFieldUpdateOperationsInput | boolean
    supportsViews?: BoolFieldUpdateOperationsInput | boolean
    supportsShares?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorCreateInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platform: PlatformCreateNestedOneWithoutCreatorsInput
    posts?: PostCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateInput = {
    id?: string
    platformId: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsUncheckedCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutCreatorsNestedInput
    posts?: PostUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUncheckedUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorCreateManyInput = {
    id?: string
    platformId: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutPostsInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutPostInput
    sentimentScores?: SentimentScoreCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    creatorId: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutPostInput
    sentimentScores?: SentimentScoreUncheckedCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutPostsNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutPostNestedInput
    sentimentScores?: SentimentScoreUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutPostNestedInput
    sentimentScores?: SentimentScoreUncheckedUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    creatorId: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotCreateInput = {
    id?: string
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creator: CreatorCreateNestedOneWithoutMetricSnapshotsInput
    post?: PostCreateNestedOneWithoutMetricSnapshotsInput
  }

  export type MetricSnapshotUncheckedCreateInput = {
    id?: string
    creatorId: string
    postId?: string | null
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutMetricSnapshotsNestedInput
    post?: PostUpdateOneWithoutMetricSnapshotsNestedInput
  }

  export type MetricSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotCreateManyInput = {
    id?: string
    creatorId: string
    postId?: string | null
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementStatsCreateInput = {
    id?: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
    periodEnd: Date | string
    totalPosts?: number
    totalLikes?: bigint | number
    totalComments?: bigint | number
    totalViews?: bigint | number
    totalShares?: bigint | number
    averageLikes?: Decimal | DecimalJsLike | number | string | null
    averageComments?: Decimal | DecimalJsLike | number | string | null
    averageViews?: Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: Decimal | DecimalJsLike | number | string
    calculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutEngagementStatsInput
  }

  export type EngagementStatsUncheckedCreateInput = {
    id?: string
    creatorId: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
    periodEnd: Date | string
    totalPosts?: number
    totalLikes?: bigint | number
    totalComments?: bigint | number
    totalViews?: bigint | number
    totalShares?: bigint | number
    averageLikes?: Decimal | DecimalJsLike | number | string | null
    averageComments?: Decimal | DecimalJsLike | number | string | null
    averageViews?: Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: Decimal | DecimalJsLike | number | string
    calculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutEngagementStatsNestedInput
  }

  export type EngagementStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementStatsCreateManyInput = {
    id?: string
    creatorId: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
    periodEnd: Date | string
    totalPosts?: number
    totalLikes?: bigint | number
    totalComments?: bigint | number
    totalViews?: bigint | number
    totalShares?: bigint | number
    averageLikes?: Decimal | DecimalJsLike | number | string | null
    averageComments?: Decimal | DecimalJsLike | number | string | null
    averageViews?: Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: Decimal | DecimalJsLike | number | string
    calculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventCreateInput = {
    id?: string
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutAnomalyEventsInput
    post?: PostCreateNestedOneWithoutAnomalyEventsInput
  }

  export type AnomalyEventUncheckedCreateInput = {
    id?: string
    creatorId: string
    postId?: string | null
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutAnomalyEventsNestedInput
    post?: PostUpdateOneWithoutAnomalyEventsNestedInput
  }

  export type AnomalyEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventCreateManyInput = {
    id?: string
    creatorId: string
    postId?: string | null
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreCreateInput = {
    id?: string
    label: $Enums.SentimentLabel
    score: Decimal | DecimalJsLike | number | string
    confidence?: Decimal | DecimalJsLike | number | string | null
    language?: string | null
    provider?: string | null
    modelName: string
    analyzedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutSentimentScoresInput
  }

  export type SentimentScoreUncheckedCreateInput = {
    id?: string
    postId: string
    label: $Enums.SentimentLabel
    score: Decimal | DecimalJsLike | number | string
    confidence?: Decimal | DecimalJsLike | number | string | null
    language?: string | null
    provider?: string | null
    modelName: string
    analyzedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SentimentScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSentimentScoresNestedInput
  }

  export type SentimentScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreCreateManyInput = {
    id?: string
    postId: string
    label: $Enums.SentimentLabel
    score: Decimal | DecimalJsLike | number | string
    confidence?: Decimal | DecimalJsLike | number | string | null
    language?: string | null
    provider?: string | null
    modelName: string
    analyzedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SentimentScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CreatorListRelationFilter = {
    every?: CreatorWhereInput
    some?: CreatorWhereInput
    none?: CreatorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CreatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    baseUrl?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    supportsFollowers?: SortOrder
    supportsLikes?: SortOrder
    supportsComments?: SortOrder
    supportsViews?: SortOrder
    supportsShares?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    baseUrl?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    supportsFollowers?: SortOrder
    supportsLikes?: SortOrder
    supportsComments?: SortOrder
    supportsViews?: SortOrder
    supportsShares?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    baseUrl?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    supportsFollowers?: SortOrder
    supportsLikes?: SortOrder
    supportsComments?: SortOrder
    supportsViews?: SortOrder
    supportsShares?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PlatformScalarRelationFilter = {
    is?: PlatformWhereInput
    isNot?: PlatformWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type MetricSnapshotListRelationFilter = {
    every?: MetricSnapshotWhereInput
    some?: MetricSnapshotWhereInput
    none?: MetricSnapshotWhereInput
  }

  export type EngagementStatsListRelationFilter = {
    every?: EngagementStatsWhereInput
    some?: EngagementStatsWhereInput
    none?: EngagementStatsWhereInput
  }

  export type AnomalyEventListRelationFilter = {
    every?: AnomalyEventWhereInput
    some?: AnomalyEventWhereInput
    none?: AnomalyEventWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngagementStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnomalyEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreatorPlatformIdExternalIdCompoundUniqueInput = {
    platformId: string
    externalId: string
  }

  export type CreatorPlatformIdUsernameCompoundUniqueInput = {
    platformId: string
    username: string
  }

  export type CreatorCountOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    externalId?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    profileUrl?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorMaxOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    externalId?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    profileUrl?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreatorMinOrderByAggregateInput = {
    id?: SortOrder
    platformId?: SortOrder
    externalId?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    profileUrl?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type CreatorScalarRelationFilter = {
    is?: CreatorWhereInput
    isNot?: CreatorWhereInput
  }

  export type SentimentScoreListRelationFilter = {
    every?: SentimentScoreWhereInput
    some?: SentimentScoreWhereInput
    none?: SentimentScoreWhereInput
  }

  export type SentimentScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCreatorIdExternalIdCompoundUniqueInput = {
    creatorId: string
    externalId: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    externalId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    externalId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    externalId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type MetricSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrder
    followerCount?: SortOrder
    followingCount?: SortOrder
    postCount?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    engagementRate?: SortOrder
    capturedAt?: SortOrder
    source?: SortOrder
    rawMetrics?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricSnapshotAvgOrderByAggregateInput = {
    followerCount?: SortOrder
    followingCount?: SortOrder
    postCount?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    engagementRate?: SortOrder
  }

  export type MetricSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrder
    followerCount?: SortOrder
    followingCount?: SortOrder
    postCount?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    engagementRate?: SortOrder
    capturedAt?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrder
    followerCount?: SortOrder
    followingCount?: SortOrder
    postCount?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    engagementRate?: SortOrder
    capturedAt?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricSnapshotSumOrderByAggregateInput = {
    followerCount?: SortOrder
    followingCount?: SortOrder
    postCount?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    engagementRate?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumAnalyticsPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsPeriod | EnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsPeriodFilter<$PrismaModel> | $Enums.AnalyticsPeriod
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EngagementStatsCreatorIdPeriodTypePeriodStartCompoundUniqueInput = {
    creatorId: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
  }

  export type EngagementStatsCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    periodType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrder
    averageComments?: SortOrder
    averageViews?: SortOrder
    averageEngagementRate?: SortOrder
    calculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngagementStatsAvgOrderByAggregateInput = {
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrder
    averageComments?: SortOrder
    averageViews?: SortOrder
    averageEngagementRate?: SortOrder
  }

  export type EngagementStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    periodType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrder
    averageComments?: SortOrder
    averageViews?: SortOrder
    averageEngagementRate?: SortOrder
    calculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngagementStatsMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    periodType?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrder
    averageComments?: SortOrder
    averageViews?: SortOrder
    averageEngagementRate?: SortOrder
    calculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngagementStatsSumOrderByAggregateInput = {
    totalPosts?: SortOrder
    totalLikes?: SortOrder
    totalComments?: SortOrder
    totalViews?: SortOrder
    totalShares?: SortOrder
    averageLikes?: SortOrder
    averageComments?: SortOrder
    averageViews?: SortOrder
    averageEngagementRate?: SortOrder
  }

  export type EnumAnalyticsPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsPeriod | EnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsPeriodWithAggregatesFilter<$PrismaModel> | $Enums.AnalyticsPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalyticsPeriodFilter<$PrismaModel>
    _max?: NestedEnumAnalyticsPeriodFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumAnomalySeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalySeverity | EnumAnomalySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalySeverityFilter<$PrismaModel> | $Enums.AnomalySeverity
  }

  export type EnumAnomalyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalyStatus | EnumAnomalyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalyStatusFilter<$PrismaModel> | $Enums.AnomalyStatus
  }

  export type AnomalyEventCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    metricName?: SortOrder
    expectedValue?: SortOrder
    observedValue?: SortOrder
    changePercent?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnomalyEventAvgOrderByAggregateInput = {
    expectedValue?: SortOrder
    observedValue?: SortOrder
    changePercent?: SortOrder
  }

  export type AnomalyEventMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    metricName?: SortOrder
    expectedValue?: SortOrder
    observedValue?: SortOrder
    changePercent?: SortOrder
    description?: SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnomalyEventMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    postId?: SortOrder
    eventType?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    metricName?: SortOrder
    expectedValue?: SortOrder
    observedValue?: SortOrder
    changePercent?: SortOrder
    description?: SortOrder
    detectedAt?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnomalyEventSumOrderByAggregateInput = {
    expectedValue?: SortOrder
    observedValue?: SortOrder
    changePercent?: SortOrder
  }

  export type EnumAnomalySeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalySeverity | EnumAnomalySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalySeverityWithAggregatesFilter<$PrismaModel> | $Enums.AnomalySeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnomalySeverityFilter<$PrismaModel>
    _max?: NestedEnumAnomalySeverityFilter<$PrismaModel>
  }

  export type EnumAnomalyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalyStatus | EnumAnomalyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalyStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnomalyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnomalyStatusFilter<$PrismaModel>
    _max?: NestedEnumAnomalyStatusFilter<$PrismaModel>
  }

  export type EnumSentimentLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelFilter<$PrismaModel> | $Enums.SentimentLabel
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type SentimentScorePostIdModelNameAnalyzedAtCompoundUniqueInput = {
    postId: string
    modelName: string
    analyzedAt: Date | string
  }

  export type SentimentScoreCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    label?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    language?: SortOrder
    provider?: SortOrder
    modelName?: SortOrder
    analyzedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type SentimentScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    confidence?: SortOrder
  }

  export type SentimentScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    label?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    language?: SortOrder
    provider?: SortOrder
    modelName?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SentimentScoreMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    label?: SortOrder
    score?: SortOrder
    confidence?: SortOrder
    language?: SortOrder
    provider?: SortOrder
    modelName?: SortOrder
    analyzedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SentimentScoreSumOrderByAggregateInput = {
    score?: SortOrder
    confidence?: SortOrder
  }

  export type EnumSentimentLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelWithAggregatesFilter<$PrismaModel> | $Enums.SentimentLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentLabelFilter<$PrismaModel>
    _max?: NestedEnumSentimentLabelFilter<$PrismaModel>
  }

  export type CreatorCreateNestedManyWithoutPlatformInput = {
    create?: XOR<CreatorCreateWithoutPlatformInput, CreatorUncheckedCreateWithoutPlatformInput> | CreatorCreateWithoutPlatformInput[] | CreatorUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutPlatformInput | CreatorCreateOrConnectWithoutPlatformInput[]
    createMany?: CreatorCreateManyPlatformInputEnvelope
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
  }

  export type CreatorUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<CreatorCreateWithoutPlatformInput, CreatorUncheckedCreateWithoutPlatformInput> | CreatorCreateWithoutPlatformInput[] | CreatorUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutPlatformInput | CreatorCreateOrConnectWithoutPlatformInput[]
    createMany?: CreatorCreateManyPlatformInputEnvelope
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CreatorUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<CreatorCreateWithoutPlatformInput, CreatorUncheckedCreateWithoutPlatformInput> | CreatorCreateWithoutPlatformInput[] | CreatorUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutPlatformInput | CreatorCreateOrConnectWithoutPlatformInput[]
    upsert?: CreatorUpsertWithWhereUniqueWithoutPlatformInput | CreatorUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: CreatorCreateManyPlatformInputEnvelope
    set?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    disconnect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    delete?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    update?: CreatorUpdateWithWhereUniqueWithoutPlatformInput | CreatorUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: CreatorUpdateManyWithWhereWithoutPlatformInput | CreatorUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
  }

  export type CreatorUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<CreatorCreateWithoutPlatformInput, CreatorUncheckedCreateWithoutPlatformInput> | CreatorCreateWithoutPlatformInput[] | CreatorUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutPlatformInput | CreatorCreateOrConnectWithoutPlatformInput[]
    upsert?: CreatorUpsertWithWhereUniqueWithoutPlatformInput | CreatorUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: CreatorCreateManyPlatformInputEnvelope
    set?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    disconnect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    delete?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    update?: CreatorUpdateWithWhereUniqueWithoutPlatformInput | CreatorUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: CreatorUpdateManyWithWhereWithoutPlatformInput | CreatorUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
  }

  export type PlatformCreateNestedOneWithoutCreatorsInput = {
    create?: XOR<PlatformCreateWithoutCreatorsInput, PlatformUncheckedCreateWithoutCreatorsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutCreatorsInput
    connect?: PlatformWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PostCreateWithoutCreatorInput, PostUncheckedCreateWithoutCreatorInput> | PostCreateWithoutCreatorInput[] | PostUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatorInput | PostCreateOrConnectWithoutCreatorInput[]
    createMany?: PostCreateManyCreatorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type MetricSnapshotCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MetricSnapshotCreateWithoutCreatorInput, MetricSnapshotUncheckedCreateWithoutCreatorInput> | MetricSnapshotCreateWithoutCreatorInput[] | MetricSnapshotUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutCreatorInput | MetricSnapshotCreateOrConnectWithoutCreatorInput[]
    createMany?: MetricSnapshotCreateManyCreatorInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type EngagementStatsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EngagementStatsCreateWithoutCreatorInput, EngagementStatsUncheckedCreateWithoutCreatorInput> | EngagementStatsCreateWithoutCreatorInput[] | EngagementStatsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EngagementStatsCreateOrConnectWithoutCreatorInput | EngagementStatsCreateOrConnectWithoutCreatorInput[]
    createMany?: EngagementStatsCreateManyCreatorInputEnvelope
    connect?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
  }

  export type AnomalyEventCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AnomalyEventCreateWithoutCreatorInput, AnomalyEventUncheckedCreateWithoutCreatorInput> | AnomalyEventCreateWithoutCreatorInput[] | AnomalyEventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutCreatorInput | AnomalyEventCreateOrConnectWithoutCreatorInput[]
    createMany?: AnomalyEventCreateManyCreatorInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PostCreateWithoutCreatorInput, PostUncheckedCreateWithoutCreatorInput> | PostCreateWithoutCreatorInput[] | PostUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatorInput | PostCreateOrConnectWithoutCreatorInput[]
    createMany?: PostCreateManyCreatorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type MetricSnapshotUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MetricSnapshotCreateWithoutCreatorInput, MetricSnapshotUncheckedCreateWithoutCreatorInput> | MetricSnapshotCreateWithoutCreatorInput[] | MetricSnapshotUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutCreatorInput | MetricSnapshotCreateOrConnectWithoutCreatorInput[]
    createMany?: MetricSnapshotCreateManyCreatorInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type EngagementStatsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EngagementStatsCreateWithoutCreatorInput, EngagementStatsUncheckedCreateWithoutCreatorInput> | EngagementStatsCreateWithoutCreatorInput[] | EngagementStatsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EngagementStatsCreateOrConnectWithoutCreatorInput | EngagementStatsCreateOrConnectWithoutCreatorInput[]
    createMany?: EngagementStatsCreateManyCreatorInputEnvelope
    connect?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
  }

  export type AnomalyEventUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AnomalyEventCreateWithoutCreatorInput, AnomalyEventUncheckedCreateWithoutCreatorInput> | AnomalyEventCreateWithoutCreatorInput[] | AnomalyEventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutCreatorInput | AnomalyEventCreateOrConnectWithoutCreatorInput[]
    createMany?: AnomalyEventCreateManyCreatorInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PlatformUpdateOneRequiredWithoutCreatorsNestedInput = {
    create?: XOR<PlatformCreateWithoutCreatorsInput, PlatformUncheckedCreateWithoutCreatorsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutCreatorsInput
    upsert?: PlatformUpsertWithoutCreatorsInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutCreatorsInput, PlatformUpdateWithoutCreatorsInput>, PlatformUncheckedUpdateWithoutCreatorsInput>
  }

  export type PostUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PostCreateWithoutCreatorInput, PostUncheckedCreateWithoutCreatorInput> | PostCreateWithoutCreatorInput[] | PostUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatorInput | PostCreateOrConnectWithoutCreatorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatorInput | PostUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PostCreateManyCreatorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatorInput | PostUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatorInput | PostUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type MetricSnapshotUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutCreatorInput, MetricSnapshotUncheckedCreateWithoutCreatorInput> | MetricSnapshotCreateWithoutCreatorInput[] | MetricSnapshotUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutCreatorInput | MetricSnapshotCreateOrConnectWithoutCreatorInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutCreatorInput | MetricSnapshotUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MetricSnapshotCreateManyCreatorInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutCreatorInput | MetricSnapshotUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutCreatorInput | MetricSnapshotUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type EngagementStatsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EngagementStatsCreateWithoutCreatorInput, EngagementStatsUncheckedCreateWithoutCreatorInput> | EngagementStatsCreateWithoutCreatorInput[] | EngagementStatsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EngagementStatsCreateOrConnectWithoutCreatorInput | EngagementStatsCreateOrConnectWithoutCreatorInput[]
    upsert?: EngagementStatsUpsertWithWhereUniqueWithoutCreatorInput | EngagementStatsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EngagementStatsCreateManyCreatorInputEnvelope
    set?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    disconnect?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    delete?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    connect?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    update?: EngagementStatsUpdateWithWhereUniqueWithoutCreatorInput | EngagementStatsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EngagementStatsUpdateManyWithWhereWithoutCreatorInput | EngagementStatsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EngagementStatsScalarWhereInput | EngagementStatsScalarWhereInput[]
  }

  export type AnomalyEventUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutCreatorInput, AnomalyEventUncheckedCreateWithoutCreatorInput> | AnomalyEventCreateWithoutCreatorInput[] | AnomalyEventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutCreatorInput | AnomalyEventCreateOrConnectWithoutCreatorInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutCreatorInput | AnomalyEventUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AnomalyEventCreateManyCreatorInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutCreatorInput | AnomalyEventUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutCreatorInput | AnomalyEventUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PostCreateWithoutCreatorInput, PostUncheckedCreateWithoutCreatorInput> | PostCreateWithoutCreatorInput[] | PostUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatorInput | PostCreateOrConnectWithoutCreatorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatorInput | PostUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PostCreateManyCreatorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatorInput | PostUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatorInput | PostUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutCreatorInput, MetricSnapshotUncheckedCreateWithoutCreatorInput> | MetricSnapshotCreateWithoutCreatorInput[] | MetricSnapshotUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutCreatorInput | MetricSnapshotCreateOrConnectWithoutCreatorInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutCreatorInput | MetricSnapshotUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MetricSnapshotCreateManyCreatorInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutCreatorInput | MetricSnapshotUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutCreatorInput | MetricSnapshotUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type EngagementStatsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EngagementStatsCreateWithoutCreatorInput, EngagementStatsUncheckedCreateWithoutCreatorInput> | EngagementStatsCreateWithoutCreatorInput[] | EngagementStatsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EngagementStatsCreateOrConnectWithoutCreatorInput | EngagementStatsCreateOrConnectWithoutCreatorInput[]
    upsert?: EngagementStatsUpsertWithWhereUniqueWithoutCreatorInput | EngagementStatsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EngagementStatsCreateManyCreatorInputEnvelope
    set?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    disconnect?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    delete?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    connect?: EngagementStatsWhereUniqueInput | EngagementStatsWhereUniqueInput[]
    update?: EngagementStatsUpdateWithWhereUniqueWithoutCreatorInput | EngagementStatsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EngagementStatsUpdateManyWithWhereWithoutCreatorInput | EngagementStatsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EngagementStatsScalarWhereInput | EngagementStatsScalarWhereInput[]
  }

  export type AnomalyEventUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutCreatorInput, AnomalyEventUncheckedCreateWithoutCreatorInput> | AnomalyEventCreateWithoutCreatorInput[] | AnomalyEventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutCreatorInput | AnomalyEventCreateOrConnectWithoutCreatorInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutCreatorInput | AnomalyEventUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AnomalyEventCreateManyCreatorInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutCreatorInput | AnomalyEventUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutCreatorInput | AnomalyEventUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type CreatorCreateNestedOneWithoutPostsInput = {
    create?: XOR<CreatorCreateWithoutPostsInput, CreatorUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutPostsInput
    connect?: CreatorWhereUniqueInput
  }

  export type MetricSnapshotCreateNestedManyWithoutPostInput = {
    create?: XOR<MetricSnapshotCreateWithoutPostInput, MetricSnapshotUncheckedCreateWithoutPostInput> | MetricSnapshotCreateWithoutPostInput[] | MetricSnapshotUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutPostInput | MetricSnapshotCreateOrConnectWithoutPostInput[]
    createMany?: MetricSnapshotCreateManyPostInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type SentimentScoreCreateNestedManyWithoutPostInput = {
    create?: XOR<SentimentScoreCreateWithoutPostInput, SentimentScoreUncheckedCreateWithoutPostInput> | SentimentScoreCreateWithoutPostInput[] | SentimentScoreUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutPostInput | SentimentScoreCreateOrConnectWithoutPostInput[]
    createMany?: SentimentScoreCreateManyPostInputEnvelope
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
  }

  export type AnomalyEventCreateNestedManyWithoutPostInput = {
    create?: XOR<AnomalyEventCreateWithoutPostInput, AnomalyEventUncheckedCreateWithoutPostInput> | AnomalyEventCreateWithoutPostInput[] | AnomalyEventUncheckedCreateWithoutPostInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutPostInput | AnomalyEventCreateOrConnectWithoutPostInput[]
    createMany?: AnomalyEventCreateManyPostInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type MetricSnapshotUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<MetricSnapshotCreateWithoutPostInput, MetricSnapshotUncheckedCreateWithoutPostInput> | MetricSnapshotCreateWithoutPostInput[] | MetricSnapshotUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutPostInput | MetricSnapshotCreateOrConnectWithoutPostInput[]
    createMany?: MetricSnapshotCreateManyPostInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type SentimentScoreUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SentimentScoreCreateWithoutPostInput, SentimentScoreUncheckedCreateWithoutPostInput> | SentimentScoreCreateWithoutPostInput[] | SentimentScoreUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutPostInput | SentimentScoreCreateOrConnectWithoutPostInput[]
    createMany?: SentimentScoreCreateManyPostInputEnvelope
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
  }

  export type AnomalyEventUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<AnomalyEventCreateWithoutPostInput, AnomalyEventUncheckedCreateWithoutPostInput> | AnomalyEventCreateWithoutPostInput[] | AnomalyEventUncheckedCreateWithoutPostInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutPostInput | AnomalyEventCreateOrConnectWithoutPostInput[]
    createMany?: AnomalyEventCreateManyPostInputEnvelope
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType
  }

  export type CreatorUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CreatorCreateWithoutPostsInput, CreatorUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutPostsInput
    upsert?: CreatorUpsertWithoutPostsInput
    connect?: CreatorWhereUniqueInput
    update?: XOR<XOR<CreatorUpdateToOneWithWhereWithoutPostsInput, CreatorUpdateWithoutPostsInput>, CreatorUncheckedUpdateWithoutPostsInput>
  }

  export type MetricSnapshotUpdateManyWithoutPostNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutPostInput, MetricSnapshotUncheckedCreateWithoutPostInput> | MetricSnapshotCreateWithoutPostInput[] | MetricSnapshotUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutPostInput | MetricSnapshotCreateOrConnectWithoutPostInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutPostInput | MetricSnapshotUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: MetricSnapshotCreateManyPostInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutPostInput | MetricSnapshotUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutPostInput | MetricSnapshotUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type SentimentScoreUpdateManyWithoutPostNestedInput = {
    create?: XOR<SentimentScoreCreateWithoutPostInput, SentimentScoreUncheckedCreateWithoutPostInput> | SentimentScoreCreateWithoutPostInput[] | SentimentScoreUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutPostInput | SentimentScoreCreateOrConnectWithoutPostInput[]
    upsert?: SentimentScoreUpsertWithWhereUniqueWithoutPostInput | SentimentScoreUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SentimentScoreCreateManyPostInputEnvelope
    set?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    disconnect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    delete?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    update?: SentimentScoreUpdateWithWhereUniqueWithoutPostInput | SentimentScoreUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SentimentScoreUpdateManyWithWhereWithoutPostInput | SentimentScoreUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
  }

  export type AnomalyEventUpdateManyWithoutPostNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutPostInput, AnomalyEventUncheckedCreateWithoutPostInput> | AnomalyEventCreateWithoutPostInput[] | AnomalyEventUncheckedCreateWithoutPostInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutPostInput | AnomalyEventCreateOrConnectWithoutPostInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutPostInput | AnomalyEventUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: AnomalyEventCreateManyPostInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutPostInput | AnomalyEventUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutPostInput | AnomalyEventUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutPostInput, MetricSnapshotUncheckedCreateWithoutPostInput> | MetricSnapshotCreateWithoutPostInput[] | MetricSnapshotUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutPostInput | MetricSnapshotCreateOrConnectWithoutPostInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutPostInput | MetricSnapshotUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: MetricSnapshotCreateManyPostInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutPostInput | MetricSnapshotUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutPostInput | MetricSnapshotUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type SentimentScoreUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SentimentScoreCreateWithoutPostInput, SentimentScoreUncheckedCreateWithoutPostInput> | SentimentScoreCreateWithoutPostInput[] | SentimentScoreUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SentimentScoreCreateOrConnectWithoutPostInput | SentimentScoreCreateOrConnectWithoutPostInput[]
    upsert?: SentimentScoreUpsertWithWhereUniqueWithoutPostInput | SentimentScoreUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SentimentScoreCreateManyPostInputEnvelope
    set?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    disconnect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    delete?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    connect?: SentimentScoreWhereUniqueInput | SentimentScoreWhereUniqueInput[]
    update?: SentimentScoreUpdateWithWhereUniqueWithoutPostInput | SentimentScoreUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SentimentScoreUpdateManyWithWhereWithoutPostInput | SentimentScoreUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
  }

  export type AnomalyEventUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<AnomalyEventCreateWithoutPostInput, AnomalyEventUncheckedCreateWithoutPostInput> | AnomalyEventCreateWithoutPostInput[] | AnomalyEventUncheckedCreateWithoutPostInput[]
    connectOrCreate?: AnomalyEventCreateOrConnectWithoutPostInput | AnomalyEventCreateOrConnectWithoutPostInput[]
    upsert?: AnomalyEventUpsertWithWhereUniqueWithoutPostInput | AnomalyEventUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: AnomalyEventCreateManyPostInputEnvelope
    set?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    disconnect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    delete?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    connect?: AnomalyEventWhereUniqueInput | AnomalyEventWhereUniqueInput[]
    update?: AnomalyEventUpdateWithWhereUniqueWithoutPostInput | AnomalyEventUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: AnomalyEventUpdateManyWithWhereWithoutPostInput | AnomalyEventUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
  }

  export type CreatorCreateNestedOneWithoutMetricSnapshotsInput = {
    create?: XOR<CreatorCreateWithoutMetricSnapshotsInput, CreatorUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutMetricSnapshotsInput
    connect?: CreatorWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutMetricSnapshotsInput = {
    create?: XOR<PostCreateWithoutMetricSnapshotsInput, PostUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: PostCreateOrConnectWithoutMetricSnapshotsInput
    connect?: PostWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CreatorUpdateOneRequiredWithoutMetricSnapshotsNestedInput = {
    create?: XOR<CreatorCreateWithoutMetricSnapshotsInput, CreatorUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutMetricSnapshotsInput
    upsert?: CreatorUpsertWithoutMetricSnapshotsInput
    connect?: CreatorWhereUniqueInput
    update?: XOR<XOR<CreatorUpdateToOneWithWhereWithoutMetricSnapshotsInput, CreatorUpdateWithoutMetricSnapshotsInput>, CreatorUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type PostUpdateOneWithoutMetricSnapshotsNestedInput = {
    create?: XOR<PostCreateWithoutMetricSnapshotsInput, PostUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: PostCreateOrConnectWithoutMetricSnapshotsInput
    upsert?: PostUpsertWithoutMetricSnapshotsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutMetricSnapshotsInput, PostUpdateWithoutMetricSnapshotsInput>, PostUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type CreatorCreateNestedOneWithoutEngagementStatsInput = {
    create?: XOR<CreatorCreateWithoutEngagementStatsInput, CreatorUncheckedCreateWithoutEngagementStatsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutEngagementStatsInput
    connect?: CreatorWhereUniqueInput
  }

  export type EnumAnalyticsPeriodFieldUpdateOperationsInput = {
    set?: $Enums.AnalyticsPeriod
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CreatorUpdateOneRequiredWithoutEngagementStatsNestedInput = {
    create?: XOR<CreatorCreateWithoutEngagementStatsInput, CreatorUncheckedCreateWithoutEngagementStatsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutEngagementStatsInput
    upsert?: CreatorUpsertWithoutEngagementStatsInput
    connect?: CreatorWhereUniqueInput
    update?: XOR<XOR<CreatorUpdateToOneWithWhereWithoutEngagementStatsInput, CreatorUpdateWithoutEngagementStatsInput>, CreatorUncheckedUpdateWithoutEngagementStatsInput>
  }

  export type CreatorCreateNestedOneWithoutAnomalyEventsInput = {
    create?: XOR<CreatorCreateWithoutAnomalyEventsInput, CreatorUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutAnomalyEventsInput
    connect?: CreatorWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutAnomalyEventsInput = {
    create?: XOR<PostCreateWithoutAnomalyEventsInput, PostUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: PostCreateOrConnectWithoutAnomalyEventsInput
    connect?: PostWhereUniqueInput
  }

  export type EnumAnomalySeverityFieldUpdateOperationsInput = {
    set?: $Enums.AnomalySeverity
  }

  export type EnumAnomalyStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnomalyStatus
  }

  export type CreatorUpdateOneRequiredWithoutAnomalyEventsNestedInput = {
    create?: XOR<CreatorCreateWithoutAnomalyEventsInput, CreatorUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutAnomalyEventsInput
    upsert?: CreatorUpsertWithoutAnomalyEventsInput
    connect?: CreatorWhereUniqueInput
    update?: XOR<XOR<CreatorUpdateToOneWithWhereWithoutAnomalyEventsInput, CreatorUpdateWithoutAnomalyEventsInput>, CreatorUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type PostUpdateOneWithoutAnomalyEventsNestedInput = {
    create?: XOR<PostCreateWithoutAnomalyEventsInput, PostUncheckedCreateWithoutAnomalyEventsInput>
    connectOrCreate?: PostCreateOrConnectWithoutAnomalyEventsInput
    upsert?: PostUpsertWithoutAnomalyEventsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutAnomalyEventsInput, PostUpdateWithoutAnomalyEventsInput>, PostUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type PostCreateNestedOneWithoutSentimentScoresInput = {
    create?: XOR<PostCreateWithoutSentimentScoresInput, PostUncheckedCreateWithoutSentimentScoresInput>
    connectOrCreate?: PostCreateOrConnectWithoutSentimentScoresInput
    connect?: PostWhereUniqueInput
  }

  export type EnumSentimentLabelFieldUpdateOperationsInput = {
    set?: $Enums.SentimentLabel
  }

  export type PostUpdateOneRequiredWithoutSentimentScoresNestedInput = {
    create?: XOR<PostCreateWithoutSentimentScoresInput, PostUncheckedCreateWithoutSentimentScoresInput>
    connectOrCreate?: PostCreateOrConnectWithoutSentimentScoresInput
    upsert?: PostUpsertWithoutSentimentScoresInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSentimentScoresInput, PostUpdateWithoutSentimentScoresInput>, PostUncheckedUpdateWithoutSentimentScoresInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAnalyticsPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsPeriod | EnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsPeriodFilter<$PrismaModel> | $Enums.AnalyticsPeriod
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumAnalyticsPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalyticsPeriod | EnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalyticsPeriod[] | ListEnumAnalyticsPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalyticsPeriodWithAggregatesFilter<$PrismaModel> | $Enums.AnalyticsPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalyticsPeriodFilter<$PrismaModel>
    _max?: NestedEnumAnalyticsPeriodFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAnomalySeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalySeverity | EnumAnomalySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalySeverityFilter<$PrismaModel> | $Enums.AnomalySeverity
  }

  export type NestedEnumAnomalyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalyStatus | EnumAnomalyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalyStatusFilter<$PrismaModel> | $Enums.AnomalyStatus
  }

  export type NestedEnumAnomalySeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalySeverity | EnumAnomalySeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalySeverity[] | ListEnumAnomalySeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalySeverityWithAggregatesFilter<$PrismaModel> | $Enums.AnomalySeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnomalySeverityFilter<$PrismaModel>
    _max?: NestedEnumAnomalySeverityFilter<$PrismaModel>
  }

  export type NestedEnumAnomalyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnomalyStatus | EnumAnomalyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnomalyStatus[] | ListEnumAnomalyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnomalyStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnomalyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnomalyStatusFilter<$PrismaModel>
    _max?: NestedEnumAnomalyStatusFilter<$PrismaModel>
  }

  export type NestedEnumSentimentLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelFilter<$PrismaModel> | $Enums.SentimentLabel
  }

  export type NestedEnumSentimentLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentimentLabel | EnumSentimentLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentimentLabel[] | ListEnumSentimentLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSentimentLabelWithAggregatesFilter<$PrismaModel> | $Enums.SentimentLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentimentLabelFilter<$PrismaModel>
    _max?: NestedEnumSentimentLabelFilter<$PrismaModel>
  }

  export type CreatorCreateWithoutPlatformInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateWithoutPlatformInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsUncheckedCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutPlatformInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutPlatformInput, CreatorUncheckedCreateWithoutPlatformInput>
  }

  export type CreatorCreateManyPlatformInputEnvelope = {
    data: CreatorCreateManyPlatformInput | CreatorCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type CreatorUpsertWithWhereUniqueWithoutPlatformInput = {
    where: CreatorWhereUniqueInput
    update: XOR<CreatorUpdateWithoutPlatformInput, CreatorUncheckedUpdateWithoutPlatformInput>
    create: XOR<CreatorCreateWithoutPlatformInput, CreatorUncheckedCreateWithoutPlatformInput>
  }

  export type CreatorUpdateWithWhereUniqueWithoutPlatformInput = {
    where: CreatorWhereUniqueInput
    data: XOR<CreatorUpdateWithoutPlatformInput, CreatorUncheckedUpdateWithoutPlatformInput>
  }

  export type CreatorUpdateManyWithWhereWithoutPlatformInput = {
    where: CreatorScalarWhereInput
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyWithoutPlatformInput>
  }

  export type CreatorScalarWhereInput = {
    AND?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
    OR?: CreatorScalarWhereInput[]
    NOT?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
    id?: UuidFilter<"Creator"> | string
    platformId?: UuidFilter<"Creator"> | string
    externalId?: StringFilter<"Creator"> | string
    username?: StringNullableFilter<"Creator"> | string | null
    displayName?: StringNullableFilter<"Creator"> | string | null
    profileUrl?: StringNullableFilter<"Creator"> | string | null
    bio?: StringNullableFilter<"Creator"> | string | null
    avatarUrl?: StringNullableFilter<"Creator"> | string | null
    isVerified?: BoolFilter<"Creator"> | boolean
    isActive?: BoolFilter<"Creator"> | boolean
    firstSeenAt?: DateTimeFilter<"Creator"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Creator"> | Date | string | null
    createdAt?: DateTimeFilter<"Creator"> | Date | string
    updatedAt?: DateTimeFilter<"Creator"> | Date | string
  }

  export type PlatformCreateWithoutCreatorsInput = {
    id?: string
    name: string
    slug: string
    baseUrl: string
    description?: string | null
    logoUrl?: string | null
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUncheckedCreateWithoutCreatorsInput = {
    id?: string
    name: string
    slug: string
    baseUrl: string
    description?: string | null
    logoUrl?: string | null
    supportsFollowers?: boolean
    supportsLikes?: boolean
    supportsComments?: boolean
    supportsViews?: boolean
    supportsShares?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformCreateOrConnectWithoutCreatorsInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutCreatorsInput, PlatformUncheckedCreateWithoutCreatorsInput>
  }

  export type PostCreateWithoutCreatorInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutPostInput
    sentimentScores?: SentimentScoreCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCreatorInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutPostInput
    sentimentScores?: SentimentScoreUncheckedCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCreatorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatorInput, PostUncheckedCreateWithoutCreatorInput>
  }

  export type PostCreateManyCreatorInputEnvelope = {
    data: PostCreateManyCreatorInput | PostCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MetricSnapshotCreateWithoutCreatorInput = {
    id?: string
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutMetricSnapshotsInput
  }

  export type MetricSnapshotUncheckedCreateWithoutCreatorInput = {
    id?: string
    postId?: string | null
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotCreateOrConnectWithoutCreatorInput = {
    where: MetricSnapshotWhereUniqueInput
    create: XOR<MetricSnapshotCreateWithoutCreatorInput, MetricSnapshotUncheckedCreateWithoutCreatorInput>
  }

  export type MetricSnapshotCreateManyCreatorInputEnvelope = {
    data: MetricSnapshotCreateManyCreatorInput | MetricSnapshotCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EngagementStatsCreateWithoutCreatorInput = {
    id?: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
    periodEnd: Date | string
    totalPosts?: number
    totalLikes?: bigint | number
    totalComments?: bigint | number
    totalViews?: bigint | number
    totalShares?: bigint | number
    averageLikes?: Decimal | DecimalJsLike | number | string | null
    averageComments?: Decimal | DecimalJsLike | number | string | null
    averageViews?: Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: Decimal | DecimalJsLike | number | string
    calculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementStatsUncheckedCreateWithoutCreatorInput = {
    id?: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
    periodEnd: Date | string
    totalPosts?: number
    totalLikes?: bigint | number
    totalComments?: bigint | number
    totalViews?: bigint | number
    totalShares?: bigint | number
    averageLikes?: Decimal | DecimalJsLike | number | string | null
    averageComments?: Decimal | DecimalJsLike | number | string | null
    averageViews?: Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: Decimal | DecimalJsLike | number | string
    calculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementStatsCreateOrConnectWithoutCreatorInput = {
    where: EngagementStatsWhereUniqueInput
    create: XOR<EngagementStatsCreateWithoutCreatorInput, EngagementStatsUncheckedCreateWithoutCreatorInput>
  }

  export type EngagementStatsCreateManyCreatorInputEnvelope = {
    data: EngagementStatsCreateManyCreatorInput | EngagementStatsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AnomalyEventCreateWithoutCreatorInput = {
    id?: string
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post?: PostCreateNestedOneWithoutAnomalyEventsInput
  }

  export type AnomalyEventUncheckedCreateWithoutCreatorInput = {
    id?: string
    postId?: string | null
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyEventCreateOrConnectWithoutCreatorInput = {
    where: AnomalyEventWhereUniqueInput
    create: XOR<AnomalyEventCreateWithoutCreatorInput, AnomalyEventUncheckedCreateWithoutCreatorInput>
  }

  export type AnomalyEventCreateManyCreatorInputEnvelope = {
    data: AnomalyEventCreateManyCreatorInput | AnomalyEventCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type PlatformUpsertWithoutCreatorsInput = {
    update: XOR<PlatformUpdateWithoutCreatorsInput, PlatformUncheckedUpdateWithoutCreatorsInput>
    create: XOR<PlatformCreateWithoutCreatorsInput, PlatformUncheckedCreateWithoutCreatorsInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutCreatorsInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutCreatorsInput, PlatformUncheckedUpdateWithoutCreatorsInput>
  }

  export type PlatformUpdateWithoutCreatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportsFollowers?: BoolFieldUpdateOperationsInput | boolean
    supportsLikes?: BoolFieldUpdateOperationsInput | boolean
    supportsComments?: BoolFieldUpdateOperationsInput | boolean
    supportsViews?: BoolFieldUpdateOperationsInput | boolean
    supportsShares?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateWithoutCreatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportsFollowers?: BoolFieldUpdateOperationsInput | boolean
    supportsLikes?: BoolFieldUpdateOperationsInput | boolean
    supportsComments?: BoolFieldUpdateOperationsInput | boolean
    supportsViews?: BoolFieldUpdateOperationsInput | boolean
    supportsShares?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatorInput, PostUncheckedUpdateWithoutCreatorInput>
    create: XOR<PostCreateWithoutCreatorInput, PostUncheckedCreateWithoutCreatorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatorInput, PostUncheckedUpdateWithoutCreatorInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: UuidFilter<"Post"> | string
    creatorId?: UuidFilter<"Post"> | string
    externalId?: StringFilter<"Post"> | string
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    content?: StringNullableFilter<"Post"> | string | null
    postUrl?: StringNullableFilter<"Post"> | string | null
    thumbnailUrl?: StringNullableFilter<"Post"> | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type MetricSnapshotUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MetricSnapshotWhereUniqueInput
    update: XOR<MetricSnapshotUpdateWithoutCreatorInput, MetricSnapshotUncheckedUpdateWithoutCreatorInput>
    create: XOR<MetricSnapshotCreateWithoutCreatorInput, MetricSnapshotUncheckedCreateWithoutCreatorInput>
  }

  export type MetricSnapshotUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MetricSnapshotWhereUniqueInput
    data: XOR<MetricSnapshotUpdateWithoutCreatorInput, MetricSnapshotUncheckedUpdateWithoutCreatorInput>
  }

  export type MetricSnapshotUpdateManyWithWhereWithoutCreatorInput = {
    where: MetricSnapshotScalarWhereInput
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MetricSnapshotScalarWhereInput = {
    AND?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
    OR?: MetricSnapshotScalarWhereInput[]
    NOT?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
    id?: UuidFilter<"MetricSnapshot"> | string
    creatorId?: UuidFilter<"MetricSnapshot"> | string
    postId?: UuidNullableFilter<"MetricSnapshot"> | string | null
    followerCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    followingCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    postCount?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalLikes?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalComments?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalViews?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    totalShares?: BigIntNullableFilter<"MetricSnapshot"> | bigint | number | null
    engagementRate?: DecimalNullableFilter<"MetricSnapshot"> | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    source?: StringNullableFilter<"MetricSnapshot"> | string | null
    rawMetrics?: JsonNullableFilter<"MetricSnapshot">
    createdAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
  }

  export type EngagementStatsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EngagementStatsWhereUniqueInput
    update: XOR<EngagementStatsUpdateWithoutCreatorInput, EngagementStatsUncheckedUpdateWithoutCreatorInput>
    create: XOR<EngagementStatsCreateWithoutCreatorInput, EngagementStatsUncheckedCreateWithoutCreatorInput>
  }

  export type EngagementStatsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EngagementStatsWhereUniqueInput
    data: XOR<EngagementStatsUpdateWithoutCreatorInput, EngagementStatsUncheckedUpdateWithoutCreatorInput>
  }

  export type EngagementStatsUpdateManyWithWhereWithoutCreatorInput = {
    where: EngagementStatsScalarWhereInput
    data: XOR<EngagementStatsUpdateManyMutationInput, EngagementStatsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EngagementStatsScalarWhereInput = {
    AND?: EngagementStatsScalarWhereInput | EngagementStatsScalarWhereInput[]
    OR?: EngagementStatsScalarWhereInput[]
    NOT?: EngagementStatsScalarWhereInput | EngagementStatsScalarWhereInput[]
    id?: UuidFilter<"EngagementStats"> | string
    creatorId?: UuidFilter<"EngagementStats"> | string
    periodType?: EnumAnalyticsPeriodFilter<"EngagementStats"> | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFilter<"EngagementStats"> | Date | string
    periodEnd?: DateTimeFilter<"EngagementStats"> | Date | string
    totalPosts?: IntFilter<"EngagementStats"> | number
    totalLikes?: BigIntFilter<"EngagementStats"> | bigint | number
    totalComments?: BigIntFilter<"EngagementStats"> | bigint | number
    totalViews?: BigIntFilter<"EngagementStats"> | bigint | number
    totalShares?: BigIntFilter<"EngagementStats"> | bigint | number
    averageLikes?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageComments?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageViews?: DecimalNullableFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFilter<"EngagementStats"> | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFilter<"EngagementStats"> | Date | string
    createdAt?: DateTimeFilter<"EngagementStats"> | Date | string
    updatedAt?: DateTimeFilter<"EngagementStats"> | Date | string
  }

  export type AnomalyEventUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AnomalyEventWhereUniqueInput
    update: XOR<AnomalyEventUpdateWithoutCreatorInput, AnomalyEventUncheckedUpdateWithoutCreatorInput>
    create: XOR<AnomalyEventCreateWithoutCreatorInput, AnomalyEventUncheckedCreateWithoutCreatorInput>
  }

  export type AnomalyEventUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AnomalyEventWhereUniqueInput
    data: XOR<AnomalyEventUpdateWithoutCreatorInput, AnomalyEventUncheckedUpdateWithoutCreatorInput>
  }

  export type AnomalyEventUpdateManyWithWhereWithoutCreatorInput = {
    where: AnomalyEventScalarWhereInput
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AnomalyEventScalarWhereInput = {
    AND?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
    OR?: AnomalyEventScalarWhereInput[]
    NOT?: AnomalyEventScalarWhereInput | AnomalyEventScalarWhereInput[]
    id?: UuidFilter<"AnomalyEvent"> | string
    creatorId?: UuidFilter<"AnomalyEvent"> | string
    postId?: UuidNullableFilter<"AnomalyEvent"> | string | null
    eventType?: StringFilter<"AnomalyEvent"> | string
    severity?: EnumAnomalySeverityFilter<"AnomalyEvent"> | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFilter<"AnomalyEvent"> | $Enums.AnomalyStatus
    metricName?: StringFilter<"AnomalyEvent"> | string
    expectedValue?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    observedValue?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableFilter<"AnomalyEvent"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"AnomalyEvent"> | string | null
    metadata?: JsonNullableFilter<"AnomalyEvent">
    detectedAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"AnomalyEvent"> | Date | string | null
    createdAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AnomalyEvent"> | Date | string
  }

  export type CreatorCreateWithoutPostsInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platform: PlatformCreateNestedOneWithoutCreatorsInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateWithoutPostsInput = {
    id?: string
    platformId: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsUncheckedCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutPostsInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutPostsInput, CreatorUncheckedCreateWithoutPostsInput>
  }

  export type MetricSnapshotCreateWithoutPostInput = {
    id?: string
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    creator: CreatorCreateNestedOneWithoutMetricSnapshotsInput
  }

  export type MetricSnapshotUncheckedCreateWithoutPostInput = {
    id?: string
    creatorId: string
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotCreateOrConnectWithoutPostInput = {
    where: MetricSnapshotWhereUniqueInput
    create: XOR<MetricSnapshotCreateWithoutPostInput, MetricSnapshotUncheckedCreateWithoutPostInput>
  }

  export type MetricSnapshotCreateManyPostInputEnvelope = {
    data: MetricSnapshotCreateManyPostInput | MetricSnapshotCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SentimentScoreCreateWithoutPostInput = {
    id?: string
    label: $Enums.SentimentLabel
    score: Decimal | DecimalJsLike | number | string
    confidence?: Decimal | DecimalJsLike | number | string | null
    language?: string | null
    provider?: string | null
    modelName: string
    analyzedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SentimentScoreUncheckedCreateWithoutPostInput = {
    id?: string
    label: $Enums.SentimentLabel
    score: Decimal | DecimalJsLike | number | string
    confidence?: Decimal | DecimalJsLike | number | string | null
    language?: string | null
    provider?: string | null
    modelName: string
    analyzedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SentimentScoreCreateOrConnectWithoutPostInput = {
    where: SentimentScoreWhereUniqueInput
    create: XOR<SentimentScoreCreateWithoutPostInput, SentimentScoreUncheckedCreateWithoutPostInput>
  }

  export type SentimentScoreCreateManyPostInputEnvelope = {
    data: SentimentScoreCreateManyPostInput | SentimentScoreCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type AnomalyEventCreateWithoutPostInput = {
    id?: string
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutAnomalyEventsInput
  }

  export type AnomalyEventUncheckedCreateWithoutPostInput = {
    id?: string
    creatorId: string
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyEventCreateOrConnectWithoutPostInput = {
    where: AnomalyEventWhereUniqueInput
    create: XOR<AnomalyEventCreateWithoutPostInput, AnomalyEventUncheckedCreateWithoutPostInput>
  }

  export type AnomalyEventCreateManyPostInputEnvelope = {
    data: AnomalyEventCreateManyPostInput | AnomalyEventCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CreatorUpsertWithoutPostsInput = {
    update: XOR<CreatorUpdateWithoutPostsInput, CreatorUncheckedUpdateWithoutPostsInput>
    create: XOR<CreatorCreateWithoutPostsInput, CreatorUncheckedCreateWithoutPostsInput>
    where?: CreatorWhereInput
  }

  export type CreatorUpdateToOneWithWhereWithoutPostsInput = {
    where?: CreatorWhereInput
    data: XOR<CreatorUpdateWithoutPostsInput, CreatorUncheckedUpdateWithoutPostsInput>
  }

  export type CreatorUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutCreatorsNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUncheckedUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type MetricSnapshotUpsertWithWhereUniqueWithoutPostInput = {
    where: MetricSnapshotWhereUniqueInput
    update: XOR<MetricSnapshotUpdateWithoutPostInput, MetricSnapshotUncheckedUpdateWithoutPostInput>
    create: XOR<MetricSnapshotCreateWithoutPostInput, MetricSnapshotUncheckedCreateWithoutPostInput>
  }

  export type MetricSnapshotUpdateWithWhereUniqueWithoutPostInput = {
    where: MetricSnapshotWhereUniqueInput
    data: XOR<MetricSnapshotUpdateWithoutPostInput, MetricSnapshotUncheckedUpdateWithoutPostInput>
  }

  export type MetricSnapshotUpdateManyWithWhereWithoutPostInput = {
    where: MetricSnapshotScalarWhereInput
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyWithoutPostInput>
  }

  export type SentimentScoreUpsertWithWhereUniqueWithoutPostInput = {
    where: SentimentScoreWhereUniqueInput
    update: XOR<SentimentScoreUpdateWithoutPostInput, SentimentScoreUncheckedUpdateWithoutPostInput>
    create: XOR<SentimentScoreCreateWithoutPostInput, SentimentScoreUncheckedCreateWithoutPostInput>
  }

  export type SentimentScoreUpdateWithWhereUniqueWithoutPostInput = {
    where: SentimentScoreWhereUniqueInput
    data: XOR<SentimentScoreUpdateWithoutPostInput, SentimentScoreUncheckedUpdateWithoutPostInput>
  }

  export type SentimentScoreUpdateManyWithWhereWithoutPostInput = {
    where: SentimentScoreScalarWhereInput
    data: XOR<SentimentScoreUpdateManyMutationInput, SentimentScoreUncheckedUpdateManyWithoutPostInput>
  }

  export type SentimentScoreScalarWhereInput = {
    AND?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
    OR?: SentimentScoreScalarWhereInput[]
    NOT?: SentimentScoreScalarWhereInput | SentimentScoreScalarWhereInput[]
    id?: UuidFilter<"SentimentScore"> | string
    postId?: UuidFilter<"SentimentScore"> | string
    label?: EnumSentimentLabelFilter<"SentimentScore"> | $Enums.SentimentLabel
    score?: DecimalFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string
    confidence?: DecimalNullableFilter<"SentimentScore"> | Decimal | DecimalJsLike | number | string | null
    language?: StringNullableFilter<"SentimentScore"> | string | null
    provider?: StringNullableFilter<"SentimentScore"> | string | null
    modelName?: StringFilter<"SentimentScore"> | string
    analyzedAt?: DateTimeFilter<"SentimentScore"> | Date | string
    metadata?: JsonNullableFilter<"SentimentScore">
    createdAt?: DateTimeFilter<"SentimentScore"> | Date | string
  }

  export type AnomalyEventUpsertWithWhereUniqueWithoutPostInput = {
    where: AnomalyEventWhereUniqueInput
    update: XOR<AnomalyEventUpdateWithoutPostInput, AnomalyEventUncheckedUpdateWithoutPostInput>
    create: XOR<AnomalyEventCreateWithoutPostInput, AnomalyEventUncheckedCreateWithoutPostInput>
  }

  export type AnomalyEventUpdateWithWhereUniqueWithoutPostInput = {
    where: AnomalyEventWhereUniqueInput
    data: XOR<AnomalyEventUpdateWithoutPostInput, AnomalyEventUncheckedUpdateWithoutPostInput>
  }

  export type AnomalyEventUpdateManyWithWhereWithoutPostInput = {
    where: AnomalyEventScalarWhereInput
    data: XOR<AnomalyEventUpdateManyMutationInput, AnomalyEventUncheckedUpdateManyWithoutPostInput>
  }

  export type CreatorCreateWithoutMetricSnapshotsInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platform: PlatformCreateNestedOneWithoutCreatorsInput
    posts?: PostCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateWithoutMetricSnapshotsInput = {
    id?: string
    platformId: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsUncheckedCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutMetricSnapshotsInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutMetricSnapshotsInput, CreatorUncheckedCreateWithoutMetricSnapshotsInput>
  }

  export type PostCreateWithoutMetricSnapshotsInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutPostsInput
    sentimentScores?: SentimentScoreCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMetricSnapshotsInput = {
    id?: string
    creatorId: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentimentScores?: SentimentScoreUncheckedCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMetricSnapshotsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMetricSnapshotsInput, PostUncheckedCreateWithoutMetricSnapshotsInput>
  }

  export type CreatorUpsertWithoutMetricSnapshotsInput = {
    update: XOR<CreatorUpdateWithoutMetricSnapshotsInput, CreatorUncheckedUpdateWithoutMetricSnapshotsInput>
    create: XOR<CreatorCreateWithoutMetricSnapshotsInput, CreatorUncheckedCreateWithoutMetricSnapshotsInput>
    where?: CreatorWhereInput
  }

  export type CreatorUpdateToOneWithWhereWithoutMetricSnapshotsInput = {
    where?: CreatorWhereInput
    data: XOR<CreatorUpdateWithoutMetricSnapshotsInput, CreatorUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type CreatorUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutCreatorsNestedInput
    posts?: PostUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUncheckedUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PostUpsertWithoutMetricSnapshotsInput = {
    update: XOR<PostUpdateWithoutMetricSnapshotsInput, PostUncheckedUpdateWithoutMetricSnapshotsInput>
    create: XOR<PostCreateWithoutMetricSnapshotsInput, PostUncheckedCreateWithoutMetricSnapshotsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutMetricSnapshotsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutMetricSnapshotsInput, PostUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type PostUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutPostsNestedInput
    sentimentScores?: SentimentScoreUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentimentScores?: SentimentScoreUncheckedUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CreatorCreateWithoutEngagementStatsInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platform: PlatformCreateNestedOneWithoutCreatorsInput
    posts?: PostCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateWithoutEngagementStatsInput = {
    id?: string
    platformId: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutCreatorInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutEngagementStatsInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutEngagementStatsInput, CreatorUncheckedCreateWithoutEngagementStatsInput>
  }

  export type CreatorUpsertWithoutEngagementStatsInput = {
    update: XOR<CreatorUpdateWithoutEngagementStatsInput, CreatorUncheckedUpdateWithoutEngagementStatsInput>
    create: XOR<CreatorCreateWithoutEngagementStatsInput, CreatorUncheckedCreateWithoutEngagementStatsInput>
    where?: CreatorWhereInput
  }

  export type CreatorUpdateToOneWithWhereWithoutEngagementStatsInput = {
    where?: CreatorWhereInput
    data: XOR<CreatorUpdateWithoutEngagementStatsInput, CreatorUncheckedUpdateWithoutEngagementStatsInput>
  }

  export type CreatorUpdateWithoutEngagementStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutCreatorsNestedInput
    posts?: PostUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateWithoutEngagementStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorCreateWithoutAnomalyEventsInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platform: PlatformCreateNestedOneWithoutCreatorsInput
    posts?: PostCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateWithoutAnomalyEventsInput = {
    id?: string
    platformId: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCreatorInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutCreatorInput
    engagementStats?: EngagementStatsUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutAnomalyEventsInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutAnomalyEventsInput, CreatorUncheckedCreateWithoutAnomalyEventsInput>
  }

  export type PostCreateWithoutAnomalyEventsInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutPostsInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutPostInput
    sentimentScores?: SentimentScoreCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAnomalyEventsInput = {
    id?: string
    creatorId: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutPostInput
    sentimentScores?: SentimentScoreUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAnomalyEventsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAnomalyEventsInput, PostUncheckedCreateWithoutAnomalyEventsInput>
  }

  export type CreatorUpsertWithoutAnomalyEventsInput = {
    update: XOR<CreatorUpdateWithoutAnomalyEventsInput, CreatorUncheckedUpdateWithoutAnomalyEventsInput>
    create: XOR<CreatorCreateWithoutAnomalyEventsInput, CreatorUncheckedCreateWithoutAnomalyEventsInput>
    where?: CreatorWhereInput
  }

  export type CreatorUpdateToOneWithWhereWithoutAnomalyEventsInput = {
    where?: CreatorWhereInput
    data: XOR<CreatorUpdateWithoutAnomalyEventsInput, CreatorUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type CreatorUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutCreatorsNestedInput
    posts?: PostUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type PostUpsertWithoutAnomalyEventsInput = {
    update: XOR<PostUpdateWithoutAnomalyEventsInput, PostUncheckedUpdateWithoutAnomalyEventsInput>
    create: XOR<PostCreateWithoutAnomalyEventsInput, PostUncheckedCreateWithoutAnomalyEventsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutAnomalyEventsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutAnomalyEventsInput, PostUncheckedUpdateWithoutAnomalyEventsInput>
  }

  export type PostUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutPostsNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutPostNestedInput
    sentimentScores?: SentimentScoreUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAnomalyEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutPostNestedInput
    sentimentScores?: SentimentScoreUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutSentimentScoresInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: CreatorCreateNestedOneWithoutPostsInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSentimentScoresInput = {
    id?: string
    creatorId: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutPostInput
    anomalyEvents?: AnomalyEventUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSentimentScoresInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSentimentScoresInput, PostUncheckedCreateWithoutSentimentScoresInput>
  }

  export type PostUpsertWithoutSentimentScoresInput = {
    update: XOR<PostUpdateWithoutSentimentScoresInput, PostUncheckedUpdateWithoutSentimentScoresInput>
    create: XOR<PostCreateWithoutSentimentScoresInput, PostUncheckedCreateWithoutSentimentScoresInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSentimentScoresInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSentimentScoresInput, PostUncheckedUpdateWithoutSentimentScoresInput>
  }

  export type PostUpdateWithoutSentimentScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutPostsNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSentimentScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CreatorCreateManyPlatformInput = {
    id?: string
    externalId: string
    username?: string | null
    displayName?: string | null
    profileUrl?: string | null
    bio?: string | null
    avatarUrl?: string | null
    isVerified?: boolean
    isActive?: boolean
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreatorUpdateWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCreatorNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutCreatorNestedInput
    engagementStats?: EngagementStatsUncheckedUpdateManyWithoutCreatorNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateManyWithoutPlatformInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyCreatorInput = {
    id?: string
    externalId: string
    type?: $Enums.PostType
    content?: string | null
    postUrl?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricSnapshotCreateManyCreatorInput = {
    id?: string
    postId?: string | null
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EngagementStatsCreateManyCreatorInput = {
    id?: string
    periodType: $Enums.AnalyticsPeriod
    periodStart: Date | string
    periodEnd: Date | string
    totalPosts?: number
    totalLikes?: bigint | number
    totalComments?: bigint | number
    totalViews?: bigint | number
    totalShares?: bigint | number
    averageLikes?: Decimal | DecimalJsLike | number | string | null
    averageComments?: Decimal | DecimalJsLike | number | string | null
    averageViews?: Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: Decimal | DecimalJsLike | number | string
    calculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnomalyEventCreateManyCreatorInput = {
    id?: string
    postId?: string | null
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUpdateManyWithoutPostNestedInput
    sentimentScores?: SentimentScoreUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutPostNestedInput
    sentimentScores?: SentimentScoreUncheckedUpdateManyWithoutPostNestedInput
    anomalyEvents?: AnomalyEventUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    postUrl?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutMetricSnapshotsNestedInput
  }

  export type MetricSnapshotUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementStatsUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementStatsUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementStatsUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: EnumAnalyticsPeriodFieldUpdateOperationsInput | $Enums.AnalyticsPeriod
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPosts?: IntFieldUpdateOperationsInput | number
    totalLikes?: BigIntFieldUpdateOperationsInput | bigint | number
    totalComments?: BigIntFieldUpdateOperationsInput | bigint | number
    totalViews?: BigIntFieldUpdateOperationsInput | bigint | number
    totalShares?: BigIntFieldUpdateOperationsInput | bigint | number
    averageLikes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageComments?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageViews?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    averageEngagementRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    calculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutAnomalyEventsNestedInput
  }

  export type AnomalyEventUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotCreateManyPostInput = {
    id?: string
    creatorId: string
    followerCount?: bigint | number | null
    followingCount?: bigint | number | null
    postCount?: bigint | number | null
    totalLikes?: bigint | number | null
    totalComments?: bigint | number | null
    totalViews?: bigint | number | null
    totalShares?: bigint | number | null
    engagementRate?: Decimal | DecimalJsLike | number | string | null
    capturedAt?: Date | string
    source?: string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SentimentScoreCreateManyPostInput = {
    id?: string
    label: $Enums.SentimentLabel
    score: Decimal | DecimalJsLike | number | string
    confidence?: Decimal | DecimalJsLike | number | string | null
    language?: string | null
    provider?: string | null
    modelName: string
    analyzedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnomalyEventCreateManyPostInput = {
    id?: string
    creatorId: string
    eventType: string
    severity?: $Enums.AnomalySeverity
    status?: $Enums.AnomalyStatus
    metricName: string
    expectedValue?: Decimal | DecimalJsLike | number | string | null
    observedValue?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricSnapshotUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutMetricSnapshotsNestedInput
  }

  export type MetricSnapshotUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    followerCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    followingCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    postCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalLikes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalComments?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalViews?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalShares?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    engagementRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    rawMetrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentScoreUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: EnumSentimentLabelFieldUpdateOperationsInput | $Enums.SentimentLabel
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confidence?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: CreatorUpdateOneRequiredWithoutAnomalyEventsNestedInput
  }

  export type AnomalyEventUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyEventUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    severity?: EnumAnomalySeverityFieldUpdateOperationsInput | $Enums.AnomalySeverity
    status?: EnumAnomalyStatusFieldUpdateOperationsInput | $Enums.AnomalyStatus
    metricName?: StringFieldUpdateOperationsInput | string
    expectedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    observedValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}