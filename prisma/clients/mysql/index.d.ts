
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
 * Model SystemMenus
 * 
 */
export type SystemMenus = $Result.DefaultSelection<Prisma.$SystemMenusPayload>
/**
 * Model SystemUsers
 * 
 */
export type SystemUsers = $Result.DefaultSelection<Prisma.$SystemUsersPayload>
/**
 * Model SystemUserProfile
 * 
 */
export type SystemUserProfile = $Result.DefaultSelection<Prisma.$SystemUserProfilePayload>
/**
 * Model SystemLogs
 * 
 */
export type SystemLogs = $Result.DefaultSelection<Prisma.$SystemLogsPayload>
/**
 * Model SystemDictionaryCategory
 * 
 */
export type SystemDictionaryCategory = $Result.DefaultSelection<Prisma.$SystemDictionaryCategoryPayload>
/**
 * Model SystemDictionaryData
 * 
 */
export type SystemDictionaryData = $Result.DefaultSelection<Prisma.$SystemDictionaryDataPayload>
/**
 * Model SystemRoles
 * 
 */
export type SystemRoles = $Result.DefaultSelection<Prisma.$SystemRolesPayload>
/**
 * Model SystemUserRoleRelation
 * 
 */
export type SystemUserRoleRelation = $Result.DefaultSelection<Prisma.$SystemUserRoleRelationPayload>
/**
 * Model SystemRoleMenuRelation
 * 
 */
export type SystemRoleMenuRelation = $Result.DefaultSelection<Prisma.$SystemRoleMenuRelationPayload>
/**
 * Model books
 * 
 */
export type books = $Result.DefaultSelection<Prisma.$booksPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SystemMenus
 * const systemMenus = await prisma.systemMenus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more SystemMenus
   * const systemMenus = await prisma.systemMenus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.systemMenus`: Exposes CRUD operations for the **SystemMenus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemMenus
    * const systemMenus = await prisma.systemMenus.findMany()
    * ```
    */
  get systemMenus(): Prisma.SystemMenusDelegate<ExtArgs>;

  /**
   * `prisma.systemUsers`: Exposes CRUD operations for the **SystemUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemUsers
    * const systemUsers = await prisma.systemUsers.findMany()
    * ```
    */
  get systemUsers(): Prisma.SystemUsersDelegate<ExtArgs>;

  /**
   * `prisma.systemUserProfile`: Exposes CRUD operations for the **SystemUserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemUserProfiles
    * const systemUserProfiles = await prisma.systemUserProfile.findMany()
    * ```
    */
  get systemUserProfile(): Prisma.SystemUserProfileDelegate<ExtArgs>;

  /**
   * `prisma.systemLogs`: Exposes CRUD operations for the **SystemLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLogs.findMany()
    * ```
    */
  get systemLogs(): Prisma.SystemLogsDelegate<ExtArgs>;

  /**
   * `prisma.systemDictionaryCategory`: Exposes CRUD operations for the **SystemDictionaryCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemDictionaryCategories
    * const systemDictionaryCategories = await prisma.systemDictionaryCategory.findMany()
    * ```
    */
  get systemDictionaryCategory(): Prisma.SystemDictionaryCategoryDelegate<ExtArgs>;

  /**
   * `prisma.systemDictionaryData`: Exposes CRUD operations for the **SystemDictionaryData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemDictionaryData
    * const systemDictionaryData = await prisma.systemDictionaryData.findMany()
    * ```
    */
  get systemDictionaryData(): Prisma.SystemDictionaryDataDelegate<ExtArgs>;

  /**
   * `prisma.systemRoles`: Exposes CRUD operations for the **SystemRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemRoles
    * const systemRoles = await prisma.systemRoles.findMany()
    * ```
    */
  get systemRoles(): Prisma.SystemRolesDelegate<ExtArgs>;

  /**
   * `prisma.systemUserRoleRelation`: Exposes CRUD operations for the **SystemUserRoleRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemUserRoleRelations
    * const systemUserRoleRelations = await prisma.systemUserRoleRelation.findMany()
    * ```
    */
  get systemUserRoleRelation(): Prisma.SystemUserRoleRelationDelegate<ExtArgs>;

  /**
   * `prisma.systemRoleMenuRelation`: Exposes CRUD operations for the **SystemRoleMenuRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemRoleMenuRelations
    * const systemRoleMenuRelations = await prisma.systemRoleMenuRelation.findMany()
    * ```
    */
  get systemRoleMenuRelation(): Prisma.SystemRoleMenuRelationDelegate<ExtArgs>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.booksDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    SystemMenus: 'SystemMenus',
    SystemUsers: 'SystemUsers',
    SystemUserProfile: 'SystemUserProfile',
    SystemLogs: 'SystemLogs',
    SystemDictionaryCategory: 'SystemDictionaryCategory',
    SystemDictionaryData: 'SystemDictionaryData',
    SystemRoles: 'SystemRoles',
    SystemUserRoleRelation: 'SystemUserRoleRelation',
    SystemRoleMenuRelation: 'SystemRoleMenuRelation',
    books: 'books'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'systemMenus' | 'systemUsers' | 'systemUserProfile' | 'systemLogs' | 'systemDictionaryCategory' | 'systemDictionaryData' | 'systemRoles' | 'systemUserRoleRelation' | 'systemRoleMenuRelation' | 'books'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      SystemMenus: {
        payload: Prisma.$SystemMenusPayload<ExtArgs>
        fields: Prisma.SystemMenusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemMenusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemMenusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>
          }
          findFirst: {
            args: Prisma.SystemMenusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemMenusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>
          }
          findMany: {
            args: Prisma.SystemMenusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>[]
          }
          create: {
            args: Prisma.SystemMenusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>
          }
          createMany: {
            args: Prisma.SystemMenusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemMenusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>
          }
          update: {
            args: Prisma.SystemMenusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>
          }
          deleteMany: {
            args: Prisma.SystemMenusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemMenusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemMenusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemMenusPayload>
          }
          aggregate: {
            args: Prisma.SystemMenusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemMenus>
          }
          groupBy: {
            args: Prisma.SystemMenusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemMenusGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemMenusCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemMenusCountAggregateOutputType> | number
          }
        }
      }
      SystemUsers: {
        payload: Prisma.$SystemUsersPayload<ExtArgs>
        fields: Prisma.SystemUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemUsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemUsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>
          }
          findFirst: {
            args: Prisma.SystemUsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemUsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>
          }
          findMany: {
            args: Prisma.SystemUsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>[]
          }
          create: {
            args: Prisma.SystemUsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>
          }
          createMany: {
            args: Prisma.SystemUsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemUsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>
          }
          update: {
            args: Prisma.SystemUsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>
          }
          deleteMany: {
            args: Prisma.SystemUsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemUsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemUsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUsersPayload>
          }
          aggregate: {
            args: Prisma.SystemUsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemUsers>
          }
          groupBy: {
            args: Prisma.SystemUsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemUsersCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemUsersCountAggregateOutputType> | number
          }
        }
      }
      SystemUserProfile: {
        payload: Prisma.$SystemUserProfilePayload<ExtArgs>
        fields: Prisma.SystemUserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemUserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemUserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>
          }
          findFirst: {
            args: Prisma.SystemUserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemUserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>
          }
          findMany: {
            args: Prisma.SystemUserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>[]
          }
          create: {
            args: Prisma.SystemUserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>
          }
          createMany: {
            args: Prisma.SystemUserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemUserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>
          }
          update: {
            args: Prisma.SystemUserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>
          }
          deleteMany: {
            args: Prisma.SystemUserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemUserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemUserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserProfilePayload>
          }
          aggregate: {
            args: Prisma.SystemUserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemUserProfile>
          }
          groupBy: {
            args: Prisma.SystemUserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemUserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemUserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemUserProfileCountAggregateOutputType> | number
          }
        }
      }
      SystemLogs: {
        payload: Prisma.$SystemLogsPayload<ExtArgs>
        fields: Prisma.SystemLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>
          }
          findFirst: {
            args: Prisma.SystemLogsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>
          }
          findMany: {
            args: Prisma.SystemLogsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>[]
          }
          create: {
            args: Prisma.SystemLogsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>
          }
          createMany: {
            args: Prisma.SystemLogsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemLogsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>
          }
          update: {
            args: Prisma.SystemLogsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemLogsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemLogsPayload>
          }
          aggregate: {
            args: Prisma.SystemLogsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemLogs>
          }
          groupBy: {
            args: Prisma.SystemLogsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogsCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemLogsCountAggregateOutputType> | number
          }
        }
      }
      SystemDictionaryCategory: {
        payload: Prisma.$SystemDictionaryCategoryPayload<ExtArgs>
        fields: Prisma.SystemDictionaryCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemDictionaryCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemDictionaryCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>
          }
          findFirst: {
            args: Prisma.SystemDictionaryCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemDictionaryCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>
          }
          findMany: {
            args: Prisma.SystemDictionaryCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>[]
          }
          create: {
            args: Prisma.SystemDictionaryCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>
          }
          createMany: {
            args: Prisma.SystemDictionaryCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemDictionaryCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>
          }
          update: {
            args: Prisma.SystemDictionaryCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SystemDictionaryCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemDictionaryCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemDictionaryCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryCategoryPayload>
          }
          aggregate: {
            args: Prisma.SystemDictionaryCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemDictionaryCategory>
          }
          groupBy: {
            args: Prisma.SystemDictionaryCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemDictionaryCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemDictionaryCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemDictionaryCategoryCountAggregateOutputType> | number
          }
        }
      }
      SystemDictionaryData: {
        payload: Prisma.$SystemDictionaryDataPayload<ExtArgs>
        fields: Prisma.SystemDictionaryDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemDictionaryDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemDictionaryDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>
          }
          findFirst: {
            args: Prisma.SystemDictionaryDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemDictionaryDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>
          }
          findMany: {
            args: Prisma.SystemDictionaryDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>[]
          }
          create: {
            args: Prisma.SystemDictionaryDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>
          }
          createMany: {
            args: Prisma.SystemDictionaryDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemDictionaryDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>
          }
          update: {
            args: Prisma.SystemDictionaryDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>
          }
          deleteMany: {
            args: Prisma.SystemDictionaryDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemDictionaryDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemDictionaryDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemDictionaryDataPayload>
          }
          aggregate: {
            args: Prisma.SystemDictionaryDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemDictionaryData>
          }
          groupBy: {
            args: Prisma.SystemDictionaryDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemDictionaryDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemDictionaryDataCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemDictionaryDataCountAggregateOutputType> | number
          }
        }
      }
      SystemRoles: {
        payload: Prisma.$SystemRolesPayload<ExtArgs>
        fields: Prisma.SystemRolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemRolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemRolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>
          }
          findFirst: {
            args: Prisma.SystemRolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemRolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>
          }
          findMany: {
            args: Prisma.SystemRolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>[]
          }
          create: {
            args: Prisma.SystemRolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>
          }
          createMany: {
            args: Prisma.SystemRolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemRolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>
          }
          update: {
            args: Prisma.SystemRolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>
          }
          deleteMany: {
            args: Prisma.SystemRolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemRolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemRolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRolesPayload>
          }
          aggregate: {
            args: Prisma.SystemRolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemRoles>
          }
          groupBy: {
            args: Prisma.SystemRolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemRolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemRolesCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemRolesCountAggregateOutputType> | number
          }
        }
      }
      SystemUserRoleRelation: {
        payload: Prisma.$SystemUserRoleRelationPayload<ExtArgs>
        fields: Prisma.SystemUserRoleRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemUserRoleRelationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemUserRoleRelationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>
          }
          findFirst: {
            args: Prisma.SystemUserRoleRelationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemUserRoleRelationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>
          }
          findMany: {
            args: Prisma.SystemUserRoleRelationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>[]
          }
          create: {
            args: Prisma.SystemUserRoleRelationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>
          }
          createMany: {
            args: Prisma.SystemUserRoleRelationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemUserRoleRelationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>
          }
          update: {
            args: Prisma.SystemUserRoleRelationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>
          }
          deleteMany: {
            args: Prisma.SystemUserRoleRelationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemUserRoleRelationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemUserRoleRelationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemUserRoleRelationPayload>
          }
          aggregate: {
            args: Prisma.SystemUserRoleRelationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemUserRoleRelation>
          }
          groupBy: {
            args: Prisma.SystemUserRoleRelationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemUserRoleRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemUserRoleRelationCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemUserRoleRelationCountAggregateOutputType> | number
          }
        }
      }
      SystemRoleMenuRelation: {
        payload: Prisma.$SystemRoleMenuRelationPayload<ExtArgs>
        fields: Prisma.SystemRoleMenuRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemRoleMenuRelationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemRoleMenuRelationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>
          }
          findFirst: {
            args: Prisma.SystemRoleMenuRelationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemRoleMenuRelationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>
          }
          findMany: {
            args: Prisma.SystemRoleMenuRelationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>[]
          }
          create: {
            args: Prisma.SystemRoleMenuRelationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>
          }
          createMany: {
            args: Prisma.SystemRoleMenuRelationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SystemRoleMenuRelationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>
          }
          update: {
            args: Prisma.SystemRoleMenuRelationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>
          }
          deleteMany: {
            args: Prisma.SystemRoleMenuRelationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SystemRoleMenuRelationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SystemRoleMenuRelationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SystemRoleMenuRelationPayload>
          }
          aggregate: {
            args: Prisma.SystemRoleMenuRelationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSystemRoleMenuRelation>
          }
          groupBy: {
            args: Prisma.SystemRoleMenuRelationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SystemRoleMenuRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemRoleMenuRelationCountArgs<ExtArgs>,
            result: $Utils.Optional<SystemRoleMenuRelationCountAggregateOutputType> | number
          }
        }
      }
      books: {
        payload: Prisma.$booksPayload<ExtArgs>
        fields: Prisma.booksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findFirst: {
            args: Prisma.booksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findMany: {
            args: Prisma.booksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          create: {
            args: Prisma.booksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          createMany: {
            args: Prisma.booksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.booksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          update: {
            args: Prisma.booksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          deleteMany: {
            args: Prisma.booksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.booksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.booksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.booksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.booksCountArgs<ExtArgs>,
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SystemMenusCountOutputType
   */

  export type SystemMenusCountOutputType = {
    children: number
    systemRoles: number
  }

  export type SystemMenusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | SystemMenusCountOutputTypeCountChildrenArgs
    systemRoles?: boolean | SystemMenusCountOutputTypeCountSystemRolesArgs
  }

  // Custom InputTypes
  /**
   * SystemMenusCountOutputType without action
   */
  export type SystemMenusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenusCountOutputType
     */
    select?: SystemMenusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemMenusCountOutputType without action
   */
  export type SystemMenusCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMenusWhereInput
  }

  /**
   * SystemMenusCountOutputType without action
   */
  export type SystemMenusCountOutputTypeCountSystemRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemRoleMenuRelationWhereInput
  }


  /**
   * Count Type SystemUsersCountOutputType
   */

  export type SystemUsersCountOutputType = {
    logs: number
    roles: number
  }

  export type SystemUsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | SystemUsersCountOutputTypeCountLogsArgs
    roles?: boolean | SystemUsersCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * SystemUsersCountOutputType without action
   */
  export type SystemUsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsersCountOutputType
     */
    select?: SystemUsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemUsersCountOutputType without action
   */
  export type SystemUsersCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogsWhereInput
  }

  /**
   * SystemUsersCountOutputType without action
   */
  export type SystemUsersCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemUserRoleRelationWhereInput
  }


  /**
   * Count Type SystemDictionaryCategoryCountOutputType
   */

  export type SystemDictionaryCategoryCountOutputType = {
    dictionaryData: number
  }

  export type SystemDictionaryCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictionaryData?: boolean | SystemDictionaryCategoryCountOutputTypeCountDictionaryDataArgs
  }

  // Custom InputTypes
  /**
   * SystemDictionaryCategoryCountOutputType without action
   */
  export type SystemDictionaryCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategoryCountOutputType
     */
    select?: SystemDictionaryCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemDictionaryCategoryCountOutputType without action
   */
  export type SystemDictionaryCategoryCountOutputTypeCountDictionaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemDictionaryDataWhereInput
  }


  /**
   * Count Type SystemRolesCountOutputType
   */

  export type SystemRolesCountOutputType = {
    users: number
    menus: number
  }

  export type SystemRolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SystemRolesCountOutputTypeCountUsersArgs
    menus?: boolean | SystemRolesCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * SystemRolesCountOutputType without action
   */
  export type SystemRolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRolesCountOutputType
     */
    select?: SystemRolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemRolesCountOutputType without action
   */
  export type SystemRolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemUserRoleRelationWhereInput
  }

  /**
   * SystemRolesCountOutputType without action
   */
  export type SystemRolesCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemRoleMenuRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SystemMenus
   */

  export type AggregateSystemMenus = {
    _count: SystemMenusCountAggregateOutputType | null
    _avg: SystemMenusAvgAggregateOutputType | null
    _sum: SystemMenusSumAggregateOutputType | null
    _min: SystemMenusMinAggregateOutputType | null
    _max: SystemMenusMaxAggregateOutputType | null
  }

  export type SystemMenusAvgAggregateOutputType = {
    id: number | null
    orderNo: number | null
    parentId: number | null
    type: number | null
    status: number | null
    noClosable: number | null
    hidden: number | null
    dot: number | null
    isFrame: number | null
    isCache: number | null
  }

  export type SystemMenusSumAggregateOutputType = {
    id: number | null
    orderNo: number | null
    parentId: number | null
    type: number | null
    status: number | null
    noClosable: number | null
    hidden: number | null
    dot: number | null
    isFrame: number | null
    isCache: number | null
  }

  export type SystemMenusMinAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    component: string | null
    query: string | null
    icon: string | null
    orderNo: number | null
    parentId: number | null
    type: number | null
    status: number | null
    noClosable: number | null
    hidden: number | null
    activeMenu: string | null
    guard: string | null
    dot: number | null
    badge: string | null
    isFrame: number | null
    isCache: number | null
    permissionCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemMenusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    component: string | null
    query: string | null
    icon: string | null
    orderNo: number | null
    parentId: number | null
    type: number | null
    status: number | null
    noClosable: number | null
    hidden: number | null
    activeMenu: string | null
    guard: string | null
    dot: number | null
    badge: string | null
    isFrame: number | null
    isCache: number | null
    permissionCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemMenusCountAggregateOutputType = {
    id: number
    name: number
    path: number
    component: number
    query: number
    icon: number
    orderNo: number
    parentId: number
    type: number
    status: number
    noClosable: number
    hidden: number
    activeMenu: number
    guard: number
    dot: number
    badge: number
    isFrame: number
    isCache: number
    permissionCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemMenusAvgAggregateInputType = {
    id?: true
    orderNo?: true
    parentId?: true
    type?: true
    status?: true
    noClosable?: true
    hidden?: true
    dot?: true
    isFrame?: true
    isCache?: true
  }

  export type SystemMenusSumAggregateInputType = {
    id?: true
    orderNo?: true
    parentId?: true
    type?: true
    status?: true
    noClosable?: true
    hidden?: true
    dot?: true
    isFrame?: true
    isCache?: true
  }

  export type SystemMenusMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    component?: true
    query?: true
    icon?: true
    orderNo?: true
    parentId?: true
    type?: true
    status?: true
    noClosable?: true
    hidden?: true
    activeMenu?: true
    guard?: true
    dot?: true
    badge?: true
    isFrame?: true
    isCache?: true
    permissionCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemMenusMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    component?: true
    query?: true
    icon?: true
    orderNo?: true
    parentId?: true
    type?: true
    status?: true
    noClosable?: true
    hidden?: true
    activeMenu?: true
    guard?: true
    dot?: true
    badge?: true
    isFrame?: true
    isCache?: true
    permissionCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemMenusCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    component?: true
    query?: true
    icon?: true
    orderNo?: true
    parentId?: true
    type?: true
    status?: true
    noClosable?: true
    hidden?: true
    activeMenu?: true
    guard?: true
    dot?: true
    badge?: true
    isFrame?: true
    isCache?: true
    permissionCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemMenusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMenus to aggregate.
     */
    where?: SystemMenusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMenus to fetch.
     */
    orderBy?: SystemMenusOrderByWithRelationInput | SystemMenusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemMenusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemMenus
    **/
    _count?: true | SystemMenusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemMenusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemMenusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMenusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMenusMaxAggregateInputType
  }

  export type GetSystemMenusAggregateType<T extends SystemMenusAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemMenus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemMenus[P]>
      : GetScalarType<T[P], AggregateSystemMenus[P]>
  }




  export type SystemMenusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMenusWhereInput
    orderBy?: SystemMenusOrderByWithAggregationInput | SystemMenusOrderByWithAggregationInput[]
    by: SystemMenusScalarFieldEnum[] | SystemMenusScalarFieldEnum
    having?: SystemMenusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemMenusCountAggregateInputType | true
    _avg?: SystemMenusAvgAggregateInputType
    _sum?: SystemMenusSumAggregateInputType
    _min?: SystemMenusMinAggregateInputType
    _max?: SystemMenusMaxAggregateInputType
  }

  export type SystemMenusGroupByOutputType = {
    id: number
    name: string
    path: string
    component: string | null
    query: string | null
    icon: string | null
    orderNo: number
    parentId: number
    type: number
    status: number
    noClosable: number
    hidden: number
    activeMenu: string | null
    guard: string | null
    dot: number
    badge: string | null
    isFrame: number | null
    isCache: number
    permissionCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: SystemMenusCountAggregateOutputType | null
    _avg: SystemMenusAvgAggregateOutputType | null
    _sum: SystemMenusSumAggregateOutputType | null
    _min: SystemMenusMinAggregateOutputType | null
    _max: SystemMenusMaxAggregateOutputType | null
  }

  type GetSystemMenusGroupByPayload<T extends SystemMenusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemMenusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemMenusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemMenusGroupByOutputType[P]>
            : GetScalarType<T[P], SystemMenusGroupByOutputType[P]>
        }
      >
    >


  export type SystemMenusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    component?: boolean
    query?: boolean
    icon?: boolean
    orderNo?: boolean
    parentId?: boolean
    type?: boolean
    status?: boolean
    noClosable?: boolean
    hidden?: boolean
    activeMenu?: boolean
    guard?: boolean
    dot?: boolean
    badge?: boolean
    isFrame?: boolean
    isCache?: boolean
    permissionCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    children?: boolean | SystemMenus$childrenArgs<ExtArgs>
    parent?: boolean | SystemMenus$parentArgs<ExtArgs>
    systemRoles?: boolean | SystemMenus$systemRolesArgs<ExtArgs>
    _count?: boolean | SystemMenusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemMenus"]>

  export type SystemMenusSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    component?: boolean
    query?: boolean
    icon?: boolean
    orderNo?: boolean
    parentId?: boolean
    type?: boolean
    status?: boolean
    noClosable?: boolean
    hidden?: boolean
    activeMenu?: boolean
    guard?: boolean
    dot?: boolean
    badge?: boolean
    isFrame?: boolean
    isCache?: boolean
    permissionCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SystemMenusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | SystemMenus$childrenArgs<ExtArgs>
    parent?: boolean | SystemMenus$parentArgs<ExtArgs>
    systemRoles?: boolean | SystemMenus$systemRolesArgs<ExtArgs>
    _count?: boolean | SystemMenusCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SystemMenusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemMenus"
    objects: {
      children: Prisma.$SystemMenusPayload<ExtArgs>[]
      parent: Prisma.$SystemMenusPayload<ExtArgs> | null
      systemRoles: Prisma.$SystemRoleMenuRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      path: string
      component: string | null
      query: string | null
      icon: string | null
      orderNo: number
      parentId: number
      type: number
      status: number
      noClosable: number
      hidden: number
      activeMenu: string | null
      guard: string | null
      dot: number
      badge: string | null
      isFrame: number | null
      isCache: number
      permissionCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemMenus"]>
    composites: {}
  }


  type SystemMenusGetPayload<S extends boolean | null | undefined | SystemMenusDefaultArgs> = $Result.GetResult<Prisma.$SystemMenusPayload, S>

  type SystemMenusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemMenusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemMenusCountAggregateInputType | true
    }

  export interface SystemMenusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemMenus'], meta: { name: 'SystemMenus' } }
    /**
     * Find zero or one SystemMenus that matches the filter.
     * @param {SystemMenusFindUniqueArgs} args - Arguments to find a SystemMenus
     * @example
     * // Get one SystemMenus
     * const systemMenus = await prisma.systemMenus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemMenusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemMenusFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemMenus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemMenusFindUniqueOrThrowArgs} args - Arguments to find a SystemMenus
     * @example
     * // Get one SystemMenus
     * const systemMenus = await prisma.systemMenus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemMenusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemMenusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusFindFirstArgs} args - Arguments to find a SystemMenus
     * @example
     * // Get one SystemMenus
     * const systemMenus = await prisma.systemMenus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemMenusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemMenusFindFirstArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemMenus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusFindFirstOrThrowArgs} args - Arguments to find a SystemMenus
     * @example
     * // Get one SystemMenus
     * const systemMenus = await prisma.systemMenus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemMenusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemMenusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemMenus
     * const systemMenus = await prisma.systemMenus.findMany()
     * 
     * // Get first 10 SystemMenus
     * const systemMenus = await prisma.systemMenus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemMenusWithIdOnly = await prisma.systemMenus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemMenusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemMenusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemMenus.
     * @param {SystemMenusCreateArgs} args - Arguments to create a SystemMenus.
     * @example
     * // Create one SystemMenus
     * const SystemMenus = await prisma.systemMenus.create({
     *   data: {
     *     // ... data to create a SystemMenus
     *   }
     * })
     * 
    **/
    create<T extends SystemMenusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemMenusCreateArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemMenus.
     * @param {SystemMenusCreateManyArgs} args - Arguments to create many SystemMenus.
     * @example
     * // Create many SystemMenus
     * const systemMenus = await prisma.systemMenus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemMenusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemMenusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemMenus.
     * @param {SystemMenusDeleteArgs} args - Arguments to delete one SystemMenus.
     * @example
     * // Delete one SystemMenus
     * const SystemMenus = await prisma.systemMenus.delete({
     *   where: {
     *     // ... filter to delete one SystemMenus
     *   }
     * })
     * 
    **/
    delete<T extends SystemMenusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemMenusDeleteArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemMenus.
     * @param {SystemMenusUpdateArgs} args - Arguments to update one SystemMenus.
     * @example
     * // Update one SystemMenus
     * const systemMenus = await prisma.systemMenus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemMenusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemMenusUpdateArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemMenus.
     * @param {SystemMenusDeleteManyArgs} args - Arguments to filter SystemMenus to delete.
     * @example
     * // Delete a few SystemMenus
     * const { count } = await prisma.systemMenus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemMenusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemMenusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemMenus
     * const systemMenus = await prisma.systemMenus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemMenusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemMenusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemMenus.
     * @param {SystemMenusUpsertArgs} args - Arguments to update or create a SystemMenus.
     * @example
     * // Update or create a SystemMenus
     * const systemMenus = await prisma.systemMenus.upsert({
     *   create: {
     *     // ... data to create a SystemMenus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemMenus we want to update
     *   }
     * })
    **/
    upsert<T extends SystemMenusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemMenusUpsertArgs<ExtArgs>>
    ): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusCountArgs} args - Arguments to filter SystemMenus to count.
     * @example
     * // Count the number of SystemMenus
     * const count = await prisma.systemMenus.count({
     *   where: {
     *     // ... the filter for the SystemMenus we want to count
     *   }
     * })
    **/
    count<T extends SystemMenusCountArgs>(
      args?: Subset<T, SystemMenusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemMenusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemMenusAggregateArgs>(args: Subset<T, SystemMenusAggregateArgs>): Prisma.PrismaPromise<GetSystemMenusAggregateType<T>>

    /**
     * Group by SystemMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMenusGroupByArgs} args - Group by arguments.
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
      T extends SystemMenusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemMenusGroupByArgs['orderBy'] }
        : { orderBy?: SystemMenusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemMenusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemMenusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemMenus model
   */
  readonly fields: SystemMenusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemMenus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemMenusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    children<T extends SystemMenus$childrenArgs<ExtArgs> = {}>(args?: Subset<T, SystemMenus$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findMany'> | Null>;

    parent<T extends SystemMenus$parentArgs<ExtArgs> = {}>(args?: Subset<T, SystemMenus$parentArgs<ExtArgs>>): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    systemRoles<T extends SystemMenus$systemRolesArgs<ExtArgs> = {}>(args?: Subset<T, SystemMenus$systemRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemMenus model
   */ 
  interface SystemMenusFieldRefs {
    readonly id: FieldRef<"SystemMenus", 'Int'>
    readonly name: FieldRef<"SystemMenus", 'String'>
    readonly path: FieldRef<"SystemMenus", 'String'>
    readonly component: FieldRef<"SystemMenus", 'String'>
    readonly query: FieldRef<"SystemMenus", 'String'>
    readonly icon: FieldRef<"SystemMenus", 'String'>
    readonly orderNo: FieldRef<"SystemMenus", 'Int'>
    readonly parentId: FieldRef<"SystemMenus", 'Int'>
    readonly type: FieldRef<"SystemMenus", 'Int'>
    readonly status: FieldRef<"SystemMenus", 'Int'>
    readonly noClosable: FieldRef<"SystemMenus", 'Int'>
    readonly hidden: FieldRef<"SystemMenus", 'Int'>
    readonly activeMenu: FieldRef<"SystemMenus", 'String'>
    readonly guard: FieldRef<"SystemMenus", 'String'>
    readonly dot: FieldRef<"SystemMenus", 'Int'>
    readonly badge: FieldRef<"SystemMenus", 'String'>
    readonly isFrame: FieldRef<"SystemMenus", 'Int'>
    readonly isCache: FieldRef<"SystemMenus", 'Int'>
    readonly permissionCode: FieldRef<"SystemMenus", 'String'>
    readonly createdAt: FieldRef<"SystemMenus", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemMenus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemMenus findUnique
   */
  export type SystemMenusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * Filter, which SystemMenus to fetch.
     */
    where: SystemMenusWhereUniqueInput
  }

  /**
   * SystemMenus findUniqueOrThrow
   */
  export type SystemMenusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * Filter, which SystemMenus to fetch.
     */
    where: SystemMenusWhereUniqueInput
  }

  /**
   * SystemMenus findFirst
   */
  export type SystemMenusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * Filter, which SystemMenus to fetch.
     */
    where?: SystemMenusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMenus to fetch.
     */
    orderBy?: SystemMenusOrderByWithRelationInput | SystemMenusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMenus.
     */
    cursor?: SystemMenusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMenus.
     */
    distinct?: SystemMenusScalarFieldEnum | SystemMenusScalarFieldEnum[]
  }

  /**
   * SystemMenus findFirstOrThrow
   */
  export type SystemMenusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * Filter, which SystemMenus to fetch.
     */
    where?: SystemMenusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMenus to fetch.
     */
    orderBy?: SystemMenusOrderByWithRelationInput | SystemMenusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMenus.
     */
    cursor?: SystemMenusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMenus.
     */
    distinct?: SystemMenusScalarFieldEnum | SystemMenusScalarFieldEnum[]
  }

  /**
   * SystemMenus findMany
   */
  export type SystemMenusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * Filter, which SystemMenus to fetch.
     */
    where?: SystemMenusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMenus to fetch.
     */
    orderBy?: SystemMenusOrderByWithRelationInput | SystemMenusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemMenus.
     */
    cursor?: SystemMenusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMenus.
     */
    skip?: number
    distinct?: SystemMenusScalarFieldEnum | SystemMenusScalarFieldEnum[]
  }

  /**
   * SystemMenus create
   */
  export type SystemMenusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemMenus.
     */
    data: XOR<SystemMenusCreateInput, SystemMenusUncheckedCreateInput>
  }

  /**
   * SystemMenus createMany
   */
  export type SystemMenusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemMenus.
     */
    data: SystemMenusCreateManyInput | SystemMenusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemMenus update
   */
  export type SystemMenusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemMenus.
     */
    data: XOR<SystemMenusUpdateInput, SystemMenusUncheckedUpdateInput>
    /**
     * Choose, which SystemMenus to update.
     */
    where: SystemMenusWhereUniqueInput
  }

  /**
   * SystemMenus updateMany
   */
  export type SystemMenusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemMenus.
     */
    data: XOR<SystemMenusUpdateManyMutationInput, SystemMenusUncheckedUpdateManyInput>
    /**
     * Filter which SystemMenus to update
     */
    where?: SystemMenusWhereInput
  }

  /**
   * SystemMenus upsert
   */
  export type SystemMenusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemMenus to update in case it exists.
     */
    where: SystemMenusWhereUniqueInput
    /**
     * In case the SystemMenus found by the `where` argument doesn't exist, create a new SystemMenus with this data.
     */
    create: XOR<SystemMenusCreateInput, SystemMenusUncheckedCreateInput>
    /**
     * In case the SystemMenus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemMenusUpdateInput, SystemMenusUncheckedUpdateInput>
  }

  /**
   * SystemMenus delete
   */
  export type SystemMenusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    /**
     * Filter which SystemMenus to delete.
     */
    where: SystemMenusWhereUniqueInput
  }

  /**
   * SystemMenus deleteMany
   */
  export type SystemMenusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMenus to delete
     */
    where?: SystemMenusWhereInput
  }

  /**
   * SystemMenus.children
   */
  export type SystemMenus$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    where?: SystemMenusWhereInput
    orderBy?: SystemMenusOrderByWithRelationInput | SystemMenusOrderByWithRelationInput[]
    cursor?: SystemMenusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemMenusScalarFieldEnum | SystemMenusScalarFieldEnum[]
  }

  /**
   * SystemMenus.parent
   */
  export type SystemMenus$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
    where?: SystemMenusWhereInput
  }

  /**
   * SystemMenus.systemRoles
   */
  export type SystemMenus$systemRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    where?: SystemRoleMenuRelationWhereInput
    orderBy?: SystemRoleMenuRelationOrderByWithRelationInput | SystemRoleMenuRelationOrderByWithRelationInput[]
    cursor?: SystemRoleMenuRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemRoleMenuRelationScalarFieldEnum | SystemRoleMenuRelationScalarFieldEnum[]
  }

  /**
   * SystemMenus without action
   */
  export type SystemMenusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMenus
     */
    select?: SystemMenusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMenusInclude<ExtArgs> | null
  }


  /**
   * Model SystemUsers
   */

  export type AggregateSystemUsers = {
    _count: SystemUsersCountAggregateOutputType | null
    _avg: SystemUsersAvgAggregateOutputType | null
    _sum: SystemUsersSumAggregateOutputType | null
    _min: SystemUsersMinAggregateOutputType | null
    _max: SystemUsersMaxAggregateOutputType | null
  }

  export type SystemUsersAvgAggregateOutputType = {
    id: number | null
    type: number | null
    status: number | null
    orderNo: number | null
  }

  export type SystemUsersSumAggregateOutputType = {
    id: number | null
    type: number | null
    status: number | null
    orderNo: number | null
  }

  export type SystemUsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    type: number | null
    status: number | null
    orderNo: number | null
    unionId: string | null
    openId: string | null
    loginIP: string | null
    loginAt: Date | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemUsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    type: number | null
    status: number | null
    orderNo: number | null
    unionId: string | null
    openId: string | null
    loginIP: string | null
    loginAt: Date | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemUsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    type: number
    status: number
    orderNo: number
    unionId: number
    openId: number
    loginIP: number
    loginAt: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemUsersAvgAggregateInputType = {
    id?: true
    type?: true
    status?: true
    orderNo?: true
  }

  export type SystemUsersSumAggregateInputType = {
    id?: true
    type?: true
    status?: true
    orderNo?: true
  }

  export type SystemUsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    status?: true
    orderNo?: true
    unionId?: true
    openId?: true
    loginIP?: true
    loginAt?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemUsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    status?: true
    orderNo?: true
    unionId?: true
    openId?: true
    loginIP?: true
    loginAt?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemUsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    status?: true
    orderNo?: true
    unionId?: true
    openId?: true
    loginIP?: true
    loginAt?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemUsers to aggregate.
     */
    where?: SystemUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUsers to fetch.
     */
    orderBy?: SystemUsersOrderByWithRelationInput | SystemUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemUsers
    **/
    _count?: true | SystemUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemUsersMaxAggregateInputType
  }

  export type GetSystemUsersAggregateType<T extends SystemUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemUsers[P]>
      : GetScalarType<T[P], AggregateSystemUsers[P]>
  }




  export type SystemUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemUsersWhereInput
    orderBy?: SystemUsersOrderByWithAggregationInput | SystemUsersOrderByWithAggregationInput[]
    by: SystemUsersScalarFieldEnum[] | SystemUsersScalarFieldEnum
    having?: SystemUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemUsersCountAggregateInputType | true
    _avg?: SystemUsersAvgAggregateInputType
    _sum?: SystemUsersSumAggregateInputType
    _min?: SystemUsersMinAggregateInputType
    _max?: SystemUsersMaxAggregateInputType
  }

  export type SystemUsersGroupByOutputType = {
    id: number
    username: string
    password: string
    type: number
    status: number
    orderNo: number
    unionId: string | null
    openId: string | null
    loginIP: string | null
    loginAt: Date | null
    remark: string | null
    createdAt: Date
    updatedAt: Date
    _count: SystemUsersCountAggregateOutputType | null
    _avg: SystemUsersAvgAggregateOutputType | null
    _sum: SystemUsersSumAggregateOutputType | null
    _min: SystemUsersMinAggregateOutputType | null
    _max: SystemUsersMaxAggregateOutputType | null
  }

  type GetSystemUsersGroupByPayload<T extends SystemUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemUsersGroupByOutputType[P]>
            : GetScalarType<T[P], SystemUsersGroupByOutputType[P]>
        }
      >
    >


  export type SystemUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
    status?: boolean
    orderNo?: boolean
    unionId?: boolean
    openId?: boolean
    loginIP?: boolean
    loginAt?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | SystemUsers$profileArgs<ExtArgs>
    logs?: boolean | SystemUsers$logsArgs<ExtArgs>
    roles?: boolean | SystemUsers$rolesArgs<ExtArgs>
    _count?: boolean | SystemUsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemUsers"]>

  export type SystemUsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
    status?: boolean
    orderNo?: boolean
    unionId?: boolean
    openId?: boolean
    loginIP?: boolean
    loginAt?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SystemUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | SystemUsers$profileArgs<ExtArgs>
    logs?: boolean | SystemUsers$logsArgs<ExtArgs>
    roles?: boolean | SystemUsers$rolesArgs<ExtArgs>
    _count?: boolean | SystemUsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SystemUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemUsers"
    objects: {
      profile: Prisma.$SystemUserProfilePayload<ExtArgs> | null
      logs: Prisma.$SystemLogsPayload<ExtArgs>[]
      roles: Prisma.$SystemUserRoleRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      type: number
      status: number
      orderNo: number
      unionId: string | null
      openId: string | null
      loginIP: string | null
      loginAt: Date | null
      remark: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemUsers"]>
    composites: {}
  }


  type SystemUsersGetPayload<S extends boolean | null | undefined | SystemUsersDefaultArgs> = $Result.GetResult<Prisma.$SystemUsersPayload, S>

  type SystemUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemUsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemUsersCountAggregateInputType | true
    }

  export interface SystemUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemUsers'], meta: { name: 'SystemUsers' } }
    /**
     * Find zero or one SystemUsers that matches the filter.
     * @param {SystemUsersFindUniqueArgs} args - Arguments to find a SystemUsers
     * @example
     * // Get one SystemUsers
     * const systemUsers = await prisma.systemUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemUsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUsersFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemUsers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemUsersFindUniqueOrThrowArgs} args - Arguments to find a SystemUsers
     * @example
     * // Get one SystemUsers
     * const systemUsers = await prisma.systemUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemUsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersFindFirstArgs} args - Arguments to find a SystemUsers
     * @example
     * // Get one SystemUsers
     * const systemUsers = await prisma.systemUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemUsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUsersFindFirstArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersFindFirstOrThrowArgs} args - Arguments to find a SystemUsers
     * @example
     * // Get one SystemUsers
     * const systemUsers = await prisma.systemUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemUsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemUsers
     * const systemUsers = await prisma.systemUsers.findMany()
     * 
     * // Get first 10 SystemUsers
     * const systemUsers = await prisma.systemUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemUsersWithIdOnly = await prisma.systemUsers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemUsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemUsers.
     * @param {SystemUsersCreateArgs} args - Arguments to create a SystemUsers.
     * @example
     * // Create one SystemUsers
     * const SystemUsers = await prisma.systemUsers.create({
     *   data: {
     *     // ... data to create a SystemUsers
     *   }
     * })
     * 
    **/
    create<T extends SystemUsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUsersCreateArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemUsers.
     * @param {SystemUsersCreateManyArgs} args - Arguments to create many SystemUsers.
     * @example
     * // Create many SystemUsers
     * const systemUsers = await prisma.systemUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemUsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemUsers.
     * @param {SystemUsersDeleteArgs} args - Arguments to delete one SystemUsers.
     * @example
     * // Delete one SystemUsers
     * const SystemUsers = await prisma.systemUsers.delete({
     *   where: {
     *     // ... filter to delete one SystemUsers
     *   }
     * })
     * 
    **/
    delete<T extends SystemUsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUsersDeleteArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemUsers.
     * @param {SystemUsersUpdateArgs} args - Arguments to update one SystemUsers.
     * @example
     * // Update one SystemUsers
     * const systemUsers = await prisma.systemUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemUsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUsersUpdateArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemUsers.
     * @param {SystemUsersDeleteManyArgs} args - Arguments to filter SystemUsers to delete.
     * @example
     * // Delete a few SystemUsers
     * const { count } = await prisma.systemUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemUsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemUsers
     * const systemUsers = await prisma.systemUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemUsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemUsers.
     * @param {SystemUsersUpsertArgs} args - Arguments to update or create a SystemUsers.
     * @example
     * // Update or create a SystemUsers
     * const systemUsers = await prisma.systemUsers.upsert({
     *   create: {
     *     // ... data to create a SystemUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemUsers we want to update
     *   }
     * })
    **/
    upsert<T extends SystemUsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUsersUpsertArgs<ExtArgs>>
    ): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersCountArgs} args - Arguments to filter SystemUsers to count.
     * @example
     * // Count the number of SystemUsers
     * const count = await prisma.systemUsers.count({
     *   where: {
     *     // ... the filter for the SystemUsers we want to count
     *   }
     * })
    **/
    count<T extends SystemUsersCountArgs>(
      args?: Subset<T, SystemUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemUsersAggregateArgs>(args: Subset<T, SystemUsersAggregateArgs>): Prisma.PrismaPromise<GetSystemUsersAggregateType<T>>

    /**
     * Group by SystemUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUsersGroupByArgs} args - Group by arguments.
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
      T extends SystemUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemUsersGroupByArgs['orderBy'] }
        : { orderBy?: SystemUsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemUsers model
   */
  readonly fields: SystemUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    profile<T extends SystemUsers$profileArgs<ExtArgs> = {}>(args?: Subset<T, SystemUsers$profileArgs<ExtArgs>>): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    logs<T extends SystemUsers$logsArgs<ExtArgs> = {}>(args?: Subset<T, SystemUsers$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'findMany'> | Null>;

    roles<T extends SystemUsers$rolesArgs<ExtArgs> = {}>(args?: Subset<T, SystemUsers$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemUsers model
   */ 
  interface SystemUsersFieldRefs {
    readonly id: FieldRef<"SystemUsers", 'Int'>
    readonly username: FieldRef<"SystemUsers", 'String'>
    readonly password: FieldRef<"SystemUsers", 'String'>
    readonly type: FieldRef<"SystemUsers", 'Int'>
    readonly status: FieldRef<"SystemUsers", 'Int'>
    readonly orderNo: FieldRef<"SystemUsers", 'Int'>
    readonly unionId: FieldRef<"SystemUsers", 'String'>
    readonly openId: FieldRef<"SystemUsers", 'String'>
    readonly loginIP: FieldRef<"SystemUsers", 'String'>
    readonly loginAt: FieldRef<"SystemUsers", 'DateTime'>
    readonly remark: FieldRef<"SystemUsers", 'String'>
    readonly createdAt: FieldRef<"SystemUsers", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemUsers findUnique
   */
  export type SystemUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * Filter, which SystemUsers to fetch.
     */
    where: SystemUsersWhereUniqueInput
  }

  /**
   * SystemUsers findUniqueOrThrow
   */
  export type SystemUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * Filter, which SystemUsers to fetch.
     */
    where: SystemUsersWhereUniqueInput
  }

  /**
   * SystemUsers findFirst
   */
  export type SystemUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * Filter, which SystemUsers to fetch.
     */
    where?: SystemUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUsers to fetch.
     */
    orderBy?: SystemUsersOrderByWithRelationInput | SystemUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemUsers.
     */
    cursor?: SystemUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemUsers.
     */
    distinct?: SystemUsersScalarFieldEnum | SystemUsersScalarFieldEnum[]
  }

  /**
   * SystemUsers findFirstOrThrow
   */
  export type SystemUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * Filter, which SystemUsers to fetch.
     */
    where?: SystemUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUsers to fetch.
     */
    orderBy?: SystemUsersOrderByWithRelationInput | SystemUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemUsers.
     */
    cursor?: SystemUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemUsers.
     */
    distinct?: SystemUsersScalarFieldEnum | SystemUsersScalarFieldEnum[]
  }

  /**
   * SystemUsers findMany
   */
  export type SystemUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * Filter, which SystemUsers to fetch.
     */
    where?: SystemUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUsers to fetch.
     */
    orderBy?: SystemUsersOrderByWithRelationInput | SystemUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemUsers.
     */
    cursor?: SystemUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUsers.
     */
    skip?: number
    distinct?: SystemUsersScalarFieldEnum | SystemUsersScalarFieldEnum[]
  }

  /**
   * SystemUsers create
   */
  export type SystemUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemUsers.
     */
    data: XOR<SystemUsersCreateInput, SystemUsersUncheckedCreateInput>
  }

  /**
   * SystemUsers createMany
   */
  export type SystemUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemUsers.
     */
    data: SystemUsersCreateManyInput | SystemUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemUsers update
   */
  export type SystemUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemUsers.
     */
    data: XOR<SystemUsersUpdateInput, SystemUsersUncheckedUpdateInput>
    /**
     * Choose, which SystemUsers to update.
     */
    where: SystemUsersWhereUniqueInput
  }

  /**
   * SystemUsers updateMany
   */
  export type SystemUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemUsers.
     */
    data: XOR<SystemUsersUpdateManyMutationInput, SystemUsersUncheckedUpdateManyInput>
    /**
     * Filter which SystemUsers to update
     */
    where?: SystemUsersWhereInput
  }

  /**
   * SystemUsers upsert
   */
  export type SystemUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemUsers to update in case it exists.
     */
    where: SystemUsersWhereUniqueInput
    /**
     * In case the SystemUsers found by the `where` argument doesn't exist, create a new SystemUsers with this data.
     */
    create: XOR<SystemUsersCreateInput, SystemUsersUncheckedCreateInput>
    /**
     * In case the SystemUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemUsersUpdateInput, SystemUsersUncheckedUpdateInput>
  }

  /**
   * SystemUsers delete
   */
  export type SystemUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
    /**
     * Filter which SystemUsers to delete.
     */
    where: SystemUsersWhereUniqueInput
  }

  /**
   * SystemUsers deleteMany
   */
  export type SystemUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemUsers to delete
     */
    where?: SystemUsersWhereInput
  }

  /**
   * SystemUsers.profile
   */
  export type SystemUsers$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    where?: SystemUserProfileWhereInput
  }

  /**
   * SystemUsers.logs
   */
  export type SystemUsers$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    where?: SystemLogsWhereInput
    orderBy?: SystemLogsOrderByWithRelationInput | SystemLogsOrderByWithRelationInput[]
    cursor?: SystemLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemLogsScalarFieldEnum | SystemLogsScalarFieldEnum[]
  }

  /**
   * SystemUsers.roles
   */
  export type SystemUsers$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    where?: SystemUserRoleRelationWhereInput
    orderBy?: SystemUserRoleRelationOrderByWithRelationInput | SystemUserRoleRelationOrderByWithRelationInput[]
    cursor?: SystemUserRoleRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemUserRoleRelationScalarFieldEnum | SystemUserRoleRelationScalarFieldEnum[]
  }

  /**
   * SystemUsers without action
   */
  export type SystemUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUsers
     */
    select?: SystemUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUsersInclude<ExtArgs> | null
  }


  /**
   * Model SystemUserProfile
   */

  export type AggregateSystemUserProfile = {
    _count: SystemUserProfileCountAggregateOutputType | null
    _avg: SystemUserProfileAvgAggregateOutputType | null
    _sum: SystemUserProfileSumAggregateOutputType | null
    _min: SystemUserProfileMinAggregateOutputType | null
    _max: SystemUserProfileMaxAggregateOutputType | null
  }

  export type SystemUserProfileAvgAggregateOutputType = {
    id: number | null
    gender: number | null
    userId: number | null
  }

  export type SystemUserProfileSumAggregateOutputType = {
    id: number | null
    gender: number | null
    userId: number | null
  }

  export type SystemUserProfileMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    expired: Date | null
    gender: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type SystemUserProfileMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    expired: Date | null
    gender: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type SystemUserProfileCountAggregateOutputType = {
    id: number
    nickname: number
    email: number
    phone: number
    avatar: number
    expired: number
    gender: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SystemUserProfileAvgAggregateInputType = {
    id?: true
    gender?: true
    userId?: true
  }

  export type SystemUserProfileSumAggregateInputType = {
    id?: true
    gender?: true
    userId?: true
  }

  export type SystemUserProfileMinAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    phone?: true
    avatar?: true
    expired?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SystemUserProfileMaxAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    phone?: true
    avatar?: true
    expired?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SystemUserProfileCountAggregateInputType = {
    id?: true
    nickname?: true
    email?: true
    phone?: true
    avatar?: true
    expired?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SystemUserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemUserProfile to aggregate.
     */
    where?: SystemUserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserProfiles to fetch.
     */
    orderBy?: SystemUserProfileOrderByWithRelationInput | SystemUserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemUserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemUserProfiles
    **/
    _count?: true | SystemUserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemUserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemUserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemUserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemUserProfileMaxAggregateInputType
  }

  export type GetSystemUserProfileAggregateType<T extends SystemUserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemUserProfile[P]>
      : GetScalarType<T[P], AggregateSystemUserProfile[P]>
  }




  export type SystemUserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemUserProfileWhereInput
    orderBy?: SystemUserProfileOrderByWithAggregationInput | SystemUserProfileOrderByWithAggregationInput[]
    by: SystemUserProfileScalarFieldEnum[] | SystemUserProfileScalarFieldEnum
    having?: SystemUserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemUserProfileCountAggregateInputType | true
    _avg?: SystemUserProfileAvgAggregateInputType
    _sum?: SystemUserProfileSumAggregateInputType
    _min?: SystemUserProfileMinAggregateInputType
    _max?: SystemUserProfileMaxAggregateInputType
  }

  export type SystemUserProfileGroupByOutputType = {
    id: number
    nickname: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    expired: Date | null
    gender: number | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: SystemUserProfileCountAggregateOutputType | null
    _avg: SystemUserProfileAvgAggregateOutputType | null
    _sum: SystemUserProfileSumAggregateOutputType | null
    _min: SystemUserProfileMinAggregateOutputType | null
    _max: SystemUserProfileMaxAggregateOutputType | null
  }

  type GetSystemUserProfileGroupByPayload<T extends SystemUserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemUserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemUserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemUserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SystemUserProfileGroupByOutputType[P]>
        }
      >
    >


  export type SystemUserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    expired?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | SystemUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemUserProfile"]>

  export type SystemUserProfileSelectScalar = {
    id?: boolean
    nickname?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    expired?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }


  export type SystemUserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SystemUsersDefaultArgs<ExtArgs>
  }


  export type $SystemUserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemUserProfile"
    objects: {
      user: Prisma.$SystemUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string | null
      email: string | null
      phone: string | null
      avatar: string | null
      expired: Date | null
      gender: number | null
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["systemUserProfile"]>
    composites: {}
  }


  type SystemUserProfileGetPayload<S extends boolean | null | undefined | SystemUserProfileDefaultArgs> = $Result.GetResult<Prisma.$SystemUserProfilePayload, S>

  type SystemUserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemUserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemUserProfileCountAggregateInputType | true
    }

  export interface SystemUserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemUserProfile'], meta: { name: 'SystemUserProfile' } }
    /**
     * Find zero or one SystemUserProfile that matches the filter.
     * @param {SystemUserProfileFindUniqueArgs} args - Arguments to find a SystemUserProfile
     * @example
     * // Get one SystemUserProfile
     * const systemUserProfile = await prisma.systemUserProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemUserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemUserProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemUserProfileFindUniqueOrThrowArgs} args - Arguments to find a SystemUserProfile
     * @example
     * // Get one SystemUserProfile
     * const systemUserProfile = await prisma.systemUserProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemUserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemUserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileFindFirstArgs} args - Arguments to find a SystemUserProfile
     * @example
     * // Get one SystemUserProfile
     * const systemUserProfile = await prisma.systemUserProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemUserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemUserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileFindFirstOrThrowArgs} args - Arguments to find a SystemUserProfile
     * @example
     * // Get one SystemUserProfile
     * const systemUserProfile = await prisma.systemUserProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemUserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemUserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemUserProfiles
     * const systemUserProfiles = await prisma.systemUserProfile.findMany()
     * 
     * // Get first 10 SystemUserProfiles
     * const systemUserProfiles = await prisma.systemUserProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemUserProfileWithIdOnly = await prisma.systemUserProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemUserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemUserProfile.
     * @param {SystemUserProfileCreateArgs} args - Arguments to create a SystemUserProfile.
     * @example
     * // Create one SystemUserProfile
     * const SystemUserProfile = await prisma.systemUserProfile.create({
     *   data: {
     *     // ... data to create a SystemUserProfile
     *   }
     * })
     * 
    **/
    create<T extends SystemUserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserProfileCreateArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemUserProfiles.
     * @param {SystemUserProfileCreateManyArgs} args - Arguments to create many SystemUserProfiles.
     * @example
     * // Create many SystemUserProfiles
     * const systemUserProfile = await prisma.systemUserProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemUserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemUserProfile.
     * @param {SystemUserProfileDeleteArgs} args - Arguments to delete one SystemUserProfile.
     * @example
     * // Delete one SystemUserProfile
     * const SystemUserProfile = await prisma.systemUserProfile.delete({
     *   where: {
     *     // ... filter to delete one SystemUserProfile
     *   }
     * })
     * 
    **/
    delete<T extends SystemUserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserProfileDeleteArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemUserProfile.
     * @param {SystemUserProfileUpdateArgs} args - Arguments to update one SystemUserProfile.
     * @example
     * // Update one SystemUserProfile
     * const systemUserProfile = await prisma.systemUserProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemUserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserProfileUpdateArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemUserProfiles.
     * @param {SystemUserProfileDeleteManyArgs} args - Arguments to filter SystemUserProfiles to delete.
     * @example
     * // Delete a few SystemUserProfiles
     * const { count } = await prisma.systemUserProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemUserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemUserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemUserProfiles
     * const systemUserProfile = await prisma.systemUserProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemUserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemUserProfile.
     * @param {SystemUserProfileUpsertArgs} args - Arguments to update or create a SystemUserProfile.
     * @example
     * // Update or create a SystemUserProfile
     * const systemUserProfile = await prisma.systemUserProfile.upsert({
     *   create: {
     *     // ... data to create a SystemUserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemUserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends SystemUserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserProfileUpsertArgs<ExtArgs>>
    ): Prisma__SystemUserProfileClient<$Result.GetResult<Prisma.$SystemUserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemUserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileCountArgs} args - Arguments to filter SystemUserProfiles to count.
     * @example
     * // Count the number of SystemUserProfiles
     * const count = await prisma.systemUserProfile.count({
     *   where: {
     *     // ... the filter for the SystemUserProfiles we want to count
     *   }
     * })
    **/
    count<T extends SystemUserProfileCountArgs>(
      args?: Subset<T, SystemUserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemUserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemUserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemUserProfileAggregateArgs>(args: Subset<T, SystemUserProfileAggregateArgs>): Prisma.PrismaPromise<GetSystemUserProfileAggregateType<T>>

    /**
     * Group by SystemUserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserProfileGroupByArgs} args - Group by arguments.
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
      T extends SystemUserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemUserProfileGroupByArgs['orderBy'] }
        : { orderBy?: SystemUserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemUserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemUserProfile model
   */
  readonly fields: SystemUserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemUserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemUserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends SystemUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemUsersDefaultArgs<ExtArgs>>): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemUserProfile model
   */ 
  interface SystemUserProfileFieldRefs {
    readonly id: FieldRef<"SystemUserProfile", 'Int'>
    readonly nickname: FieldRef<"SystemUserProfile", 'String'>
    readonly email: FieldRef<"SystemUserProfile", 'String'>
    readonly phone: FieldRef<"SystemUserProfile", 'String'>
    readonly avatar: FieldRef<"SystemUserProfile", 'String'>
    readonly expired: FieldRef<"SystemUserProfile", 'DateTime'>
    readonly gender: FieldRef<"SystemUserProfile", 'Int'>
    readonly createdAt: FieldRef<"SystemUserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemUserProfile", 'DateTime'>
    readonly userId: FieldRef<"SystemUserProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemUserProfile findUnique
   */
  export type SystemUserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserProfile to fetch.
     */
    where: SystemUserProfileWhereUniqueInput
  }

  /**
   * SystemUserProfile findUniqueOrThrow
   */
  export type SystemUserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserProfile to fetch.
     */
    where: SystemUserProfileWhereUniqueInput
  }

  /**
   * SystemUserProfile findFirst
   */
  export type SystemUserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserProfile to fetch.
     */
    where?: SystemUserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserProfiles to fetch.
     */
    orderBy?: SystemUserProfileOrderByWithRelationInput | SystemUserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemUserProfiles.
     */
    cursor?: SystemUserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemUserProfiles.
     */
    distinct?: SystemUserProfileScalarFieldEnum | SystemUserProfileScalarFieldEnum[]
  }

  /**
   * SystemUserProfile findFirstOrThrow
   */
  export type SystemUserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserProfile to fetch.
     */
    where?: SystemUserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserProfiles to fetch.
     */
    orderBy?: SystemUserProfileOrderByWithRelationInput | SystemUserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemUserProfiles.
     */
    cursor?: SystemUserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemUserProfiles.
     */
    distinct?: SystemUserProfileScalarFieldEnum | SystemUserProfileScalarFieldEnum[]
  }

  /**
   * SystemUserProfile findMany
   */
  export type SystemUserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserProfiles to fetch.
     */
    where?: SystemUserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserProfiles to fetch.
     */
    orderBy?: SystemUserProfileOrderByWithRelationInput | SystemUserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemUserProfiles.
     */
    cursor?: SystemUserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserProfiles.
     */
    skip?: number
    distinct?: SystemUserProfileScalarFieldEnum | SystemUserProfileScalarFieldEnum[]
  }

  /**
   * SystemUserProfile create
   */
  export type SystemUserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemUserProfile.
     */
    data: XOR<SystemUserProfileCreateInput, SystemUserProfileUncheckedCreateInput>
  }

  /**
   * SystemUserProfile createMany
   */
  export type SystemUserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemUserProfiles.
     */
    data: SystemUserProfileCreateManyInput | SystemUserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemUserProfile update
   */
  export type SystemUserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemUserProfile.
     */
    data: XOR<SystemUserProfileUpdateInput, SystemUserProfileUncheckedUpdateInput>
    /**
     * Choose, which SystemUserProfile to update.
     */
    where: SystemUserProfileWhereUniqueInput
  }

  /**
   * SystemUserProfile updateMany
   */
  export type SystemUserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemUserProfiles.
     */
    data: XOR<SystemUserProfileUpdateManyMutationInput, SystemUserProfileUncheckedUpdateManyInput>
    /**
     * Filter which SystemUserProfiles to update
     */
    where?: SystemUserProfileWhereInput
  }

  /**
   * SystemUserProfile upsert
   */
  export type SystemUserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemUserProfile to update in case it exists.
     */
    where: SystemUserProfileWhereUniqueInput
    /**
     * In case the SystemUserProfile found by the `where` argument doesn't exist, create a new SystemUserProfile with this data.
     */
    create: XOR<SystemUserProfileCreateInput, SystemUserProfileUncheckedCreateInput>
    /**
     * In case the SystemUserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemUserProfileUpdateInput, SystemUserProfileUncheckedUpdateInput>
  }

  /**
   * SystemUserProfile delete
   */
  export type SystemUserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
    /**
     * Filter which SystemUserProfile to delete.
     */
    where: SystemUserProfileWhereUniqueInput
  }

  /**
   * SystemUserProfile deleteMany
   */
  export type SystemUserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemUserProfiles to delete
     */
    where?: SystemUserProfileWhereInput
  }

  /**
   * SystemUserProfile without action
   */
  export type SystemUserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserProfile
     */
    select?: SystemUserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserProfileInclude<ExtArgs> | null
  }


  /**
   * Model SystemLogs
   */

  export type AggregateSystemLogs = {
    _count: SystemLogsCountAggregateOutputType | null
    _avg: SystemLogsAvgAggregateOutputType | null
    _sum: SystemLogsSumAggregateOutputType | null
    _min: SystemLogsMinAggregateOutputType | null
    _max: SystemLogsMaxAggregateOutputType | null
  }

  export type SystemLogsAvgAggregateOutputType = {
    id: number | null
    type: number | null
    status: number | null
    userId: number | null
  }

  export type SystemLogsSumAggregateOutputType = {
    id: number | null
    type: number | null
    status: number | null
    userId: number | null
  }

  export type SystemLogsMinAggregateOutputType = {
    id: number | null
    api: string | null
    type: number | null
    status: number | null
    content: string | null
    username: string | null
    ip: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type SystemLogsMaxAggregateOutputType = {
    id: number | null
    api: string | null
    type: number | null
    status: number | null
    content: string | null
    username: string | null
    ip: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type SystemLogsCountAggregateOutputType = {
    id: number
    api: number
    type: number
    status: number
    content: number
    username: number
    ip: number
    createdAt: number
    userId: number
    _all: number
  }


  export type SystemLogsAvgAggregateInputType = {
    id?: true
    type?: true
    status?: true
    userId?: true
  }

  export type SystemLogsSumAggregateInputType = {
    id?: true
    type?: true
    status?: true
    userId?: true
  }

  export type SystemLogsMinAggregateInputType = {
    id?: true
    api?: true
    type?: true
    status?: true
    content?: true
    username?: true
    ip?: true
    createdAt?: true
    userId?: true
  }

  export type SystemLogsMaxAggregateInputType = {
    id?: true
    api?: true
    type?: true
    status?: true
    content?: true
    username?: true
    ip?: true
    createdAt?: true
    userId?: true
  }

  export type SystemLogsCountAggregateInputType = {
    id?: true
    api?: true
    type?: true
    status?: true
    content?: true
    username?: true
    ip?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type SystemLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to aggregate.
     */
    where?: SystemLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogsOrderByWithRelationInput | SystemLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogsMaxAggregateInputType
  }

  export type GetSystemLogsAggregateType<T extends SystemLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLogs[P]>
      : GetScalarType<T[P], AggregateSystemLogs[P]>
  }




  export type SystemLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogsWhereInput
    orderBy?: SystemLogsOrderByWithAggregationInput | SystemLogsOrderByWithAggregationInput[]
    by: SystemLogsScalarFieldEnum[] | SystemLogsScalarFieldEnum
    having?: SystemLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogsCountAggregateInputType | true
    _avg?: SystemLogsAvgAggregateInputType
    _sum?: SystemLogsSumAggregateInputType
    _min?: SystemLogsMinAggregateInputType
    _max?: SystemLogsMaxAggregateInputType
  }

  export type SystemLogsGroupByOutputType = {
    id: number
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt: Date
    userId: number
    _count: SystemLogsCountAggregateOutputType | null
    _avg: SystemLogsAvgAggregateOutputType | null
    _sum: SystemLogsSumAggregateOutputType | null
    _min: SystemLogsMinAggregateOutputType | null
    _max: SystemLogsMaxAggregateOutputType | null
  }

  type GetSystemLogsGroupByPayload<T extends SystemLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogsGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    api?: boolean
    type?: boolean
    status?: boolean
    content?: boolean
    username?: boolean
    ip?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | SystemUsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemLogs"]>

  export type SystemLogsSelectScalar = {
    id?: boolean
    api?: boolean
    type?: boolean
    status?: boolean
    content?: boolean
    username?: boolean
    ip?: boolean
    createdAt?: boolean
    userId?: boolean
  }


  export type SystemLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SystemUsersDefaultArgs<ExtArgs>
  }


  export type $SystemLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLogs"
    objects: {
      user: Prisma.$SystemUsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      api: string
      type: number
      status: number
      content: string
      username: string
      ip: string
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["systemLogs"]>
    composites: {}
  }


  type SystemLogsGetPayload<S extends boolean | null | undefined | SystemLogsDefaultArgs> = $Result.GetResult<Prisma.$SystemLogsPayload, S>

  type SystemLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemLogsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemLogsCountAggregateInputType | true
    }

  export interface SystemLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLogs'], meta: { name: 'SystemLogs' } }
    /**
     * Find zero or one SystemLogs that matches the filter.
     * @param {SystemLogsFindUniqueArgs} args - Arguments to find a SystemLogs
     * @example
     * // Get one SystemLogs
     * const systemLogs = await prisma.systemLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemLogsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemLogsFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemLogs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemLogsFindUniqueOrThrowArgs} args - Arguments to find a SystemLogs
     * @example
     * // Get one SystemLogs
     * const systemLogs = await prisma.systemLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemLogsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemLogsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsFindFirstArgs} args - Arguments to find a SystemLogs
     * @example
     * // Get one SystemLogs
     * const systemLogs = await prisma.systemLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemLogsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemLogsFindFirstArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsFindFirstOrThrowArgs} args - Arguments to find a SystemLogs
     * @example
     * // Get one SystemLogs
     * const systemLogs = await prisma.systemLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemLogsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemLogsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLogs.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogsWithIdOnly = await prisma.systemLogs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemLogsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemLogsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemLogs.
     * @param {SystemLogsCreateArgs} args - Arguments to create a SystemLogs.
     * @example
     * // Create one SystemLogs
     * const SystemLogs = await prisma.systemLogs.create({
     *   data: {
     *     // ... data to create a SystemLogs
     *   }
     * })
     * 
    **/
    create<T extends SystemLogsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemLogsCreateArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemLogs.
     * @param {SystemLogsCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLogs = await prisma.systemLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemLogsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemLogsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemLogs.
     * @param {SystemLogsDeleteArgs} args - Arguments to delete one SystemLogs.
     * @example
     * // Delete one SystemLogs
     * const SystemLogs = await prisma.systemLogs.delete({
     *   where: {
     *     // ... filter to delete one SystemLogs
     *   }
     * })
     * 
    **/
    delete<T extends SystemLogsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemLogsDeleteArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemLogs.
     * @param {SystemLogsUpdateArgs} args - Arguments to update one SystemLogs.
     * @example
     * // Update one SystemLogs
     * const systemLogs = await prisma.systemLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemLogsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemLogsUpdateArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogsDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemLogsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemLogsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLogs = await prisma.systemLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemLogsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemLogsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemLogs.
     * @param {SystemLogsUpsertArgs} args - Arguments to update or create a SystemLogs.
     * @example
     * // Update or create a SystemLogs
     * const systemLogs = await prisma.systemLogs.upsert({
     *   create: {
     *     // ... data to create a SystemLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLogs we want to update
     *   }
     * })
    **/
    upsert<T extends SystemLogsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemLogsUpsertArgs<ExtArgs>>
    ): Prisma__SystemLogsClient<$Result.GetResult<Prisma.$SystemLogsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLogs.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogsCountArgs>(
      args?: Subset<T, SystemLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemLogsAggregateArgs>(args: Subset<T, SystemLogsAggregateArgs>): Prisma.PrismaPromise<GetSystemLogsAggregateType<T>>

    /**
     * Group by SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogsGroupByArgs} args - Group by arguments.
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
      T extends SystemLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogsGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLogs model
   */
  readonly fields: SystemLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends SystemUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemUsersDefaultArgs<ExtArgs>>): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemLogs model
   */ 
  interface SystemLogsFieldRefs {
    readonly id: FieldRef<"SystemLogs", 'Int'>
    readonly api: FieldRef<"SystemLogs", 'String'>
    readonly type: FieldRef<"SystemLogs", 'Int'>
    readonly status: FieldRef<"SystemLogs", 'Int'>
    readonly content: FieldRef<"SystemLogs", 'String'>
    readonly username: FieldRef<"SystemLogs", 'String'>
    readonly ip: FieldRef<"SystemLogs", 'String'>
    readonly createdAt: FieldRef<"SystemLogs", 'DateTime'>
    readonly userId: FieldRef<"SystemLogs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemLogs findUnique
   */
  export type SystemLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where: SystemLogsWhereUniqueInput
  }

  /**
   * SystemLogs findUniqueOrThrow
   */
  export type SystemLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where: SystemLogsWhereUniqueInput
  }

  /**
   * SystemLogs findFirst
   */
  export type SystemLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogsOrderByWithRelationInput | SystemLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogsScalarFieldEnum | SystemLogsScalarFieldEnum[]
  }

  /**
   * SystemLogs findFirstOrThrow
   */
  export type SystemLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogsOrderByWithRelationInput | SystemLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogsScalarFieldEnum | SystemLogsScalarFieldEnum[]
  }

  /**
   * SystemLogs findMany
   */
  export type SystemLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogsOrderByWithRelationInput | SystemLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogsScalarFieldEnum | SystemLogsScalarFieldEnum[]
  }

  /**
   * SystemLogs create
   */
  export type SystemLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemLogs.
     */
    data: XOR<SystemLogsCreateInput, SystemLogsUncheckedCreateInput>
  }

  /**
   * SystemLogs createMany
   */
  export type SystemLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogsCreateManyInput | SystemLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLogs update
   */
  export type SystemLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemLogs.
     */
    data: XOR<SystemLogsUpdateInput, SystemLogsUncheckedUpdateInput>
    /**
     * Choose, which SystemLogs to update.
     */
    where: SystemLogsWhereUniqueInput
  }

  /**
   * SystemLogs updateMany
   */
  export type SystemLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogsUpdateManyMutationInput, SystemLogsUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogsWhereInput
  }

  /**
   * SystemLogs upsert
   */
  export type SystemLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemLogs to update in case it exists.
     */
    where: SystemLogsWhereUniqueInput
    /**
     * In case the SystemLogs found by the `where` argument doesn't exist, create a new SystemLogs with this data.
     */
    create: XOR<SystemLogsCreateInput, SystemLogsUncheckedCreateInput>
    /**
     * In case the SystemLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogsUpdateInput, SystemLogsUncheckedUpdateInput>
  }

  /**
   * SystemLogs delete
   */
  export type SystemLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
    /**
     * Filter which SystemLogs to delete.
     */
    where: SystemLogsWhereUniqueInput
  }

  /**
   * SystemLogs deleteMany
   */
  export type SystemLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogsWhereInput
  }

  /**
   * SystemLogs without action
   */
  export type SystemLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLogs
     */
    select?: SystemLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogsInclude<ExtArgs> | null
  }


  /**
   * Model SystemDictionaryCategory
   */

  export type AggregateSystemDictionaryCategory = {
    _count: SystemDictionaryCategoryCountAggregateOutputType | null
    _avg: SystemDictionaryCategoryAvgAggregateOutputType | null
    _sum: SystemDictionaryCategorySumAggregateOutputType | null
    _min: SystemDictionaryCategoryMinAggregateOutputType | null
    _max: SystemDictionaryCategoryMaxAggregateOutputType | null
  }

  export type SystemDictionaryCategoryAvgAggregateOutputType = {
    id: number | null
    orderNo: number | null
    status: number | null
  }

  export type SystemDictionaryCategorySumAggregateOutputType = {
    id: number | null
    orderNo: number | null
    status: number | null
  }

  export type SystemDictionaryCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    orderNo: number | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemDictionaryCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    orderNo: number | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemDictionaryCategoryCountAggregateOutputType = {
    id: number
    name: number
    orderNo: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemDictionaryCategoryAvgAggregateInputType = {
    id?: true
    orderNo?: true
    status?: true
  }

  export type SystemDictionaryCategorySumAggregateInputType = {
    id?: true
    orderNo?: true
    status?: true
  }

  export type SystemDictionaryCategoryMinAggregateInputType = {
    id?: true
    name?: true
    orderNo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemDictionaryCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    orderNo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemDictionaryCategoryCountAggregateInputType = {
    id?: true
    name?: true
    orderNo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemDictionaryCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemDictionaryCategory to aggregate.
     */
    where?: SystemDictionaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryCategories to fetch.
     */
    orderBy?: SystemDictionaryCategoryOrderByWithRelationInput | SystemDictionaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemDictionaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemDictionaryCategories
    **/
    _count?: true | SystemDictionaryCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemDictionaryCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemDictionaryCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemDictionaryCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemDictionaryCategoryMaxAggregateInputType
  }

  export type GetSystemDictionaryCategoryAggregateType<T extends SystemDictionaryCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemDictionaryCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemDictionaryCategory[P]>
      : GetScalarType<T[P], AggregateSystemDictionaryCategory[P]>
  }




  export type SystemDictionaryCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemDictionaryCategoryWhereInput
    orderBy?: SystemDictionaryCategoryOrderByWithAggregationInput | SystemDictionaryCategoryOrderByWithAggregationInput[]
    by: SystemDictionaryCategoryScalarFieldEnum[] | SystemDictionaryCategoryScalarFieldEnum
    having?: SystemDictionaryCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemDictionaryCategoryCountAggregateInputType | true
    _avg?: SystemDictionaryCategoryAvgAggregateInputType
    _sum?: SystemDictionaryCategorySumAggregateInputType
    _min?: SystemDictionaryCategoryMinAggregateInputType
    _max?: SystemDictionaryCategoryMaxAggregateInputType
  }

  export type SystemDictionaryCategoryGroupByOutputType = {
    id: number
    name: string
    orderNo: number
    description: string | null
    status: number
    createdAt: Date
    updatedAt: Date
    _count: SystemDictionaryCategoryCountAggregateOutputType | null
    _avg: SystemDictionaryCategoryAvgAggregateOutputType | null
    _sum: SystemDictionaryCategorySumAggregateOutputType | null
    _min: SystemDictionaryCategoryMinAggregateOutputType | null
    _max: SystemDictionaryCategoryMaxAggregateOutputType | null
  }

  type GetSystemDictionaryCategoryGroupByPayload<T extends SystemDictionaryCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemDictionaryCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemDictionaryCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemDictionaryCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SystemDictionaryCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SystemDictionaryCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    orderNo?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dictionaryData?: boolean | SystemDictionaryCategory$dictionaryDataArgs<ExtArgs>
    _count?: boolean | SystemDictionaryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemDictionaryCategory"]>

  export type SystemDictionaryCategorySelectScalar = {
    id?: boolean
    name?: boolean
    orderNo?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SystemDictionaryCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dictionaryData?: boolean | SystemDictionaryCategory$dictionaryDataArgs<ExtArgs>
    _count?: boolean | SystemDictionaryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SystemDictionaryCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemDictionaryCategory"
    objects: {
      dictionaryData: Prisma.$SystemDictionaryDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      orderNo: number
      description: string | null
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemDictionaryCategory"]>
    composites: {}
  }


  type SystemDictionaryCategoryGetPayload<S extends boolean | null | undefined | SystemDictionaryCategoryDefaultArgs> = $Result.GetResult<Prisma.$SystemDictionaryCategoryPayload, S>

  type SystemDictionaryCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemDictionaryCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemDictionaryCategoryCountAggregateInputType | true
    }

  export interface SystemDictionaryCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemDictionaryCategory'], meta: { name: 'SystemDictionaryCategory' } }
    /**
     * Find zero or one SystemDictionaryCategory that matches the filter.
     * @param {SystemDictionaryCategoryFindUniqueArgs} args - Arguments to find a SystemDictionaryCategory
     * @example
     * // Get one SystemDictionaryCategory
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemDictionaryCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemDictionaryCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemDictionaryCategoryFindUniqueOrThrowArgs} args - Arguments to find a SystemDictionaryCategory
     * @example
     * // Get one SystemDictionaryCategory
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemDictionaryCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemDictionaryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryFindFirstArgs} args - Arguments to find a SystemDictionaryCategory
     * @example
     * // Get one SystemDictionaryCategory
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemDictionaryCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemDictionaryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryFindFirstOrThrowArgs} args - Arguments to find a SystemDictionaryCategory
     * @example
     * // Get one SystemDictionaryCategory
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemDictionaryCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemDictionaryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemDictionaryCategories
     * const systemDictionaryCategories = await prisma.systemDictionaryCategory.findMany()
     * 
     * // Get first 10 SystemDictionaryCategories
     * const systemDictionaryCategories = await prisma.systemDictionaryCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemDictionaryCategoryWithIdOnly = await prisma.systemDictionaryCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemDictionaryCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemDictionaryCategory.
     * @param {SystemDictionaryCategoryCreateArgs} args - Arguments to create a SystemDictionaryCategory.
     * @example
     * // Create one SystemDictionaryCategory
     * const SystemDictionaryCategory = await prisma.systemDictionaryCategory.create({
     *   data: {
     *     // ... data to create a SystemDictionaryCategory
     *   }
     * })
     * 
    **/
    create<T extends SystemDictionaryCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryCategoryCreateArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemDictionaryCategories.
     * @param {SystemDictionaryCategoryCreateManyArgs} args - Arguments to create many SystemDictionaryCategories.
     * @example
     * // Create many SystemDictionaryCategories
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemDictionaryCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemDictionaryCategory.
     * @param {SystemDictionaryCategoryDeleteArgs} args - Arguments to delete one SystemDictionaryCategory.
     * @example
     * // Delete one SystemDictionaryCategory
     * const SystemDictionaryCategory = await prisma.systemDictionaryCategory.delete({
     *   where: {
     *     // ... filter to delete one SystemDictionaryCategory
     *   }
     * })
     * 
    **/
    delete<T extends SystemDictionaryCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryCategoryDeleteArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemDictionaryCategory.
     * @param {SystemDictionaryCategoryUpdateArgs} args - Arguments to update one SystemDictionaryCategory.
     * @example
     * // Update one SystemDictionaryCategory
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemDictionaryCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryCategoryUpdateArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemDictionaryCategories.
     * @param {SystemDictionaryCategoryDeleteManyArgs} args - Arguments to filter SystemDictionaryCategories to delete.
     * @example
     * // Delete a few SystemDictionaryCategories
     * const { count } = await prisma.systemDictionaryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemDictionaryCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemDictionaryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemDictionaryCategories
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemDictionaryCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemDictionaryCategory.
     * @param {SystemDictionaryCategoryUpsertArgs} args - Arguments to update or create a SystemDictionaryCategory.
     * @example
     * // Update or create a SystemDictionaryCategory
     * const systemDictionaryCategory = await prisma.systemDictionaryCategory.upsert({
     *   create: {
     *     // ... data to create a SystemDictionaryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemDictionaryCategory we want to update
     *   }
     * })
    **/
    upsert<T extends SystemDictionaryCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryCategoryUpsertArgs<ExtArgs>>
    ): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemDictionaryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryCountArgs} args - Arguments to filter SystemDictionaryCategories to count.
     * @example
     * // Count the number of SystemDictionaryCategories
     * const count = await prisma.systemDictionaryCategory.count({
     *   where: {
     *     // ... the filter for the SystemDictionaryCategories we want to count
     *   }
     * })
    **/
    count<T extends SystemDictionaryCategoryCountArgs>(
      args?: Subset<T, SystemDictionaryCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemDictionaryCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemDictionaryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemDictionaryCategoryAggregateArgs>(args: Subset<T, SystemDictionaryCategoryAggregateArgs>): Prisma.PrismaPromise<GetSystemDictionaryCategoryAggregateType<T>>

    /**
     * Group by SystemDictionaryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryCategoryGroupByArgs} args - Group by arguments.
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
      T extends SystemDictionaryCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemDictionaryCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SystemDictionaryCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemDictionaryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemDictionaryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemDictionaryCategory model
   */
  readonly fields: SystemDictionaryCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemDictionaryCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemDictionaryCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dictionaryData<T extends SystemDictionaryCategory$dictionaryDataArgs<ExtArgs> = {}>(args?: Subset<T, SystemDictionaryCategory$dictionaryDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemDictionaryCategory model
   */ 
  interface SystemDictionaryCategoryFieldRefs {
    readonly id: FieldRef<"SystemDictionaryCategory", 'Int'>
    readonly name: FieldRef<"SystemDictionaryCategory", 'String'>
    readonly orderNo: FieldRef<"SystemDictionaryCategory", 'Int'>
    readonly description: FieldRef<"SystemDictionaryCategory", 'String'>
    readonly status: FieldRef<"SystemDictionaryCategory", 'Int'>
    readonly createdAt: FieldRef<"SystemDictionaryCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemDictionaryCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemDictionaryCategory findUnique
   */
  export type SystemDictionaryCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryCategory to fetch.
     */
    where: SystemDictionaryCategoryWhereUniqueInput
  }

  /**
   * SystemDictionaryCategory findUniqueOrThrow
   */
  export type SystemDictionaryCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryCategory to fetch.
     */
    where: SystemDictionaryCategoryWhereUniqueInput
  }

  /**
   * SystemDictionaryCategory findFirst
   */
  export type SystemDictionaryCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryCategory to fetch.
     */
    where?: SystemDictionaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryCategories to fetch.
     */
    orderBy?: SystemDictionaryCategoryOrderByWithRelationInput | SystemDictionaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemDictionaryCategories.
     */
    cursor?: SystemDictionaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemDictionaryCategories.
     */
    distinct?: SystemDictionaryCategoryScalarFieldEnum | SystemDictionaryCategoryScalarFieldEnum[]
  }

  /**
   * SystemDictionaryCategory findFirstOrThrow
   */
  export type SystemDictionaryCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryCategory to fetch.
     */
    where?: SystemDictionaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryCategories to fetch.
     */
    orderBy?: SystemDictionaryCategoryOrderByWithRelationInput | SystemDictionaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemDictionaryCategories.
     */
    cursor?: SystemDictionaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemDictionaryCategories.
     */
    distinct?: SystemDictionaryCategoryScalarFieldEnum | SystemDictionaryCategoryScalarFieldEnum[]
  }

  /**
   * SystemDictionaryCategory findMany
   */
  export type SystemDictionaryCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryCategories to fetch.
     */
    where?: SystemDictionaryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryCategories to fetch.
     */
    orderBy?: SystemDictionaryCategoryOrderByWithRelationInput | SystemDictionaryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemDictionaryCategories.
     */
    cursor?: SystemDictionaryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryCategories.
     */
    skip?: number
    distinct?: SystemDictionaryCategoryScalarFieldEnum | SystemDictionaryCategoryScalarFieldEnum[]
  }

  /**
   * SystemDictionaryCategory create
   */
  export type SystemDictionaryCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemDictionaryCategory.
     */
    data: XOR<SystemDictionaryCategoryCreateInput, SystemDictionaryCategoryUncheckedCreateInput>
  }

  /**
   * SystemDictionaryCategory createMany
   */
  export type SystemDictionaryCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemDictionaryCategories.
     */
    data: SystemDictionaryCategoryCreateManyInput | SystemDictionaryCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemDictionaryCategory update
   */
  export type SystemDictionaryCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemDictionaryCategory.
     */
    data: XOR<SystemDictionaryCategoryUpdateInput, SystemDictionaryCategoryUncheckedUpdateInput>
    /**
     * Choose, which SystemDictionaryCategory to update.
     */
    where: SystemDictionaryCategoryWhereUniqueInput
  }

  /**
   * SystemDictionaryCategory updateMany
   */
  export type SystemDictionaryCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemDictionaryCategories.
     */
    data: XOR<SystemDictionaryCategoryUpdateManyMutationInput, SystemDictionaryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SystemDictionaryCategories to update
     */
    where?: SystemDictionaryCategoryWhereInput
  }

  /**
   * SystemDictionaryCategory upsert
   */
  export type SystemDictionaryCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemDictionaryCategory to update in case it exists.
     */
    where: SystemDictionaryCategoryWhereUniqueInput
    /**
     * In case the SystemDictionaryCategory found by the `where` argument doesn't exist, create a new SystemDictionaryCategory with this data.
     */
    create: XOR<SystemDictionaryCategoryCreateInput, SystemDictionaryCategoryUncheckedCreateInput>
    /**
     * In case the SystemDictionaryCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemDictionaryCategoryUpdateInput, SystemDictionaryCategoryUncheckedUpdateInput>
  }

  /**
   * SystemDictionaryCategory delete
   */
  export type SystemDictionaryCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
    /**
     * Filter which SystemDictionaryCategory to delete.
     */
    where: SystemDictionaryCategoryWhereUniqueInput
  }

  /**
   * SystemDictionaryCategory deleteMany
   */
  export type SystemDictionaryCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemDictionaryCategories to delete
     */
    where?: SystemDictionaryCategoryWhereInput
  }

  /**
   * SystemDictionaryCategory.dictionaryData
   */
  export type SystemDictionaryCategory$dictionaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    where?: SystemDictionaryDataWhereInput
    orderBy?: SystemDictionaryDataOrderByWithRelationInput | SystemDictionaryDataOrderByWithRelationInput[]
    cursor?: SystemDictionaryDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemDictionaryDataScalarFieldEnum | SystemDictionaryDataScalarFieldEnum[]
  }

  /**
   * SystemDictionaryCategory without action
   */
  export type SystemDictionaryCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryCategory
     */
    select?: SystemDictionaryCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SystemDictionaryData
   */

  export type AggregateSystemDictionaryData = {
    _count: SystemDictionaryDataCountAggregateOutputType | null
    _avg: SystemDictionaryDataAvgAggregateOutputType | null
    _sum: SystemDictionaryDataSumAggregateOutputType | null
    _min: SystemDictionaryDataMinAggregateOutputType | null
    _max: SystemDictionaryDataMaxAggregateOutputType | null
  }

  export type SystemDictionaryDataAvgAggregateOutputType = {
    id: number | null
    orderNo: number | null
    status: number | null
    categoryId: number | null
  }

  export type SystemDictionaryDataSumAggregateOutputType = {
    id: number | null
    orderNo: number | null
    status: number | null
    categoryId: number | null
  }

  export type SystemDictionaryDataMinAggregateOutputType = {
    id: number | null
    label: string | null
    value: string | null
    orderNo: number | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type SystemDictionaryDataMaxAggregateOutputType = {
    id: number | null
    label: string | null
    value: string | null
    orderNo: number | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type SystemDictionaryDataCountAggregateOutputType = {
    id: number
    label: number
    value: number
    orderNo: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type SystemDictionaryDataAvgAggregateInputType = {
    id?: true
    orderNo?: true
    status?: true
    categoryId?: true
  }

  export type SystemDictionaryDataSumAggregateInputType = {
    id?: true
    orderNo?: true
    status?: true
    categoryId?: true
  }

  export type SystemDictionaryDataMinAggregateInputType = {
    id?: true
    label?: true
    value?: true
    orderNo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type SystemDictionaryDataMaxAggregateInputType = {
    id?: true
    label?: true
    value?: true
    orderNo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type SystemDictionaryDataCountAggregateInputType = {
    id?: true
    label?: true
    value?: true
    orderNo?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type SystemDictionaryDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemDictionaryData to aggregate.
     */
    where?: SystemDictionaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryData to fetch.
     */
    orderBy?: SystemDictionaryDataOrderByWithRelationInput | SystemDictionaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemDictionaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemDictionaryData
    **/
    _count?: true | SystemDictionaryDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemDictionaryDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemDictionaryDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemDictionaryDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemDictionaryDataMaxAggregateInputType
  }

  export type GetSystemDictionaryDataAggregateType<T extends SystemDictionaryDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemDictionaryData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemDictionaryData[P]>
      : GetScalarType<T[P], AggregateSystemDictionaryData[P]>
  }




  export type SystemDictionaryDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemDictionaryDataWhereInput
    orderBy?: SystemDictionaryDataOrderByWithAggregationInput | SystemDictionaryDataOrderByWithAggregationInput[]
    by: SystemDictionaryDataScalarFieldEnum[] | SystemDictionaryDataScalarFieldEnum
    having?: SystemDictionaryDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemDictionaryDataCountAggregateInputType | true
    _avg?: SystemDictionaryDataAvgAggregateInputType
    _sum?: SystemDictionaryDataSumAggregateInputType
    _min?: SystemDictionaryDataMinAggregateInputType
    _max?: SystemDictionaryDataMaxAggregateInputType
  }

  export type SystemDictionaryDataGroupByOutputType = {
    id: number
    label: string
    value: string
    orderNo: number
    description: string | null
    status: number
    createdAt: Date
    updatedAt: Date
    categoryId: number
    _count: SystemDictionaryDataCountAggregateOutputType | null
    _avg: SystemDictionaryDataAvgAggregateOutputType | null
    _sum: SystemDictionaryDataSumAggregateOutputType | null
    _min: SystemDictionaryDataMinAggregateOutputType | null
    _max: SystemDictionaryDataMaxAggregateOutputType | null
  }

  type GetSystemDictionaryDataGroupByPayload<T extends SystemDictionaryDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemDictionaryDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemDictionaryDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemDictionaryDataGroupByOutputType[P]>
            : GetScalarType<T[P], SystemDictionaryDataGroupByOutputType[P]>
        }
      >
    >


  export type SystemDictionaryDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    value?: boolean
    orderNo?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | SystemDictionaryCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemDictionaryData"]>

  export type SystemDictionaryDataSelectScalar = {
    id?: boolean
    label?: boolean
    value?: boolean
    orderNo?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }


  export type SystemDictionaryDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | SystemDictionaryCategoryDefaultArgs<ExtArgs>
  }


  export type $SystemDictionaryDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemDictionaryData"
    objects: {
      category: Prisma.$SystemDictionaryCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      value: string
      orderNo: number
      description: string | null
      status: number
      createdAt: Date
      updatedAt: Date
      categoryId: number
    }, ExtArgs["result"]["systemDictionaryData"]>
    composites: {}
  }


  type SystemDictionaryDataGetPayload<S extends boolean | null | undefined | SystemDictionaryDataDefaultArgs> = $Result.GetResult<Prisma.$SystemDictionaryDataPayload, S>

  type SystemDictionaryDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemDictionaryDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemDictionaryDataCountAggregateInputType | true
    }

  export interface SystemDictionaryDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemDictionaryData'], meta: { name: 'SystemDictionaryData' } }
    /**
     * Find zero or one SystemDictionaryData that matches the filter.
     * @param {SystemDictionaryDataFindUniqueArgs} args - Arguments to find a SystemDictionaryData
     * @example
     * // Get one SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemDictionaryDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryDataFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemDictionaryData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemDictionaryDataFindUniqueOrThrowArgs} args - Arguments to find a SystemDictionaryData
     * @example
     * // Get one SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemDictionaryDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemDictionaryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataFindFirstArgs} args - Arguments to find a SystemDictionaryData
     * @example
     * // Get one SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemDictionaryDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryDataFindFirstArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemDictionaryData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataFindFirstOrThrowArgs} args - Arguments to find a SystemDictionaryData
     * @example
     * // Get one SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemDictionaryDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemDictionaryData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.findMany()
     * 
     * // Get first 10 SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemDictionaryDataWithIdOnly = await prisma.systemDictionaryData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemDictionaryDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemDictionaryData.
     * @param {SystemDictionaryDataCreateArgs} args - Arguments to create a SystemDictionaryData.
     * @example
     * // Create one SystemDictionaryData
     * const SystemDictionaryData = await prisma.systemDictionaryData.create({
     *   data: {
     *     // ... data to create a SystemDictionaryData
     *   }
     * })
     * 
    **/
    create<T extends SystemDictionaryDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryDataCreateArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemDictionaryData.
     * @param {SystemDictionaryDataCreateManyArgs} args - Arguments to create many SystemDictionaryData.
     * @example
     * // Create many SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemDictionaryDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemDictionaryData.
     * @param {SystemDictionaryDataDeleteArgs} args - Arguments to delete one SystemDictionaryData.
     * @example
     * // Delete one SystemDictionaryData
     * const SystemDictionaryData = await prisma.systemDictionaryData.delete({
     *   where: {
     *     // ... filter to delete one SystemDictionaryData
     *   }
     * })
     * 
    **/
    delete<T extends SystemDictionaryDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryDataDeleteArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemDictionaryData.
     * @param {SystemDictionaryDataUpdateArgs} args - Arguments to update one SystemDictionaryData.
     * @example
     * // Update one SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemDictionaryDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryDataUpdateArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemDictionaryData.
     * @param {SystemDictionaryDataDeleteManyArgs} args - Arguments to filter SystemDictionaryData to delete.
     * @example
     * // Delete a few SystemDictionaryData
     * const { count } = await prisma.systemDictionaryData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemDictionaryDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemDictionaryDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemDictionaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemDictionaryDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemDictionaryData.
     * @param {SystemDictionaryDataUpsertArgs} args - Arguments to update or create a SystemDictionaryData.
     * @example
     * // Update or create a SystemDictionaryData
     * const systemDictionaryData = await prisma.systemDictionaryData.upsert({
     *   create: {
     *     // ... data to create a SystemDictionaryData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemDictionaryData we want to update
     *   }
     * })
    **/
    upsert<T extends SystemDictionaryDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemDictionaryDataUpsertArgs<ExtArgs>>
    ): Prisma__SystemDictionaryDataClient<$Result.GetResult<Prisma.$SystemDictionaryDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemDictionaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataCountArgs} args - Arguments to filter SystemDictionaryData to count.
     * @example
     * // Count the number of SystemDictionaryData
     * const count = await prisma.systemDictionaryData.count({
     *   where: {
     *     // ... the filter for the SystemDictionaryData we want to count
     *   }
     * })
    **/
    count<T extends SystemDictionaryDataCountArgs>(
      args?: Subset<T, SystemDictionaryDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemDictionaryDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemDictionaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemDictionaryDataAggregateArgs>(args: Subset<T, SystemDictionaryDataAggregateArgs>): Prisma.PrismaPromise<GetSystemDictionaryDataAggregateType<T>>

    /**
     * Group by SystemDictionaryData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemDictionaryDataGroupByArgs} args - Group by arguments.
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
      T extends SystemDictionaryDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemDictionaryDataGroupByArgs['orderBy'] }
        : { orderBy?: SystemDictionaryDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemDictionaryDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemDictionaryDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemDictionaryData model
   */
  readonly fields: SystemDictionaryDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemDictionaryData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemDictionaryDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends SystemDictionaryCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemDictionaryCategoryDefaultArgs<ExtArgs>>): Prisma__SystemDictionaryCategoryClient<$Result.GetResult<Prisma.$SystemDictionaryCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemDictionaryData model
   */ 
  interface SystemDictionaryDataFieldRefs {
    readonly id: FieldRef<"SystemDictionaryData", 'Int'>
    readonly label: FieldRef<"SystemDictionaryData", 'String'>
    readonly value: FieldRef<"SystemDictionaryData", 'String'>
    readonly orderNo: FieldRef<"SystemDictionaryData", 'Int'>
    readonly description: FieldRef<"SystemDictionaryData", 'String'>
    readonly status: FieldRef<"SystemDictionaryData", 'Int'>
    readonly createdAt: FieldRef<"SystemDictionaryData", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemDictionaryData", 'DateTime'>
    readonly categoryId: FieldRef<"SystemDictionaryData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemDictionaryData findUnique
   */
  export type SystemDictionaryDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryData to fetch.
     */
    where: SystemDictionaryDataWhereUniqueInput
  }

  /**
   * SystemDictionaryData findUniqueOrThrow
   */
  export type SystemDictionaryDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryData to fetch.
     */
    where: SystemDictionaryDataWhereUniqueInput
  }

  /**
   * SystemDictionaryData findFirst
   */
  export type SystemDictionaryDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryData to fetch.
     */
    where?: SystemDictionaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryData to fetch.
     */
    orderBy?: SystemDictionaryDataOrderByWithRelationInput | SystemDictionaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemDictionaryData.
     */
    cursor?: SystemDictionaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemDictionaryData.
     */
    distinct?: SystemDictionaryDataScalarFieldEnum | SystemDictionaryDataScalarFieldEnum[]
  }

  /**
   * SystemDictionaryData findFirstOrThrow
   */
  export type SystemDictionaryDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryData to fetch.
     */
    where?: SystemDictionaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryData to fetch.
     */
    orderBy?: SystemDictionaryDataOrderByWithRelationInput | SystemDictionaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemDictionaryData.
     */
    cursor?: SystemDictionaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemDictionaryData.
     */
    distinct?: SystemDictionaryDataScalarFieldEnum | SystemDictionaryDataScalarFieldEnum[]
  }

  /**
   * SystemDictionaryData findMany
   */
  export type SystemDictionaryDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * Filter, which SystemDictionaryData to fetch.
     */
    where?: SystemDictionaryDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemDictionaryData to fetch.
     */
    orderBy?: SystemDictionaryDataOrderByWithRelationInput | SystemDictionaryDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemDictionaryData.
     */
    cursor?: SystemDictionaryDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemDictionaryData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemDictionaryData.
     */
    skip?: number
    distinct?: SystemDictionaryDataScalarFieldEnum | SystemDictionaryDataScalarFieldEnum[]
  }

  /**
   * SystemDictionaryData create
   */
  export type SystemDictionaryDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemDictionaryData.
     */
    data: XOR<SystemDictionaryDataCreateInput, SystemDictionaryDataUncheckedCreateInput>
  }

  /**
   * SystemDictionaryData createMany
   */
  export type SystemDictionaryDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemDictionaryData.
     */
    data: SystemDictionaryDataCreateManyInput | SystemDictionaryDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemDictionaryData update
   */
  export type SystemDictionaryDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemDictionaryData.
     */
    data: XOR<SystemDictionaryDataUpdateInput, SystemDictionaryDataUncheckedUpdateInput>
    /**
     * Choose, which SystemDictionaryData to update.
     */
    where: SystemDictionaryDataWhereUniqueInput
  }

  /**
   * SystemDictionaryData updateMany
   */
  export type SystemDictionaryDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemDictionaryData.
     */
    data: XOR<SystemDictionaryDataUpdateManyMutationInput, SystemDictionaryDataUncheckedUpdateManyInput>
    /**
     * Filter which SystemDictionaryData to update
     */
    where?: SystemDictionaryDataWhereInput
  }

  /**
   * SystemDictionaryData upsert
   */
  export type SystemDictionaryDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemDictionaryData to update in case it exists.
     */
    where: SystemDictionaryDataWhereUniqueInput
    /**
     * In case the SystemDictionaryData found by the `where` argument doesn't exist, create a new SystemDictionaryData with this data.
     */
    create: XOR<SystemDictionaryDataCreateInput, SystemDictionaryDataUncheckedCreateInput>
    /**
     * In case the SystemDictionaryData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemDictionaryDataUpdateInput, SystemDictionaryDataUncheckedUpdateInput>
  }

  /**
   * SystemDictionaryData delete
   */
  export type SystemDictionaryDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
    /**
     * Filter which SystemDictionaryData to delete.
     */
    where: SystemDictionaryDataWhereUniqueInput
  }

  /**
   * SystemDictionaryData deleteMany
   */
  export type SystemDictionaryDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemDictionaryData to delete
     */
    where?: SystemDictionaryDataWhereInput
  }

  /**
   * SystemDictionaryData without action
   */
  export type SystemDictionaryDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemDictionaryData
     */
    select?: SystemDictionaryDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemDictionaryDataInclude<ExtArgs> | null
  }


  /**
   * Model SystemRoles
   */

  export type AggregateSystemRoles = {
    _count: SystemRolesCountAggregateOutputType | null
    _avg: SystemRolesAvgAggregateOutputType | null
    _sum: SystemRolesSumAggregateOutputType | null
    _min: SystemRolesMinAggregateOutputType | null
    _max: SystemRolesMaxAggregateOutputType | null
  }

  export type SystemRolesAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type SystemRolesSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type SystemRolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    status: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemRolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    status: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemRolesCountAggregateOutputType = {
    id: number
    name: number
    code: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemRolesAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type SystemRolesSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type SystemRolesMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemRolesMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemRolesCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemRolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemRoles to aggregate.
     */
    where?: SystemRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoles to fetch.
     */
    orderBy?: SystemRolesOrderByWithRelationInput | SystemRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemRoles
    **/
    _count?: true | SystemRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemRolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemRolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemRolesMaxAggregateInputType
  }

  export type GetSystemRolesAggregateType<T extends SystemRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemRoles[P]>
      : GetScalarType<T[P], AggregateSystemRoles[P]>
  }




  export type SystemRolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemRolesWhereInput
    orderBy?: SystemRolesOrderByWithAggregationInput | SystemRolesOrderByWithAggregationInput[]
    by: SystemRolesScalarFieldEnum[] | SystemRolesScalarFieldEnum
    having?: SystemRolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemRolesCountAggregateInputType | true
    _avg?: SystemRolesAvgAggregateInputType
    _sum?: SystemRolesSumAggregateInputType
    _min?: SystemRolesMinAggregateInputType
    _max?: SystemRolesMaxAggregateInputType
  }

  export type SystemRolesGroupByOutputType = {
    id: number
    name: string
    code: string
    status: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SystemRolesCountAggregateOutputType | null
    _avg: SystemRolesAvgAggregateOutputType | null
    _sum: SystemRolesSumAggregateOutputType | null
    _min: SystemRolesMinAggregateOutputType | null
    _max: SystemRolesMaxAggregateOutputType | null
  }

  type GetSystemRolesGroupByPayload<T extends SystemRolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemRolesGroupByOutputType[P]>
            : GetScalarType<T[P], SystemRolesGroupByOutputType[P]>
        }
      >
    >


  export type SystemRolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | SystemRoles$usersArgs<ExtArgs>
    menus?: boolean | SystemRoles$menusArgs<ExtArgs>
    _count?: boolean | SystemRolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemRoles"]>

  export type SystemRolesSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SystemRolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SystemRoles$usersArgs<ExtArgs>
    menus?: boolean | SystemRoles$menusArgs<ExtArgs>
    _count?: boolean | SystemRolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SystemRolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemRoles"
    objects: {
      users: Prisma.$SystemUserRoleRelationPayload<ExtArgs>[]
      menus: Prisma.$SystemRoleMenuRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      status: number
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemRoles"]>
    composites: {}
  }


  type SystemRolesGetPayload<S extends boolean | null | undefined | SystemRolesDefaultArgs> = $Result.GetResult<Prisma.$SystemRolesPayload, S>

  type SystemRolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemRolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemRolesCountAggregateInputType | true
    }

  export interface SystemRolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemRoles'], meta: { name: 'SystemRoles' } }
    /**
     * Find zero or one SystemRoles that matches the filter.
     * @param {SystemRolesFindUniqueArgs} args - Arguments to find a SystemRoles
     * @example
     * // Get one SystemRoles
     * const systemRoles = await prisma.systemRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemRolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRolesFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemRoles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemRolesFindUniqueOrThrowArgs} args - Arguments to find a SystemRoles
     * @example
     * // Get one SystemRoles
     * const systemRoles = await prisma.systemRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemRolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesFindFirstArgs} args - Arguments to find a SystemRoles
     * @example
     * // Get one SystemRoles
     * const systemRoles = await prisma.systemRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemRolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRolesFindFirstArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesFindFirstOrThrowArgs} args - Arguments to find a SystemRoles
     * @example
     * // Get one SystemRoles
     * const systemRoles = await prisma.systemRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemRolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemRoles
     * const systemRoles = await prisma.systemRoles.findMany()
     * 
     * // Get first 10 SystemRoles
     * const systemRoles = await prisma.systemRoles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemRolesWithIdOnly = await prisma.systemRoles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SystemRolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemRoles.
     * @param {SystemRolesCreateArgs} args - Arguments to create a SystemRoles.
     * @example
     * // Create one SystemRoles
     * const SystemRoles = await prisma.systemRoles.create({
     *   data: {
     *     // ... data to create a SystemRoles
     *   }
     * })
     * 
    **/
    create<T extends SystemRolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRolesCreateArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemRoles.
     * @param {SystemRolesCreateManyArgs} args - Arguments to create many SystemRoles.
     * @example
     * // Create many SystemRoles
     * const systemRoles = await prisma.systemRoles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemRolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemRoles.
     * @param {SystemRolesDeleteArgs} args - Arguments to delete one SystemRoles.
     * @example
     * // Delete one SystemRoles
     * const SystemRoles = await prisma.systemRoles.delete({
     *   where: {
     *     // ... filter to delete one SystemRoles
     *   }
     * })
     * 
    **/
    delete<T extends SystemRolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRolesDeleteArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemRoles.
     * @param {SystemRolesUpdateArgs} args - Arguments to update one SystemRoles.
     * @example
     * // Update one SystemRoles
     * const systemRoles = await prisma.systemRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemRolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRolesUpdateArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemRoles.
     * @param {SystemRolesDeleteManyArgs} args - Arguments to filter SystemRoles to delete.
     * @example
     * // Delete a few SystemRoles
     * const { count } = await prisma.systemRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemRolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemRoles
     * const systemRoles = await prisma.systemRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemRolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemRoles.
     * @param {SystemRolesUpsertArgs} args - Arguments to update or create a SystemRoles.
     * @example
     * // Update or create a SystemRoles
     * const systemRoles = await prisma.systemRoles.upsert({
     *   create: {
     *     // ... data to create a SystemRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemRoles we want to update
     *   }
     * })
    **/
    upsert<T extends SystemRolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRolesUpsertArgs<ExtArgs>>
    ): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesCountArgs} args - Arguments to filter SystemRoles to count.
     * @example
     * // Count the number of SystemRoles
     * const count = await prisma.systemRoles.count({
     *   where: {
     *     // ... the filter for the SystemRoles we want to count
     *   }
     * })
    **/
    count<T extends SystemRolesCountArgs>(
      args?: Subset<T, SystemRolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemRolesAggregateArgs>(args: Subset<T, SystemRolesAggregateArgs>): Prisma.PrismaPromise<GetSystemRolesAggregateType<T>>

    /**
     * Group by SystemRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRolesGroupByArgs} args - Group by arguments.
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
      T extends SystemRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemRolesGroupByArgs['orderBy'] }
        : { orderBy?: SystemRolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemRoles model
   */
  readonly fields: SystemRolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemRolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends SystemRoles$usersArgs<ExtArgs> = {}>(args?: Subset<T, SystemRoles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    menus<T extends SystemRoles$menusArgs<ExtArgs> = {}>(args?: Subset<T, SystemRoles$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemRoles model
   */ 
  interface SystemRolesFieldRefs {
    readonly id: FieldRef<"SystemRoles", 'Int'>
    readonly name: FieldRef<"SystemRoles", 'String'>
    readonly code: FieldRef<"SystemRoles", 'String'>
    readonly status: FieldRef<"SystemRoles", 'Int'>
    readonly description: FieldRef<"SystemRoles", 'String'>
    readonly createdAt: FieldRef<"SystemRoles", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemRoles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemRoles findUnique
   */
  export type SystemRolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoles to fetch.
     */
    where: SystemRolesWhereUniqueInput
  }

  /**
   * SystemRoles findUniqueOrThrow
   */
  export type SystemRolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoles to fetch.
     */
    where: SystemRolesWhereUniqueInput
  }

  /**
   * SystemRoles findFirst
   */
  export type SystemRolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoles to fetch.
     */
    where?: SystemRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoles to fetch.
     */
    orderBy?: SystemRolesOrderByWithRelationInput | SystemRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemRoles.
     */
    cursor?: SystemRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemRoles.
     */
    distinct?: SystemRolesScalarFieldEnum | SystemRolesScalarFieldEnum[]
  }

  /**
   * SystemRoles findFirstOrThrow
   */
  export type SystemRolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoles to fetch.
     */
    where?: SystemRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoles to fetch.
     */
    orderBy?: SystemRolesOrderByWithRelationInput | SystemRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemRoles.
     */
    cursor?: SystemRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemRoles.
     */
    distinct?: SystemRolesScalarFieldEnum | SystemRolesScalarFieldEnum[]
  }

  /**
   * SystemRoles findMany
   */
  export type SystemRolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoles to fetch.
     */
    where?: SystemRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoles to fetch.
     */
    orderBy?: SystemRolesOrderByWithRelationInput | SystemRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemRoles.
     */
    cursor?: SystemRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoles.
     */
    skip?: number
    distinct?: SystemRolesScalarFieldEnum | SystemRolesScalarFieldEnum[]
  }

  /**
   * SystemRoles create
   */
  export type SystemRolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemRoles.
     */
    data: XOR<SystemRolesCreateInput, SystemRolesUncheckedCreateInput>
  }

  /**
   * SystemRoles createMany
   */
  export type SystemRolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemRoles.
     */
    data: SystemRolesCreateManyInput | SystemRolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemRoles update
   */
  export type SystemRolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemRoles.
     */
    data: XOR<SystemRolesUpdateInput, SystemRolesUncheckedUpdateInput>
    /**
     * Choose, which SystemRoles to update.
     */
    where: SystemRolesWhereUniqueInput
  }

  /**
   * SystemRoles updateMany
   */
  export type SystemRolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemRoles.
     */
    data: XOR<SystemRolesUpdateManyMutationInput, SystemRolesUncheckedUpdateManyInput>
    /**
     * Filter which SystemRoles to update
     */
    where?: SystemRolesWhereInput
  }

  /**
   * SystemRoles upsert
   */
  export type SystemRolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemRoles to update in case it exists.
     */
    where: SystemRolesWhereUniqueInput
    /**
     * In case the SystemRoles found by the `where` argument doesn't exist, create a new SystemRoles with this data.
     */
    create: XOR<SystemRolesCreateInput, SystemRolesUncheckedCreateInput>
    /**
     * In case the SystemRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemRolesUpdateInput, SystemRolesUncheckedUpdateInput>
  }

  /**
   * SystemRoles delete
   */
  export type SystemRolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
    /**
     * Filter which SystemRoles to delete.
     */
    where: SystemRolesWhereUniqueInput
  }

  /**
   * SystemRoles deleteMany
   */
  export type SystemRolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemRoles to delete
     */
    where?: SystemRolesWhereInput
  }

  /**
   * SystemRoles.users
   */
  export type SystemRoles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    where?: SystemUserRoleRelationWhereInput
    orderBy?: SystemUserRoleRelationOrderByWithRelationInput | SystemUserRoleRelationOrderByWithRelationInput[]
    cursor?: SystemUserRoleRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemUserRoleRelationScalarFieldEnum | SystemUserRoleRelationScalarFieldEnum[]
  }

  /**
   * SystemRoles.menus
   */
  export type SystemRoles$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    where?: SystemRoleMenuRelationWhereInput
    orderBy?: SystemRoleMenuRelationOrderByWithRelationInput | SystemRoleMenuRelationOrderByWithRelationInput[]
    cursor?: SystemRoleMenuRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemRoleMenuRelationScalarFieldEnum | SystemRoleMenuRelationScalarFieldEnum[]
  }

  /**
   * SystemRoles without action
   */
  export type SystemRolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoles
     */
    select?: SystemRolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRolesInclude<ExtArgs> | null
  }


  /**
   * Model SystemUserRoleRelation
   */

  export type AggregateSystemUserRoleRelation = {
    _count: SystemUserRoleRelationCountAggregateOutputType | null
    _avg: SystemUserRoleRelationAvgAggregateOutputType | null
    _sum: SystemUserRoleRelationSumAggregateOutputType | null
    _min: SystemUserRoleRelationMinAggregateOutputType | null
    _max: SystemUserRoleRelationMaxAggregateOutputType | null
  }

  export type SystemUserRoleRelationAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SystemUserRoleRelationSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SystemUserRoleRelationMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SystemUserRoleRelationMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type SystemUserRoleRelationCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type SystemUserRoleRelationAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SystemUserRoleRelationSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SystemUserRoleRelationMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SystemUserRoleRelationMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type SystemUserRoleRelationCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type SystemUserRoleRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemUserRoleRelation to aggregate.
     */
    where?: SystemUserRoleRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserRoleRelations to fetch.
     */
    orderBy?: SystemUserRoleRelationOrderByWithRelationInput | SystemUserRoleRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemUserRoleRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserRoleRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserRoleRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemUserRoleRelations
    **/
    _count?: true | SystemUserRoleRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemUserRoleRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemUserRoleRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemUserRoleRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemUserRoleRelationMaxAggregateInputType
  }

  export type GetSystemUserRoleRelationAggregateType<T extends SystemUserRoleRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemUserRoleRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemUserRoleRelation[P]>
      : GetScalarType<T[P], AggregateSystemUserRoleRelation[P]>
  }




  export type SystemUserRoleRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemUserRoleRelationWhereInput
    orderBy?: SystemUserRoleRelationOrderByWithAggregationInput | SystemUserRoleRelationOrderByWithAggregationInput[]
    by: SystemUserRoleRelationScalarFieldEnum[] | SystemUserRoleRelationScalarFieldEnum
    having?: SystemUserRoleRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemUserRoleRelationCountAggregateInputType | true
    _avg?: SystemUserRoleRelationAvgAggregateInputType
    _sum?: SystemUserRoleRelationSumAggregateInputType
    _min?: SystemUserRoleRelationMinAggregateInputType
    _max?: SystemUserRoleRelationMaxAggregateInputType
  }

  export type SystemUserRoleRelationGroupByOutputType = {
    userId: number
    roleId: number
    _count: SystemUserRoleRelationCountAggregateOutputType | null
    _avg: SystemUserRoleRelationAvgAggregateOutputType | null
    _sum: SystemUserRoleRelationSumAggregateOutputType | null
    _min: SystemUserRoleRelationMinAggregateOutputType | null
    _max: SystemUserRoleRelationMaxAggregateOutputType | null
  }

  type GetSystemUserRoleRelationGroupByPayload<T extends SystemUserRoleRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemUserRoleRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemUserRoleRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemUserRoleRelationGroupByOutputType[P]>
            : GetScalarType<T[P], SystemUserRoleRelationGroupByOutputType[P]>
        }
      >
    >


  export type SystemUserRoleRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | SystemUsersDefaultArgs<ExtArgs>
    role?: boolean | SystemRolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemUserRoleRelation"]>

  export type SystemUserRoleRelationSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }


  export type SystemUserRoleRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SystemUsersDefaultArgs<ExtArgs>
    role?: boolean | SystemRolesDefaultArgs<ExtArgs>
  }


  export type $SystemUserRoleRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemUserRoleRelation"
    objects: {
      user: Prisma.$SystemUsersPayload<ExtArgs>
      role: Prisma.$SystemRolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
    }, ExtArgs["result"]["systemUserRoleRelation"]>
    composites: {}
  }


  type SystemUserRoleRelationGetPayload<S extends boolean | null | undefined | SystemUserRoleRelationDefaultArgs> = $Result.GetResult<Prisma.$SystemUserRoleRelationPayload, S>

  type SystemUserRoleRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemUserRoleRelationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemUserRoleRelationCountAggregateInputType | true
    }

  export interface SystemUserRoleRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemUserRoleRelation'], meta: { name: 'SystemUserRoleRelation' } }
    /**
     * Find zero or one SystemUserRoleRelation that matches the filter.
     * @param {SystemUserRoleRelationFindUniqueArgs} args - Arguments to find a SystemUserRoleRelation
     * @example
     * // Get one SystemUserRoleRelation
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemUserRoleRelationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserRoleRelationFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemUserRoleRelation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemUserRoleRelationFindUniqueOrThrowArgs} args - Arguments to find a SystemUserRoleRelation
     * @example
     * // Get one SystemUserRoleRelation
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemUserRoleRelationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserRoleRelationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemUserRoleRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationFindFirstArgs} args - Arguments to find a SystemUserRoleRelation
     * @example
     * // Get one SystemUserRoleRelation
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemUserRoleRelationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserRoleRelationFindFirstArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemUserRoleRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationFindFirstOrThrowArgs} args - Arguments to find a SystemUserRoleRelation
     * @example
     * // Get one SystemUserRoleRelation
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemUserRoleRelationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserRoleRelationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemUserRoleRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemUserRoleRelations
     * const systemUserRoleRelations = await prisma.systemUserRoleRelation.findMany()
     * 
     * // Get first 10 SystemUserRoleRelations
     * const systemUserRoleRelations = await prisma.systemUserRoleRelation.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const systemUserRoleRelationWithUserIdOnly = await prisma.systemUserRoleRelation.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends SystemUserRoleRelationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserRoleRelationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemUserRoleRelation.
     * @param {SystemUserRoleRelationCreateArgs} args - Arguments to create a SystemUserRoleRelation.
     * @example
     * // Create one SystemUserRoleRelation
     * const SystemUserRoleRelation = await prisma.systemUserRoleRelation.create({
     *   data: {
     *     // ... data to create a SystemUserRoleRelation
     *   }
     * })
     * 
    **/
    create<T extends SystemUserRoleRelationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserRoleRelationCreateArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemUserRoleRelations.
     * @param {SystemUserRoleRelationCreateManyArgs} args - Arguments to create many SystemUserRoleRelations.
     * @example
     * // Create many SystemUserRoleRelations
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemUserRoleRelationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserRoleRelationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemUserRoleRelation.
     * @param {SystemUserRoleRelationDeleteArgs} args - Arguments to delete one SystemUserRoleRelation.
     * @example
     * // Delete one SystemUserRoleRelation
     * const SystemUserRoleRelation = await prisma.systemUserRoleRelation.delete({
     *   where: {
     *     // ... filter to delete one SystemUserRoleRelation
     *   }
     * })
     * 
    **/
    delete<T extends SystemUserRoleRelationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserRoleRelationDeleteArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemUserRoleRelation.
     * @param {SystemUserRoleRelationUpdateArgs} args - Arguments to update one SystemUserRoleRelation.
     * @example
     * // Update one SystemUserRoleRelation
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemUserRoleRelationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserRoleRelationUpdateArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemUserRoleRelations.
     * @param {SystemUserRoleRelationDeleteManyArgs} args - Arguments to filter SystemUserRoleRelations to delete.
     * @example
     * // Delete a few SystemUserRoleRelations
     * const { count } = await prisma.systemUserRoleRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemUserRoleRelationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemUserRoleRelationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemUserRoleRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemUserRoleRelations
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemUserRoleRelationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserRoleRelationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemUserRoleRelation.
     * @param {SystemUserRoleRelationUpsertArgs} args - Arguments to update or create a SystemUserRoleRelation.
     * @example
     * // Update or create a SystemUserRoleRelation
     * const systemUserRoleRelation = await prisma.systemUserRoleRelation.upsert({
     *   create: {
     *     // ... data to create a SystemUserRoleRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemUserRoleRelation we want to update
     *   }
     * })
    **/
    upsert<T extends SystemUserRoleRelationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemUserRoleRelationUpsertArgs<ExtArgs>>
    ): Prisma__SystemUserRoleRelationClient<$Result.GetResult<Prisma.$SystemUserRoleRelationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemUserRoleRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationCountArgs} args - Arguments to filter SystemUserRoleRelations to count.
     * @example
     * // Count the number of SystemUserRoleRelations
     * const count = await prisma.systemUserRoleRelation.count({
     *   where: {
     *     // ... the filter for the SystemUserRoleRelations we want to count
     *   }
     * })
    **/
    count<T extends SystemUserRoleRelationCountArgs>(
      args?: Subset<T, SystemUserRoleRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemUserRoleRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemUserRoleRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemUserRoleRelationAggregateArgs>(args: Subset<T, SystemUserRoleRelationAggregateArgs>): Prisma.PrismaPromise<GetSystemUserRoleRelationAggregateType<T>>

    /**
     * Group by SystemUserRoleRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUserRoleRelationGroupByArgs} args - Group by arguments.
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
      T extends SystemUserRoleRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemUserRoleRelationGroupByArgs['orderBy'] }
        : { orderBy?: SystemUserRoleRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemUserRoleRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemUserRoleRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemUserRoleRelation model
   */
  readonly fields: SystemUserRoleRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemUserRoleRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemUserRoleRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends SystemUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemUsersDefaultArgs<ExtArgs>>): Prisma__SystemUsersClient<$Result.GetResult<Prisma.$SystemUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends SystemRolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemRolesDefaultArgs<ExtArgs>>): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemUserRoleRelation model
   */ 
  interface SystemUserRoleRelationFieldRefs {
    readonly userId: FieldRef<"SystemUserRoleRelation", 'Int'>
    readonly roleId: FieldRef<"SystemUserRoleRelation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemUserRoleRelation findUnique
   */
  export type SystemUserRoleRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserRoleRelation to fetch.
     */
    where: SystemUserRoleRelationWhereUniqueInput
  }

  /**
   * SystemUserRoleRelation findUniqueOrThrow
   */
  export type SystemUserRoleRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserRoleRelation to fetch.
     */
    where: SystemUserRoleRelationWhereUniqueInput
  }

  /**
   * SystemUserRoleRelation findFirst
   */
  export type SystemUserRoleRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserRoleRelation to fetch.
     */
    where?: SystemUserRoleRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserRoleRelations to fetch.
     */
    orderBy?: SystemUserRoleRelationOrderByWithRelationInput | SystemUserRoleRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemUserRoleRelations.
     */
    cursor?: SystemUserRoleRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserRoleRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserRoleRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemUserRoleRelations.
     */
    distinct?: SystemUserRoleRelationScalarFieldEnum | SystemUserRoleRelationScalarFieldEnum[]
  }

  /**
   * SystemUserRoleRelation findFirstOrThrow
   */
  export type SystemUserRoleRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserRoleRelation to fetch.
     */
    where?: SystemUserRoleRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserRoleRelations to fetch.
     */
    orderBy?: SystemUserRoleRelationOrderByWithRelationInput | SystemUserRoleRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemUserRoleRelations.
     */
    cursor?: SystemUserRoleRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserRoleRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserRoleRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemUserRoleRelations.
     */
    distinct?: SystemUserRoleRelationScalarFieldEnum | SystemUserRoleRelationScalarFieldEnum[]
  }

  /**
   * SystemUserRoleRelation findMany
   */
  export type SystemUserRoleRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemUserRoleRelations to fetch.
     */
    where?: SystemUserRoleRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemUserRoleRelations to fetch.
     */
    orderBy?: SystemUserRoleRelationOrderByWithRelationInput | SystemUserRoleRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemUserRoleRelations.
     */
    cursor?: SystemUserRoleRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemUserRoleRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemUserRoleRelations.
     */
    skip?: number
    distinct?: SystemUserRoleRelationScalarFieldEnum | SystemUserRoleRelationScalarFieldEnum[]
  }

  /**
   * SystemUserRoleRelation create
   */
  export type SystemUserRoleRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemUserRoleRelation.
     */
    data: XOR<SystemUserRoleRelationCreateInput, SystemUserRoleRelationUncheckedCreateInput>
  }

  /**
   * SystemUserRoleRelation createMany
   */
  export type SystemUserRoleRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemUserRoleRelations.
     */
    data: SystemUserRoleRelationCreateManyInput | SystemUserRoleRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemUserRoleRelation update
   */
  export type SystemUserRoleRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemUserRoleRelation.
     */
    data: XOR<SystemUserRoleRelationUpdateInput, SystemUserRoleRelationUncheckedUpdateInput>
    /**
     * Choose, which SystemUserRoleRelation to update.
     */
    where: SystemUserRoleRelationWhereUniqueInput
  }

  /**
   * SystemUserRoleRelation updateMany
   */
  export type SystemUserRoleRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemUserRoleRelations.
     */
    data: XOR<SystemUserRoleRelationUpdateManyMutationInput, SystemUserRoleRelationUncheckedUpdateManyInput>
    /**
     * Filter which SystemUserRoleRelations to update
     */
    where?: SystemUserRoleRelationWhereInput
  }

  /**
   * SystemUserRoleRelation upsert
   */
  export type SystemUserRoleRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemUserRoleRelation to update in case it exists.
     */
    where: SystemUserRoleRelationWhereUniqueInput
    /**
     * In case the SystemUserRoleRelation found by the `where` argument doesn't exist, create a new SystemUserRoleRelation with this data.
     */
    create: XOR<SystemUserRoleRelationCreateInput, SystemUserRoleRelationUncheckedCreateInput>
    /**
     * In case the SystemUserRoleRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemUserRoleRelationUpdateInput, SystemUserRoleRelationUncheckedUpdateInput>
  }

  /**
   * SystemUserRoleRelation delete
   */
  export type SystemUserRoleRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
    /**
     * Filter which SystemUserRoleRelation to delete.
     */
    where: SystemUserRoleRelationWhereUniqueInput
  }

  /**
   * SystemUserRoleRelation deleteMany
   */
  export type SystemUserRoleRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemUserRoleRelations to delete
     */
    where?: SystemUserRoleRelationWhereInput
  }

  /**
   * SystemUserRoleRelation without action
   */
  export type SystemUserRoleRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemUserRoleRelation
     */
    select?: SystemUserRoleRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemUserRoleRelationInclude<ExtArgs> | null
  }


  /**
   * Model SystemRoleMenuRelation
   */

  export type AggregateSystemRoleMenuRelation = {
    _count: SystemRoleMenuRelationCountAggregateOutputType | null
    _avg: SystemRoleMenuRelationAvgAggregateOutputType | null
    _sum: SystemRoleMenuRelationSumAggregateOutputType | null
    _min: SystemRoleMenuRelationMinAggregateOutputType | null
    _max: SystemRoleMenuRelationMaxAggregateOutputType | null
  }

  export type SystemRoleMenuRelationAvgAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SystemRoleMenuRelationSumAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SystemRoleMenuRelationMinAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SystemRoleMenuRelationMaxAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type SystemRoleMenuRelationCountAggregateOutputType = {
    roleId: number
    menuId: number
    _all: number
  }


  export type SystemRoleMenuRelationAvgAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SystemRoleMenuRelationSumAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SystemRoleMenuRelationMinAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SystemRoleMenuRelationMaxAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type SystemRoleMenuRelationCountAggregateInputType = {
    roleId?: true
    menuId?: true
    _all?: true
  }

  export type SystemRoleMenuRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemRoleMenuRelation to aggregate.
     */
    where?: SystemRoleMenuRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoleMenuRelations to fetch.
     */
    orderBy?: SystemRoleMenuRelationOrderByWithRelationInput | SystemRoleMenuRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemRoleMenuRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoleMenuRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoleMenuRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemRoleMenuRelations
    **/
    _count?: true | SystemRoleMenuRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemRoleMenuRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemRoleMenuRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemRoleMenuRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemRoleMenuRelationMaxAggregateInputType
  }

  export type GetSystemRoleMenuRelationAggregateType<T extends SystemRoleMenuRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemRoleMenuRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemRoleMenuRelation[P]>
      : GetScalarType<T[P], AggregateSystemRoleMenuRelation[P]>
  }




  export type SystemRoleMenuRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemRoleMenuRelationWhereInput
    orderBy?: SystemRoleMenuRelationOrderByWithAggregationInput | SystemRoleMenuRelationOrderByWithAggregationInput[]
    by: SystemRoleMenuRelationScalarFieldEnum[] | SystemRoleMenuRelationScalarFieldEnum
    having?: SystemRoleMenuRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemRoleMenuRelationCountAggregateInputType | true
    _avg?: SystemRoleMenuRelationAvgAggregateInputType
    _sum?: SystemRoleMenuRelationSumAggregateInputType
    _min?: SystemRoleMenuRelationMinAggregateInputType
    _max?: SystemRoleMenuRelationMaxAggregateInputType
  }

  export type SystemRoleMenuRelationGroupByOutputType = {
    roleId: number
    menuId: number
    _count: SystemRoleMenuRelationCountAggregateOutputType | null
    _avg: SystemRoleMenuRelationAvgAggregateOutputType | null
    _sum: SystemRoleMenuRelationSumAggregateOutputType | null
    _min: SystemRoleMenuRelationMinAggregateOutputType | null
    _max: SystemRoleMenuRelationMaxAggregateOutputType | null
  }

  type GetSystemRoleMenuRelationGroupByPayload<T extends SystemRoleMenuRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemRoleMenuRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemRoleMenuRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemRoleMenuRelationGroupByOutputType[P]>
            : GetScalarType<T[P], SystemRoleMenuRelationGroupByOutputType[P]>
        }
      >
    >


  export type SystemRoleMenuRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    menuId?: boolean
    role?: boolean | SystemRolesDefaultArgs<ExtArgs>
    menu?: boolean | SystemMenusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemRoleMenuRelation"]>

  export type SystemRoleMenuRelationSelectScalar = {
    roleId?: boolean
    menuId?: boolean
  }


  export type SystemRoleMenuRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | SystemRolesDefaultArgs<ExtArgs>
    menu?: boolean | SystemMenusDefaultArgs<ExtArgs>
  }


  export type $SystemRoleMenuRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemRoleMenuRelation"
    objects: {
      role: Prisma.$SystemRolesPayload<ExtArgs>
      menu: Prisma.$SystemMenusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      menuId: number
    }, ExtArgs["result"]["systemRoleMenuRelation"]>
    composites: {}
  }


  type SystemRoleMenuRelationGetPayload<S extends boolean | null | undefined | SystemRoleMenuRelationDefaultArgs> = $Result.GetResult<Prisma.$SystemRoleMenuRelationPayload, S>

  type SystemRoleMenuRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemRoleMenuRelationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemRoleMenuRelationCountAggregateInputType | true
    }

  export interface SystemRoleMenuRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemRoleMenuRelation'], meta: { name: 'SystemRoleMenuRelation' } }
    /**
     * Find zero or one SystemRoleMenuRelation that matches the filter.
     * @param {SystemRoleMenuRelationFindUniqueArgs} args - Arguments to find a SystemRoleMenuRelation
     * @example
     * // Get one SystemRoleMenuRelation
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SystemRoleMenuRelationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRoleMenuRelationFindUniqueArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SystemRoleMenuRelation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemRoleMenuRelationFindUniqueOrThrowArgs} args - Arguments to find a SystemRoleMenuRelation
     * @example
     * // Get one SystemRoleMenuRelation
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SystemRoleMenuRelationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRoleMenuRelationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SystemRoleMenuRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationFindFirstArgs} args - Arguments to find a SystemRoleMenuRelation
     * @example
     * // Get one SystemRoleMenuRelation
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SystemRoleMenuRelationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRoleMenuRelationFindFirstArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SystemRoleMenuRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationFindFirstOrThrowArgs} args - Arguments to find a SystemRoleMenuRelation
     * @example
     * // Get one SystemRoleMenuRelation
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SystemRoleMenuRelationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRoleMenuRelationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SystemRoleMenuRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemRoleMenuRelations
     * const systemRoleMenuRelations = await prisma.systemRoleMenuRelation.findMany()
     * 
     * // Get first 10 SystemRoleMenuRelations
     * const systemRoleMenuRelations = await prisma.systemRoleMenuRelation.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const systemRoleMenuRelationWithRoleIdOnly = await prisma.systemRoleMenuRelation.findMany({ select: { roleId: true } })
     * 
    **/
    findMany<T extends SystemRoleMenuRelationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRoleMenuRelationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SystemRoleMenuRelation.
     * @param {SystemRoleMenuRelationCreateArgs} args - Arguments to create a SystemRoleMenuRelation.
     * @example
     * // Create one SystemRoleMenuRelation
     * const SystemRoleMenuRelation = await prisma.systemRoleMenuRelation.create({
     *   data: {
     *     // ... data to create a SystemRoleMenuRelation
     *   }
     * })
     * 
    **/
    create<T extends SystemRoleMenuRelationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRoleMenuRelationCreateArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SystemRoleMenuRelations.
     * @param {SystemRoleMenuRelationCreateManyArgs} args - Arguments to create many SystemRoleMenuRelations.
     * @example
     * // Create many SystemRoleMenuRelations
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SystemRoleMenuRelationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRoleMenuRelationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemRoleMenuRelation.
     * @param {SystemRoleMenuRelationDeleteArgs} args - Arguments to delete one SystemRoleMenuRelation.
     * @example
     * // Delete one SystemRoleMenuRelation
     * const SystemRoleMenuRelation = await prisma.systemRoleMenuRelation.delete({
     *   where: {
     *     // ... filter to delete one SystemRoleMenuRelation
     *   }
     * })
     * 
    **/
    delete<T extends SystemRoleMenuRelationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRoleMenuRelationDeleteArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SystemRoleMenuRelation.
     * @param {SystemRoleMenuRelationUpdateArgs} args - Arguments to update one SystemRoleMenuRelation.
     * @example
     * // Update one SystemRoleMenuRelation
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SystemRoleMenuRelationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRoleMenuRelationUpdateArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SystemRoleMenuRelations.
     * @param {SystemRoleMenuRelationDeleteManyArgs} args - Arguments to filter SystemRoleMenuRelations to delete.
     * @example
     * // Delete a few SystemRoleMenuRelations
     * const { count } = await prisma.systemRoleMenuRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SystemRoleMenuRelationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SystemRoleMenuRelationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemRoleMenuRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemRoleMenuRelations
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SystemRoleMenuRelationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRoleMenuRelationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemRoleMenuRelation.
     * @param {SystemRoleMenuRelationUpsertArgs} args - Arguments to update or create a SystemRoleMenuRelation.
     * @example
     * // Update or create a SystemRoleMenuRelation
     * const systemRoleMenuRelation = await prisma.systemRoleMenuRelation.upsert({
     *   create: {
     *     // ... data to create a SystemRoleMenuRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemRoleMenuRelation we want to update
     *   }
     * })
    **/
    upsert<T extends SystemRoleMenuRelationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SystemRoleMenuRelationUpsertArgs<ExtArgs>>
    ): Prisma__SystemRoleMenuRelationClient<$Result.GetResult<Prisma.$SystemRoleMenuRelationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SystemRoleMenuRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationCountArgs} args - Arguments to filter SystemRoleMenuRelations to count.
     * @example
     * // Count the number of SystemRoleMenuRelations
     * const count = await prisma.systemRoleMenuRelation.count({
     *   where: {
     *     // ... the filter for the SystemRoleMenuRelations we want to count
     *   }
     * })
    **/
    count<T extends SystemRoleMenuRelationCountArgs>(
      args?: Subset<T, SystemRoleMenuRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemRoleMenuRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemRoleMenuRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemRoleMenuRelationAggregateArgs>(args: Subset<T, SystemRoleMenuRelationAggregateArgs>): Prisma.PrismaPromise<GetSystemRoleMenuRelationAggregateType<T>>

    /**
     * Group by SystemRoleMenuRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemRoleMenuRelationGroupByArgs} args - Group by arguments.
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
      T extends SystemRoleMenuRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemRoleMenuRelationGroupByArgs['orderBy'] }
        : { orderBy?: SystemRoleMenuRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemRoleMenuRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemRoleMenuRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemRoleMenuRelation model
   */
  readonly fields: SystemRoleMenuRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemRoleMenuRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemRoleMenuRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends SystemRolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemRolesDefaultArgs<ExtArgs>>): Prisma__SystemRolesClient<$Result.GetResult<Prisma.$SystemRolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    menu<T extends SystemMenusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemMenusDefaultArgs<ExtArgs>>): Prisma__SystemMenusClient<$Result.GetResult<Prisma.$SystemMenusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SystemRoleMenuRelation model
   */ 
  interface SystemRoleMenuRelationFieldRefs {
    readonly roleId: FieldRef<"SystemRoleMenuRelation", 'Int'>
    readonly menuId: FieldRef<"SystemRoleMenuRelation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemRoleMenuRelation findUnique
   */
  export type SystemRoleMenuRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoleMenuRelation to fetch.
     */
    where: SystemRoleMenuRelationWhereUniqueInput
  }

  /**
   * SystemRoleMenuRelation findUniqueOrThrow
   */
  export type SystemRoleMenuRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoleMenuRelation to fetch.
     */
    where: SystemRoleMenuRelationWhereUniqueInput
  }

  /**
   * SystemRoleMenuRelation findFirst
   */
  export type SystemRoleMenuRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoleMenuRelation to fetch.
     */
    where?: SystemRoleMenuRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoleMenuRelations to fetch.
     */
    orderBy?: SystemRoleMenuRelationOrderByWithRelationInput | SystemRoleMenuRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemRoleMenuRelations.
     */
    cursor?: SystemRoleMenuRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoleMenuRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoleMenuRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemRoleMenuRelations.
     */
    distinct?: SystemRoleMenuRelationScalarFieldEnum | SystemRoleMenuRelationScalarFieldEnum[]
  }

  /**
   * SystemRoleMenuRelation findFirstOrThrow
   */
  export type SystemRoleMenuRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoleMenuRelation to fetch.
     */
    where?: SystemRoleMenuRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoleMenuRelations to fetch.
     */
    orderBy?: SystemRoleMenuRelationOrderByWithRelationInput | SystemRoleMenuRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemRoleMenuRelations.
     */
    cursor?: SystemRoleMenuRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoleMenuRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoleMenuRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemRoleMenuRelations.
     */
    distinct?: SystemRoleMenuRelationScalarFieldEnum | SystemRoleMenuRelationScalarFieldEnum[]
  }

  /**
   * SystemRoleMenuRelation findMany
   */
  export type SystemRoleMenuRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * Filter, which SystemRoleMenuRelations to fetch.
     */
    where?: SystemRoleMenuRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemRoleMenuRelations to fetch.
     */
    orderBy?: SystemRoleMenuRelationOrderByWithRelationInput | SystemRoleMenuRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemRoleMenuRelations.
     */
    cursor?: SystemRoleMenuRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemRoleMenuRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemRoleMenuRelations.
     */
    skip?: number
    distinct?: SystemRoleMenuRelationScalarFieldEnum | SystemRoleMenuRelationScalarFieldEnum[]
  }

  /**
   * SystemRoleMenuRelation create
   */
  export type SystemRoleMenuRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemRoleMenuRelation.
     */
    data: XOR<SystemRoleMenuRelationCreateInput, SystemRoleMenuRelationUncheckedCreateInput>
  }

  /**
   * SystemRoleMenuRelation createMany
   */
  export type SystemRoleMenuRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemRoleMenuRelations.
     */
    data: SystemRoleMenuRelationCreateManyInput | SystemRoleMenuRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemRoleMenuRelation update
   */
  export type SystemRoleMenuRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemRoleMenuRelation.
     */
    data: XOR<SystemRoleMenuRelationUpdateInput, SystemRoleMenuRelationUncheckedUpdateInput>
    /**
     * Choose, which SystemRoleMenuRelation to update.
     */
    where: SystemRoleMenuRelationWhereUniqueInput
  }

  /**
   * SystemRoleMenuRelation updateMany
   */
  export type SystemRoleMenuRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemRoleMenuRelations.
     */
    data: XOR<SystemRoleMenuRelationUpdateManyMutationInput, SystemRoleMenuRelationUncheckedUpdateManyInput>
    /**
     * Filter which SystemRoleMenuRelations to update
     */
    where?: SystemRoleMenuRelationWhereInput
  }

  /**
   * SystemRoleMenuRelation upsert
   */
  export type SystemRoleMenuRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemRoleMenuRelation to update in case it exists.
     */
    where: SystemRoleMenuRelationWhereUniqueInput
    /**
     * In case the SystemRoleMenuRelation found by the `where` argument doesn't exist, create a new SystemRoleMenuRelation with this data.
     */
    create: XOR<SystemRoleMenuRelationCreateInput, SystemRoleMenuRelationUncheckedCreateInput>
    /**
     * In case the SystemRoleMenuRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemRoleMenuRelationUpdateInput, SystemRoleMenuRelationUncheckedUpdateInput>
  }

  /**
   * SystemRoleMenuRelation delete
   */
  export type SystemRoleMenuRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
    /**
     * Filter which SystemRoleMenuRelation to delete.
     */
    where: SystemRoleMenuRelationWhereUniqueInput
  }

  /**
   * SystemRoleMenuRelation deleteMany
   */
  export type SystemRoleMenuRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemRoleMenuRelations to delete
     */
    where?: SystemRoleMenuRelationWhereInput
  }

  /**
   * SystemRoleMenuRelation without action
   */
  export type SystemRoleMenuRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemRoleMenuRelation
     */
    select?: SystemRoleMenuRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemRoleMenuRelationInclude<ExtArgs> | null
  }


  /**
   * Model books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    name: string | null
    author: string | null
    price: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    author: string | null
    price: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    name: number
    author: number
    price: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    name?: true
    author?: true
    price?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    name?: true
    author?: true
    price?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    name?: true
    author?: true
    price?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to aggregate.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type booksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
    orderBy?: booksOrderByWithAggregationInput | booksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: booksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: number
    name: string
    author: string
    price: number
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends booksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type booksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    author?: boolean
    price?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["books"]>

  export type booksSelectScalar = {
    id?: boolean
    name?: boolean
    author?: boolean
    price?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $booksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "books"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      author: string
      price: number
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["books"]>
    composites: {}
  }


  type booksGetPayload<S extends boolean | null | undefined | booksDefaultArgs> = $Result.GetResult<Prisma.$booksPayload, S>

  type booksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<booksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface booksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['books'], meta: { name: 'books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {booksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends booksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, booksFindUniqueArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {booksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends booksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends booksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindFirstArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends booksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends booksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Books.
     * @param {booksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
    **/
    create<T extends booksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, booksCreateArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Books.
     * @param {booksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends booksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, booksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Books.
     * @param {booksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
    **/
    delete<T extends booksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, booksDeleteArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Books.
     * @param {booksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends booksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, booksUpdateArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {booksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends booksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, booksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends booksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, booksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Books.
     * @param {booksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
    **/
    upsert<T extends booksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, booksUpsertArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends booksCountArgs>(
      args?: Subset<T, booksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksGroupByArgs} args - Group by arguments.
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
      T extends booksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booksGroupByArgs['orderBy'] }
        : { orderBy?: booksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, booksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the books model
   */
  readonly fields: booksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the books model
   */ 
  interface booksFieldRefs {
    readonly id: FieldRef<"books", 'Int'>
    readonly name: FieldRef<"books", 'String'>
    readonly author: FieldRef<"books", 'String'>
    readonly price: FieldRef<"books", 'Float'>
    readonly categoryId: FieldRef<"books", 'Int'>
    readonly createdAt: FieldRef<"books", 'DateTime'>
    readonly updatedAt: FieldRef<"books", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * books findUnique
   */
  export type booksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findUniqueOrThrow
   */
  export type booksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findFirst
   */
  export type booksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findFirstOrThrow
   */
  export type booksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findMany
   */
  export type booksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books create
   */
  export type booksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * The data needed to create a books.
     */
    data: XOR<booksCreateInput, booksUncheckedCreateInput>
  }

  /**
   * books createMany
   */
  export type booksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * books update
   */
  export type booksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * The data needed to update a books.
     */
    data: XOR<booksUpdateInput, booksUncheckedUpdateInput>
    /**
     * Choose, which books to update.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books updateMany
   */
  export type booksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
  }

  /**
   * books upsert
   */
  export type booksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * The filter to search for the books to update in case it exists.
     */
    where: booksWhereUniqueInput
    /**
     * In case the books found by the `where` argument doesn't exist, create a new books with this data.
     */
    create: XOR<booksCreateInput, booksUncheckedCreateInput>
    /**
     * In case the books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booksUpdateInput, booksUncheckedUpdateInput>
  }

  /**
   * books delete
   */
  export type booksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Filter which books to delete.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books deleteMany
   */
  export type booksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: booksWhereInput
  }

  /**
   * books without action
   */
  export type booksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
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


  export const SystemMenusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    component: 'component',
    query: 'query',
    icon: 'icon',
    orderNo: 'orderNo',
    parentId: 'parentId',
    type: 'type',
    status: 'status',
    noClosable: 'noClosable',
    hidden: 'hidden',
    activeMenu: 'activeMenu',
    guard: 'guard',
    dot: 'dot',
    badge: 'badge',
    isFrame: 'isFrame',
    isCache: 'isCache',
    permissionCode: 'permissionCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemMenusScalarFieldEnum = (typeof SystemMenusScalarFieldEnum)[keyof typeof SystemMenusScalarFieldEnum]


  export const SystemUsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    type: 'type',
    status: 'status',
    orderNo: 'orderNo',
    unionId: 'unionId',
    openId: 'openId',
    loginIP: 'loginIP',
    loginAt: 'loginAt',
    remark: 'remark',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemUsersScalarFieldEnum = (typeof SystemUsersScalarFieldEnum)[keyof typeof SystemUsersScalarFieldEnum]


  export const SystemUserProfileScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    expired: 'expired',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SystemUserProfileScalarFieldEnum = (typeof SystemUserProfileScalarFieldEnum)[keyof typeof SystemUserProfileScalarFieldEnum]


  export const SystemLogsScalarFieldEnum: {
    id: 'id',
    api: 'api',
    type: 'type',
    status: 'status',
    content: 'content',
    username: 'username',
    ip: 'ip',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type SystemLogsScalarFieldEnum = (typeof SystemLogsScalarFieldEnum)[keyof typeof SystemLogsScalarFieldEnum]


  export const SystemDictionaryCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    orderNo: 'orderNo',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemDictionaryCategoryScalarFieldEnum = (typeof SystemDictionaryCategoryScalarFieldEnum)[keyof typeof SystemDictionaryCategoryScalarFieldEnum]


  export const SystemDictionaryDataScalarFieldEnum: {
    id: 'id',
    label: 'label',
    value: 'value',
    orderNo: 'orderNo',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type SystemDictionaryDataScalarFieldEnum = (typeof SystemDictionaryDataScalarFieldEnum)[keyof typeof SystemDictionaryDataScalarFieldEnum]


  export const SystemRolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemRolesScalarFieldEnum = (typeof SystemRolesScalarFieldEnum)[keyof typeof SystemRolesScalarFieldEnum]


  export const SystemUserRoleRelationScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type SystemUserRoleRelationScalarFieldEnum = (typeof SystemUserRoleRelationScalarFieldEnum)[keyof typeof SystemUserRoleRelationScalarFieldEnum]


  export const SystemRoleMenuRelationScalarFieldEnum: {
    roleId: 'roleId',
    menuId: 'menuId'
  };

  export type SystemRoleMenuRelationScalarFieldEnum = (typeof SystemRoleMenuRelationScalarFieldEnum)[keyof typeof SystemRoleMenuRelationScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    author: 'author',
    price: 'price',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SystemMenusWhereInput = {
    AND?: SystemMenusWhereInput | SystemMenusWhereInput[]
    OR?: SystemMenusWhereInput[]
    NOT?: SystemMenusWhereInput | SystemMenusWhereInput[]
    id?: IntFilter<"SystemMenus"> | number
    name?: StringFilter<"SystemMenus"> | string
    path?: StringFilter<"SystemMenus"> | string
    component?: StringNullableFilter<"SystemMenus"> | string | null
    query?: StringNullableFilter<"SystemMenus"> | string | null
    icon?: StringNullableFilter<"SystemMenus"> | string | null
    orderNo?: IntFilter<"SystemMenus"> | number
    parentId?: IntFilter<"SystemMenus"> | number
    type?: IntFilter<"SystemMenus"> | number
    status?: IntFilter<"SystemMenus"> | number
    noClosable?: IntFilter<"SystemMenus"> | number
    hidden?: IntFilter<"SystemMenus"> | number
    activeMenu?: StringNullableFilter<"SystemMenus"> | string | null
    guard?: StringNullableFilter<"SystemMenus"> | string | null
    dot?: IntFilter<"SystemMenus"> | number
    badge?: StringNullableFilter<"SystemMenus"> | string | null
    isFrame?: IntNullableFilter<"SystemMenus"> | number | null
    isCache?: IntFilter<"SystemMenus"> | number
    permissionCode?: StringNullableFilter<"SystemMenus"> | string | null
    createdAt?: DateTimeFilter<"SystemMenus"> | Date | string
    updatedAt?: DateTimeFilter<"SystemMenus"> | Date | string
    children?: SystemMenusListRelationFilter
    parent?: XOR<SystemMenusNullableRelationFilter, SystemMenusWhereInput> | null
    systemRoles?: SystemRoleMenuRelationListRelationFilter
  }

  export type SystemMenusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    component?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    activeMenu?: SortOrderInput | SortOrder
    guard?: SortOrderInput | SortOrder
    dot?: SortOrder
    badge?: SortOrderInput | SortOrder
    isFrame?: SortOrderInput | SortOrder
    isCache?: SortOrder
    permissionCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    children?: SystemMenusOrderByRelationAggregateInput
    parent?: SystemMenusOrderByWithRelationInput
    systemRoles?: SystemRoleMenuRelationOrderByRelationAggregateInput
  }

  export type SystemMenusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemMenusWhereInput | SystemMenusWhereInput[]
    OR?: SystemMenusWhereInput[]
    NOT?: SystemMenusWhereInput | SystemMenusWhereInput[]
    name?: StringFilter<"SystemMenus"> | string
    path?: StringFilter<"SystemMenus"> | string
    component?: StringNullableFilter<"SystemMenus"> | string | null
    query?: StringNullableFilter<"SystemMenus"> | string | null
    icon?: StringNullableFilter<"SystemMenus"> | string | null
    orderNo?: IntFilter<"SystemMenus"> | number
    parentId?: IntFilter<"SystemMenus"> | number
    type?: IntFilter<"SystemMenus"> | number
    status?: IntFilter<"SystemMenus"> | number
    noClosable?: IntFilter<"SystemMenus"> | number
    hidden?: IntFilter<"SystemMenus"> | number
    activeMenu?: StringNullableFilter<"SystemMenus"> | string | null
    guard?: StringNullableFilter<"SystemMenus"> | string | null
    dot?: IntFilter<"SystemMenus"> | number
    badge?: StringNullableFilter<"SystemMenus"> | string | null
    isFrame?: IntNullableFilter<"SystemMenus"> | number | null
    isCache?: IntFilter<"SystemMenus"> | number
    permissionCode?: StringNullableFilter<"SystemMenus"> | string | null
    createdAt?: DateTimeFilter<"SystemMenus"> | Date | string
    updatedAt?: DateTimeFilter<"SystemMenus"> | Date | string
    children?: SystemMenusListRelationFilter
    parent?: XOR<SystemMenusNullableRelationFilter, SystemMenusWhereInput> | null
    systemRoles?: SystemRoleMenuRelationListRelationFilter
  }, "id">

  export type SystemMenusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    component?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    activeMenu?: SortOrderInput | SortOrder
    guard?: SortOrderInput | SortOrder
    dot?: SortOrder
    badge?: SortOrderInput | SortOrder
    isFrame?: SortOrderInput | SortOrder
    isCache?: SortOrder
    permissionCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemMenusCountOrderByAggregateInput
    _avg?: SystemMenusAvgOrderByAggregateInput
    _max?: SystemMenusMaxOrderByAggregateInput
    _min?: SystemMenusMinOrderByAggregateInput
    _sum?: SystemMenusSumOrderByAggregateInput
  }

  export type SystemMenusScalarWhereWithAggregatesInput = {
    AND?: SystemMenusScalarWhereWithAggregatesInput | SystemMenusScalarWhereWithAggregatesInput[]
    OR?: SystemMenusScalarWhereWithAggregatesInput[]
    NOT?: SystemMenusScalarWhereWithAggregatesInput | SystemMenusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemMenus"> | number
    name?: StringWithAggregatesFilter<"SystemMenus"> | string
    path?: StringWithAggregatesFilter<"SystemMenus"> | string
    component?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    query?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    icon?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    orderNo?: IntWithAggregatesFilter<"SystemMenus"> | number
    parentId?: IntWithAggregatesFilter<"SystemMenus"> | number
    type?: IntWithAggregatesFilter<"SystemMenus"> | number
    status?: IntWithAggregatesFilter<"SystemMenus"> | number
    noClosable?: IntWithAggregatesFilter<"SystemMenus"> | number
    hidden?: IntWithAggregatesFilter<"SystemMenus"> | number
    activeMenu?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    guard?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    dot?: IntWithAggregatesFilter<"SystemMenus"> | number
    badge?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    isFrame?: IntNullableWithAggregatesFilter<"SystemMenus"> | number | null
    isCache?: IntWithAggregatesFilter<"SystemMenus"> | number
    permissionCode?: StringNullableWithAggregatesFilter<"SystemMenus"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemMenus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemMenus"> | Date | string
  }

  export type SystemUsersWhereInput = {
    AND?: SystemUsersWhereInput | SystemUsersWhereInput[]
    OR?: SystemUsersWhereInput[]
    NOT?: SystemUsersWhereInput | SystemUsersWhereInput[]
    id?: IntFilter<"SystemUsers"> | number
    username?: StringFilter<"SystemUsers"> | string
    password?: StringFilter<"SystemUsers"> | string
    type?: IntFilter<"SystemUsers"> | number
    status?: IntFilter<"SystemUsers"> | number
    orderNo?: IntFilter<"SystemUsers"> | number
    unionId?: StringNullableFilter<"SystemUsers"> | string | null
    openId?: StringNullableFilter<"SystemUsers"> | string | null
    loginIP?: StringNullableFilter<"SystemUsers"> | string | null
    loginAt?: DateTimeNullableFilter<"SystemUsers"> | Date | string | null
    remark?: StringNullableFilter<"SystemUsers"> | string | null
    createdAt?: DateTimeFilter<"SystemUsers"> | Date | string
    updatedAt?: DateTimeFilter<"SystemUsers"> | Date | string
    profile?: XOR<SystemUserProfileNullableRelationFilter, SystemUserProfileWhereInput> | null
    logs?: SystemLogsListRelationFilter
    roles?: SystemUserRoleRelationListRelationFilter
  }

  export type SystemUsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
    unionId?: SortOrderInput | SortOrder
    openId?: SortOrderInput | SortOrder
    loginIP?: SortOrderInput | SortOrder
    loginAt?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: SystemUserProfileOrderByWithRelationInput
    logs?: SystemLogsOrderByRelationAggregateInput
    roles?: SystemUserRoleRelationOrderByRelationAggregateInput
  }

  export type SystemUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: SystemUsersWhereInput | SystemUsersWhereInput[]
    OR?: SystemUsersWhereInput[]
    NOT?: SystemUsersWhereInput | SystemUsersWhereInput[]
    password?: StringFilter<"SystemUsers"> | string
    type?: IntFilter<"SystemUsers"> | number
    status?: IntFilter<"SystemUsers"> | number
    orderNo?: IntFilter<"SystemUsers"> | number
    unionId?: StringNullableFilter<"SystemUsers"> | string | null
    openId?: StringNullableFilter<"SystemUsers"> | string | null
    loginIP?: StringNullableFilter<"SystemUsers"> | string | null
    loginAt?: DateTimeNullableFilter<"SystemUsers"> | Date | string | null
    remark?: StringNullableFilter<"SystemUsers"> | string | null
    createdAt?: DateTimeFilter<"SystemUsers"> | Date | string
    updatedAt?: DateTimeFilter<"SystemUsers"> | Date | string
    profile?: XOR<SystemUserProfileNullableRelationFilter, SystemUserProfileWhereInput> | null
    logs?: SystemLogsListRelationFilter
    roles?: SystemUserRoleRelationListRelationFilter
  }, "id" | "username">

  export type SystemUsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
    unionId?: SortOrderInput | SortOrder
    openId?: SortOrderInput | SortOrder
    loginIP?: SortOrderInput | SortOrder
    loginAt?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemUsersCountOrderByAggregateInput
    _avg?: SystemUsersAvgOrderByAggregateInput
    _max?: SystemUsersMaxOrderByAggregateInput
    _min?: SystemUsersMinOrderByAggregateInput
    _sum?: SystemUsersSumOrderByAggregateInput
  }

  export type SystemUsersScalarWhereWithAggregatesInput = {
    AND?: SystemUsersScalarWhereWithAggregatesInput | SystemUsersScalarWhereWithAggregatesInput[]
    OR?: SystemUsersScalarWhereWithAggregatesInput[]
    NOT?: SystemUsersScalarWhereWithAggregatesInput | SystemUsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemUsers"> | number
    username?: StringWithAggregatesFilter<"SystemUsers"> | string
    password?: StringWithAggregatesFilter<"SystemUsers"> | string
    type?: IntWithAggregatesFilter<"SystemUsers"> | number
    status?: IntWithAggregatesFilter<"SystemUsers"> | number
    orderNo?: IntWithAggregatesFilter<"SystemUsers"> | number
    unionId?: StringNullableWithAggregatesFilter<"SystemUsers"> | string | null
    openId?: StringNullableWithAggregatesFilter<"SystemUsers"> | string | null
    loginIP?: StringNullableWithAggregatesFilter<"SystemUsers"> | string | null
    loginAt?: DateTimeNullableWithAggregatesFilter<"SystemUsers"> | Date | string | null
    remark?: StringNullableWithAggregatesFilter<"SystemUsers"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemUsers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemUsers"> | Date | string
  }

  export type SystemUserProfileWhereInput = {
    AND?: SystemUserProfileWhereInput | SystemUserProfileWhereInput[]
    OR?: SystemUserProfileWhereInput[]
    NOT?: SystemUserProfileWhereInput | SystemUserProfileWhereInput[]
    id?: IntFilter<"SystemUserProfile"> | number
    nickname?: StringNullableFilter<"SystemUserProfile"> | string | null
    email?: StringNullableFilter<"SystemUserProfile"> | string | null
    phone?: StringNullableFilter<"SystemUserProfile"> | string | null
    avatar?: StringNullableFilter<"SystemUserProfile"> | string | null
    expired?: DateTimeNullableFilter<"SystemUserProfile"> | Date | string | null
    gender?: IntNullableFilter<"SystemUserProfile"> | number | null
    createdAt?: DateTimeFilter<"SystemUserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SystemUserProfile"> | Date | string
    userId?: IntFilter<"SystemUserProfile"> | number
    user?: XOR<SystemUsersRelationFilter, SystemUsersWhereInput>
  }

  export type SystemUserProfileOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    expired?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: SystemUsersOrderByWithRelationInput
  }

  export type SystemUserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    userId?: number
    AND?: SystemUserProfileWhereInput | SystemUserProfileWhereInput[]
    OR?: SystemUserProfileWhereInput[]
    NOT?: SystemUserProfileWhereInput | SystemUserProfileWhereInput[]
    nickname?: StringNullableFilter<"SystemUserProfile"> | string | null
    avatar?: StringNullableFilter<"SystemUserProfile"> | string | null
    expired?: DateTimeNullableFilter<"SystemUserProfile"> | Date | string | null
    gender?: IntNullableFilter<"SystemUserProfile"> | number | null
    createdAt?: DateTimeFilter<"SystemUserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SystemUserProfile"> | Date | string
    user?: XOR<SystemUsersRelationFilter, SystemUsersWhereInput>
  }, "id" | "email" | "phone" | "userId">

  export type SystemUserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    expired?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SystemUserProfileCountOrderByAggregateInput
    _avg?: SystemUserProfileAvgOrderByAggregateInput
    _max?: SystemUserProfileMaxOrderByAggregateInput
    _min?: SystemUserProfileMinOrderByAggregateInput
    _sum?: SystemUserProfileSumOrderByAggregateInput
  }

  export type SystemUserProfileScalarWhereWithAggregatesInput = {
    AND?: SystemUserProfileScalarWhereWithAggregatesInput | SystemUserProfileScalarWhereWithAggregatesInput[]
    OR?: SystemUserProfileScalarWhereWithAggregatesInput[]
    NOT?: SystemUserProfileScalarWhereWithAggregatesInput | SystemUserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemUserProfile"> | number
    nickname?: StringNullableWithAggregatesFilter<"SystemUserProfile"> | string | null
    email?: StringNullableWithAggregatesFilter<"SystemUserProfile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SystemUserProfile"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"SystemUserProfile"> | string | null
    expired?: DateTimeNullableWithAggregatesFilter<"SystemUserProfile"> | Date | string | null
    gender?: IntNullableWithAggregatesFilter<"SystemUserProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemUserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemUserProfile"> | Date | string
    userId?: IntWithAggregatesFilter<"SystemUserProfile"> | number
  }

  export type SystemLogsWhereInput = {
    AND?: SystemLogsWhereInput | SystemLogsWhereInput[]
    OR?: SystemLogsWhereInput[]
    NOT?: SystemLogsWhereInput | SystemLogsWhereInput[]
    id?: IntFilter<"SystemLogs"> | number
    api?: StringFilter<"SystemLogs"> | string
    type?: IntFilter<"SystemLogs"> | number
    status?: IntFilter<"SystemLogs"> | number
    content?: StringFilter<"SystemLogs"> | string
    username?: StringFilter<"SystemLogs"> | string
    ip?: StringFilter<"SystemLogs"> | string
    createdAt?: DateTimeFilter<"SystemLogs"> | Date | string
    userId?: IntFilter<"SystemLogs"> | number
    user?: XOR<SystemUsersRelationFilter, SystemUsersWhereInput>
  }

  export type SystemLogsOrderByWithRelationInput = {
    id?: SortOrder
    api?: SortOrder
    type?: SortOrder
    status?: SortOrder
    content?: SortOrder
    username?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: SystemUsersOrderByWithRelationInput
  }

  export type SystemLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemLogsWhereInput | SystemLogsWhereInput[]
    OR?: SystemLogsWhereInput[]
    NOT?: SystemLogsWhereInput | SystemLogsWhereInput[]
    api?: StringFilter<"SystemLogs"> | string
    type?: IntFilter<"SystemLogs"> | number
    status?: IntFilter<"SystemLogs"> | number
    content?: StringFilter<"SystemLogs"> | string
    username?: StringFilter<"SystemLogs"> | string
    ip?: StringFilter<"SystemLogs"> | string
    createdAt?: DateTimeFilter<"SystemLogs"> | Date | string
    userId?: IntFilter<"SystemLogs"> | number
    user?: XOR<SystemUsersRelationFilter, SystemUsersWhereInput>
  }, "id">

  export type SystemLogsOrderByWithAggregationInput = {
    id?: SortOrder
    api?: SortOrder
    type?: SortOrder
    status?: SortOrder
    content?: SortOrder
    username?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: SystemLogsCountOrderByAggregateInput
    _avg?: SystemLogsAvgOrderByAggregateInput
    _max?: SystemLogsMaxOrderByAggregateInput
    _min?: SystemLogsMinOrderByAggregateInput
    _sum?: SystemLogsSumOrderByAggregateInput
  }

  export type SystemLogsScalarWhereWithAggregatesInput = {
    AND?: SystemLogsScalarWhereWithAggregatesInput | SystemLogsScalarWhereWithAggregatesInput[]
    OR?: SystemLogsScalarWhereWithAggregatesInput[]
    NOT?: SystemLogsScalarWhereWithAggregatesInput | SystemLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemLogs"> | number
    api?: StringWithAggregatesFilter<"SystemLogs"> | string
    type?: IntWithAggregatesFilter<"SystemLogs"> | number
    status?: IntWithAggregatesFilter<"SystemLogs"> | number
    content?: StringWithAggregatesFilter<"SystemLogs"> | string
    username?: StringWithAggregatesFilter<"SystemLogs"> | string
    ip?: StringWithAggregatesFilter<"SystemLogs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemLogs"> | Date | string
    userId?: IntWithAggregatesFilter<"SystemLogs"> | number
  }

  export type SystemDictionaryCategoryWhereInput = {
    AND?: SystemDictionaryCategoryWhereInput | SystemDictionaryCategoryWhereInput[]
    OR?: SystemDictionaryCategoryWhereInput[]
    NOT?: SystemDictionaryCategoryWhereInput | SystemDictionaryCategoryWhereInput[]
    id?: IntFilter<"SystemDictionaryCategory"> | number
    name?: StringFilter<"SystemDictionaryCategory"> | string
    orderNo?: IntFilter<"SystemDictionaryCategory"> | number
    description?: StringNullableFilter<"SystemDictionaryCategory"> | string | null
    status?: IntFilter<"SystemDictionaryCategory"> | number
    createdAt?: DateTimeFilter<"SystemDictionaryCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SystemDictionaryCategory"> | Date | string
    dictionaryData?: SystemDictionaryDataListRelationFilter
  }

  export type SystemDictionaryCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    orderNo?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dictionaryData?: SystemDictionaryDataOrderByRelationAggregateInput
  }

  export type SystemDictionaryCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemDictionaryCategoryWhereInput | SystemDictionaryCategoryWhereInput[]
    OR?: SystemDictionaryCategoryWhereInput[]
    NOT?: SystemDictionaryCategoryWhereInput | SystemDictionaryCategoryWhereInput[]
    name?: StringFilter<"SystemDictionaryCategory"> | string
    orderNo?: IntFilter<"SystemDictionaryCategory"> | number
    description?: StringNullableFilter<"SystemDictionaryCategory"> | string | null
    status?: IntFilter<"SystemDictionaryCategory"> | number
    createdAt?: DateTimeFilter<"SystemDictionaryCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SystemDictionaryCategory"> | Date | string
    dictionaryData?: SystemDictionaryDataListRelationFilter
  }, "id">

  export type SystemDictionaryCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    orderNo?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemDictionaryCategoryCountOrderByAggregateInput
    _avg?: SystemDictionaryCategoryAvgOrderByAggregateInput
    _max?: SystemDictionaryCategoryMaxOrderByAggregateInput
    _min?: SystemDictionaryCategoryMinOrderByAggregateInput
    _sum?: SystemDictionaryCategorySumOrderByAggregateInput
  }

  export type SystemDictionaryCategoryScalarWhereWithAggregatesInput = {
    AND?: SystemDictionaryCategoryScalarWhereWithAggregatesInput | SystemDictionaryCategoryScalarWhereWithAggregatesInput[]
    OR?: SystemDictionaryCategoryScalarWhereWithAggregatesInput[]
    NOT?: SystemDictionaryCategoryScalarWhereWithAggregatesInput | SystemDictionaryCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemDictionaryCategory"> | number
    name?: StringWithAggregatesFilter<"SystemDictionaryCategory"> | string
    orderNo?: IntWithAggregatesFilter<"SystemDictionaryCategory"> | number
    description?: StringNullableWithAggregatesFilter<"SystemDictionaryCategory"> | string | null
    status?: IntWithAggregatesFilter<"SystemDictionaryCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SystemDictionaryCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemDictionaryCategory"> | Date | string
  }

  export type SystemDictionaryDataWhereInput = {
    AND?: SystemDictionaryDataWhereInput | SystemDictionaryDataWhereInput[]
    OR?: SystemDictionaryDataWhereInput[]
    NOT?: SystemDictionaryDataWhereInput | SystemDictionaryDataWhereInput[]
    id?: IntFilter<"SystemDictionaryData"> | number
    label?: StringFilter<"SystemDictionaryData"> | string
    value?: StringFilter<"SystemDictionaryData"> | string
    orderNo?: IntFilter<"SystemDictionaryData"> | number
    description?: StringNullableFilter<"SystemDictionaryData"> | string | null
    status?: IntFilter<"SystemDictionaryData"> | number
    createdAt?: DateTimeFilter<"SystemDictionaryData"> | Date | string
    updatedAt?: DateTimeFilter<"SystemDictionaryData"> | Date | string
    categoryId?: IntFilter<"SystemDictionaryData"> | number
    category?: XOR<SystemDictionaryCategoryRelationFilter, SystemDictionaryCategoryWhereInput>
  }

  export type SystemDictionaryDataOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    orderNo?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: SystemDictionaryCategoryOrderByWithRelationInput
  }

  export type SystemDictionaryDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemDictionaryDataWhereInput | SystemDictionaryDataWhereInput[]
    OR?: SystemDictionaryDataWhereInput[]
    NOT?: SystemDictionaryDataWhereInput | SystemDictionaryDataWhereInput[]
    label?: StringFilter<"SystemDictionaryData"> | string
    value?: StringFilter<"SystemDictionaryData"> | string
    orderNo?: IntFilter<"SystemDictionaryData"> | number
    description?: StringNullableFilter<"SystemDictionaryData"> | string | null
    status?: IntFilter<"SystemDictionaryData"> | number
    createdAt?: DateTimeFilter<"SystemDictionaryData"> | Date | string
    updatedAt?: DateTimeFilter<"SystemDictionaryData"> | Date | string
    categoryId?: IntFilter<"SystemDictionaryData"> | number
    category?: XOR<SystemDictionaryCategoryRelationFilter, SystemDictionaryCategoryWhereInput>
  }, "id">

  export type SystemDictionaryDataOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    orderNo?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: SystemDictionaryDataCountOrderByAggregateInput
    _avg?: SystemDictionaryDataAvgOrderByAggregateInput
    _max?: SystemDictionaryDataMaxOrderByAggregateInput
    _min?: SystemDictionaryDataMinOrderByAggregateInput
    _sum?: SystemDictionaryDataSumOrderByAggregateInput
  }

  export type SystemDictionaryDataScalarWhereWithAggregatesInput = {
    AND?: SystemDictionaryDataScalarWhereWithAggregatesInput | SystemDictionaryDataScalarWhereWithAggregatesInput[]
    OR?: SystemDictionaryDataScalarWhereWithAggregatesInput[]
    NOT?: SystemDictionaryDataScalarWhereWithAggregatesInput | SystemDictionaryDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemDictionaryData"> | number
    label?: StringWithAggregatesFilter<"SystemDictionaryData"> | string
    value?: StringWithAggregatesFilter<"SystemDictionaryData"> | string
    orderNo?: IntWithAggregatesFilter<"SystemDictionaryData"> | number
    description?: StringNullableWithAggregatesFilter<"SystemDictionaryData"> | string | null
    status?: IntWithAggregatesFilter<"SystemDictionaryData"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SystemDictionaryData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemDictionaryData"> | Date | string
    categoryId?: IntWithAggregatesFilter<"SystemDictionaryData"> | number
  }

  export type SystemRolesWhereInput = {
    AND?: SystemRolesWhereInput | SystemRolesWhereInput[]
    OR?: SystemRolesWhereInput[]
    NOT?: SystemRolesWhereInput | SystemRolesWhereInput[]
    id?: IntFilter<"SystemRoles"> | number
    name?: StringFilter<"SystemRoles"> | string
    code?: StringFilter<"SystemRoles"> | string
    status?: IntFilter<"SystemRoles"> | number
    description?: StringNullableFilter<"SystemRoles"> | string | null
    createdAt?: DateTimeFilter<"SystemRoles"> | Date | string
    updatedAt?: DateTimeFilter<"SystemRoles"> | Date | string
    users?: SystemUserRoleRelationListRelationFilter
    menus?: SystemRoleMenuRelationListRelationFilter
  }

  export type SystemRolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: SystemUserRoleRelationOrderByRelationAggregateInput
    menus?: SystemRoleMenuRelationOrderByRelationAggregateInput
  }

  export type SystemRolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    code?: string
    AND?: SystemRolesWhereInput | SystemRolesWhereInput[]
    OR?: SystemRolesWhereInput[]
    NOT?: SystemRolesWhereInput | SystemRolesWhereInput[]
    status?: IntFilter<"SystemRoles"> | number
    description?: StringNullableFilter<"SystemRoles"> | string | null
    createdAt?: DateTimeFilter<"SystemRoles"> | Date | string
    updatedAt?: DateTimeFilter<"SystemRoles"> | Date | string
    users?: SystemUserRoleRelationListRelationFilter
    menus?: SystemRoleMenuRelationListRelationFilter
  }, "id" | "name" | "code">

  export type SystemRolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemRolesCountOrderByAggregateInput
    _avg?: SystemRolesAvgOrderByAggregateInput
    _max?: SystemRolesMaxOrderByAggregateInput
    _min?: SystemRolesMinOrderByAggregateInput
    _sum?: SystemRolesSumOrderByAggregateInput
  }

  export type SystemRolesScalarWhereWithAggregatesInput = {
    AND?: SystemRolesScalarWhereWithAggregatesInput | SystemRolesScalarWhereWithAggregatesInput[]
    OR?: SystemRolesScalarWhereWithAggregatesInput[]
    NOT?: SystemRolesScalarWhereWithAggregatesInput | SystemRolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemRoles"> | number
    name?: StringWithAggregatesFilter<"SystemRoles"> | string
    code?: StringWithAggregatesFilter<"SystemRoles"> | string
    status?: IntWithAggregatesFilter<"SystemRoles"> | number
    description?: StringNullableWithAggregatesFilter<"SystemRoles"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemRoles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemRoles"> | Date | string
  }

  export type SystemUserRoleRelationWhereInput = {
    AND?: SystemUserRoleRelationWhereInput | SystemUserRoleRelationWhereInput[]
    OR?: SystemUserRoleRelationWhereInput[]
    NOT?: SystemUserRoleRelationWhereInput | SystemUserRoleRelationWhereInput[]
    userId?: IntFilter<"SystemUserRoleRelation"> | number
    roleId?: IntFilter<"SystemUserRoleRelation"> | number
    user?: XOR<SystemUsersRelationFilter, SystemUsersWhereInput>
    role?: XOR<SystemRolesRelationFilter, SystemRolesWhereInput>
  }

  export type SystemUserRoleRelationOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: SystemUsersOrderByWithRelationInput
    role?: SystemRolesOrderByWithRelationInput
  }

  export type SystemUserRoleRelationWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: SystemUserRoleRelationUserIdRoleIdCompoundUniqueInput
    AND?: SystemUserRoleRelationWhereInput | SystemUserRoleRelationWhereInput[]
    OR?: SystemUserRoleRelationWhereInput[]
    NOT?: SystemUserRoleRelationWhereInput | SystemUserRoleRelationWhereInput[]
    userId?: IntFilter<"SystemUserRoleRelation"> | number
    roleId?: IntFilter<"SystemUserRoleRelation"> | number
    user?: XOR<SystemUsersRelationFilter, SystemUsersWhereInput>
    role?: XOR<SystemRolesRelationFilter, SystemRolesWhereInput>
  }, "userId_roleId">

  export type SystemUserRoleRelationOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: SystemUserRoleRelationCountOrderByAggregateInput
    _avg?: SystemUserRoleRelationAvgOrderByAggregateInput
    _max?: SystemUserRoleRelationMaxOrderByAggregateInput
    _min?: SystemUserRoleRelationMinOrderByAggregateInput
    _sum?: SystemUserRoleRelationSumOrderByAggregateInput
  }

  export type SystemUserRoleRelationScalarWhereWithAggregatesInput = {
    AND?: SystemUserRoleRelationScalarWhereWithAggregatesInput | SystemUserRoleRelationScalarWhereWithAggregatesInput[]
    OR?: SystemUserRoleRelationScalarWhereWithAggregatesInput[]
    NOT?: SystemUserRoleRelationScalarWhereWithAggregatesInput | SystemUserRoleRelationScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"SystemUserRoleRelation"> | number
    roleId?: IntWithAggregatesFilter<"SystemUserRoleRelation"> | number
  }

  export type SystemRoleMenuRelationWhereInput = {
    AND?: SystemRoleMenuRelationWhereInput | SystemRoleMenuRelationWhereInput[]
    OR?: SystemRoleMenuRelationWhereInput[]
    NOT?: SystemRoleMenuRelationWhereInput | SystemRoleMenuRelationWhereInput[]
    roleId?: IntFilter<"SystemRoleMenuRelation"> | number
    menuId?: IntFilter<"SystemRoleMenuRelation"> | number
    role?: XOR<SystemRolesRelationFilter, SystemRolesWhereInput>
    menu?: XOR<SystemMenusRelationFilter, SystemMenusWhereInput>
  }

  export type SystemRoleMenuRelationOrderByWithRelationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    role?: SystemRolesOrderByWithRelationInput
    menu?: SystemMenusOrderByWithRelationInput
  }

  export type SystemRoleMenuRelationWhereUniqueInput = Prisma.AtLeast<{
    roleId_menuId?: SystemRoleMenuRelationRoleIdMenuIdCompoundUniqueInput
    AND?: SystemRoleMenuRelationWhereInput | SystemRoleMenuRelationWhereInput[]
    OR?: SystemRoleMenuRelationWhereInput[]
    NOT?: SystemRoleMenuRelationWhereInput | SystemRoleMenuRelationWhereInput[]
    roleId?: IntFilter<"SystemRoleMenuRelation"> | number
    menuId?: IntFilter<"SystemRoleMenuRelation"> | number
    role?: XOR<SystemRolesRelationFilter, SystemRolesWhereInput>
    menu?: XOR<SystemMenusRelationFilter, SystemMenusWhereInput>
  }, "roleId_menuId">

  export type SystemRoleMenuRelationOrderByWithAggregationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    _count?: SystemRoleMenuRelationCountOrderByAggregateInput
    _avg?: SystemRoleMenuRelationAvgOrderByAggregateInput
    _max?: SystemRoleMenuRelationMaxOrderByAggregateInput
    _min?: SystemRoleMenuRelationMinOrderByAggregateInput
    _sum?: SystemRoleMenuRelationSumOrderByAggregateInput
  }

  export type SystemRoleMenuRelationScalarWhereWithAggregatesInput = {
    AND?: SystemRoleMenuRelationScalarWhereWithAggregatesInput | SystemRoleMenuRelationScalarWhereWithAggregatesInput[]
    OR?: SystemRoleMenuRelationScalarWhereWithAggregatesInput[]
    NOT?: SystemRoleMenuRelationScalarWhereWithAggregatesInput | SystemRoleMenuRelationScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"SystemRoleMenuRelation"> | number
    menuId?: IntWithAggregatesFilter<"SystemRoleMenuRelation"> | number
  }

  export type booksWhereInput = {
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    id?: IntFilter<"books"> | number
    name?: StringFilter<"books"> | string
    author?: StringFilter<"books"> | string
    price?: FloatFilter<"books"> | number
    categoryId?: IntFilter<"books"> | number
    createdAt?: DateTimeFilter<"books"> | Date | string
    updatedAt?: DateTimeFilter<"books"> | Date | string
  }

  export type booksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    name?: StringFilter<"books"> | string
    author?: StringFilter<"books"> | string
    price?: FloatFilter<"books"> | number
    categoryId?: IntFilter<"books"> | number
    createdAt?: DateTimeFilter<"books"> | Date | string
    updatedAt?: DateTimeFilter<"books"> | Date | string
  }, "id">

  export type booksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: booksCountOrderByAggregateInput
    _avg?: booksAvgOrderByAggregateInput
    _max?: booksMaxOrderByAggregateInput
    _min?: booksMinOrderByAggregateInput
    _sum?: booksSumOrderByAggregateInput
  }

  export type booksScalarWhereWithAggregatesInput = {
    AND?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    OR?: booksScalarWhereWithAggregatesInput[]
    NOT?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"books"> | number
    name?: StringWithAggregatesFilter<"books"> | string
    author?: StringWithAggregatesFilter<"books"> | string
    price?: FloatWithAggregatesFilter<"books"> | number
    categoryId?: IntWithAggregatesFilter<"books"> | number
    createdAt?: DateTimeWithAggregatesFilter<"books"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"books"> | Date | string
  }

  export type SystemMenusCreateInput = {
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: SystemMenusCreateNestedManyWithoutParentInput
    parent?: SystemMenusCreateNestedOneWithoutChildrenInput
    systemRoles?: SystemRoleMenuRelationCreateNestedManyWithoutMenuInput
  }

  export type SystemMenusUncheckedCreateInput = {
    id?: number
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    parentId?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: SystemMenusUncheckedCreateNestedManyWithoutParentInput
    systemRoles?: SystemRoleMenuRelationUncheckedCreateNestedManyWithoutMenuInput
  }

  export type SystemMenusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SystemMenusUpdateManyWithoutParentNestedInput
    parent?: SystemMenusUpdateOneWithoutChildrenNestedInput
    systemRoles?: SystemRoleMenuRelationUpdateManyWithoutMenuNestedInput
  }

  export type SystemMenusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SystemMenusUncheckedUpdateManyWithoutParentNestedInput
    systemRoles?: SystemRoleMenuRelationUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type SystemMenusCreateManyInput = {
    id?: number
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    parentId?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemMenusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMenusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUsersCreateInput = {
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SystemUserProfileCreateNestedOneWithoutUserInput
    logs?: SystemLogsCreateNestedManyWithoutUserInput
    roles?: SystemUserRoleRelationCreateNestedManyWithoutUserInput
  }

  export type SystemUsersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SystemUserProfileUncheckedCreateNestedOneWithoutUserInput
    logs?: SystemLogsUncheckedCreateNestedManyWithoutUserInput
    roles?: SystemUserRoleRelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type SystemUsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SystemUserProfileUpdateOneWithoutUserNestedInput
    logs?: SystemLogsUpdateManyWithoutUserNestedInput
    roles?: SystemUserRoleRelationUpdateManyWithoutUserNestedInput
  }

  export type SystemUsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SystemUserProfileUncheckedUpdateOneWithoutUserNestedInput
    logs?: SystemLogsUncheckedUpdateManyWithoutUserNestedInput
    roles?: SystemUserRoleRelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SystemUsersCreateManyInput = {
    id?: number
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemUsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserProfileCreateInput = {
    nickname?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    expired?: Date | string | null
    gender?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: SystemUsersCreateNestedOneWithoutProfileInput
  }

  export type SystemUserProfileUncheckedCreateInput = {
    id?: number
    nickname?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    expired?: Date | string | null
    gender?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type SystemUserProfileUpdateInput = {
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: SystemUsersUpdateOneRequiredWithoutProfileNestedInput
  }

  export type SystemUserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemUserProfileCreateManyInput = {
    id?: number
    nickname?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    expired?: Date | string | null
    gender?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type SystemUserProfileUpdateManyMutationInput = {
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemLogsCreateInput = {
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt?: Date | string
    user: SystemUsersCreateNestedOneWithoutLogsInput
  }

  export type SystemLogsUncheckedCreateInput = {
    id?: number
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt?: Date | string
    userId: number
  }

  export type SystemLogsUpdateInput = {
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: SystemUsersUpdateOneRequiredWithoutLogsNestedInput
  }

  export type SystemLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemLogsCreateManyInput = {
    id?: number
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt?: Date | string
    userId: number
  }

  export type SystemLogsUpdateManyMutationInput = {
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemDictionaryCategoryCreateInput = {
    name: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dictionaryData?: SystemDictionaryDataCreateNestedManyWithoutCategoryInput
  }

  export type SystemDictionaryCategoryUncheckedCreateInput = {
    id?: number
    name: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dictionaryData?: SystemDictionaryDataUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SystemDictionaryCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dictionaryData?: SystemDictionaryDataUpdateManyWithoutCategoryNestedInput
  }

  export type SystemDictionaryCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dictionaryData?: SystemDictionaryDataUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SystemDictionaryCategoryCreateManyInput = {
    id?: number
    name: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemDictionaryCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemDictionaryCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemDictionaryDataCreateInput = {
    label: string
    value: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: SystemDictionaryCategoryCreateNestedOneWithoutDictionaryDataInput
  }

  export type SystemDictionaryDataUncheckedCreateInput = {
    id?: number
    label: string
    value: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type SystemDictionaryDataUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: SystemDictionaryCategoryUpdateOneRequiredWithoutDictionaryDataNestedInput
  }

  export type SystemDictionaryDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemDictionaryDataCreateManyInput = {
    id?: number
    label: string
    value: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type SystemDictionaryDataUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemDictionaryDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemRolesCreateInput = {
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: SystemUserRoleRelationCreateNestedManyWithoutRoleInput
    menus?: SystemRoleMenuRelationCreateNestedManyWithoutRoleInput
  }

  export type SystemRolesUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: SystemUserRoleRelationUncheckedCreateNestedManyWithoutRoleInput
    menus?: SystemRoleMenuRelationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SystemRolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: SystemUserRoleRelationUpdateManyWithoutRoleNestedInput
    menus?: SystemRoleMenuRelationUpdateManyWithoutRoleNestedInput
  }

  export type SystemRolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: SystemUserRoleRelationUncheckedUpdateManyWithoutRoleNestedInput
    menus?: SystemRoleMenuRelationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SystemRolesCreateManyInput = {
    id?: number
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemRolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemRolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserRoleRelationCreateInput = {
    user: SystemUsersCreateNestedOneWithoutRolesInput
    role: SystemRolesCreateNestedOneWithoutUsersInput
  }

  export type SystemUserRoleRelationUncheckedCreateInput = {
    userId: number
    roleId: number
  }

  export type SystemUserRoleRelationUpdateInput = {
    user?: SystemUsersUpdateOneRequiredWithoutRolesNestedInput
    role?: SystemRolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SystemUserRoleRelationUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemUserRoleRelationCreateManyInput = {
    userId: number
    roleId: number
  }

  export type SystemUserRoleRelationUpdateManyMutationInput = {

  }

  export type SystemUserRoleRelationUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemRoleMenuRelationCreateInput = {
    role: SystemRolesCreateNestedOneWithoutMenusInput
    menu: SystemMenusCreateNestedOneWithoutSystemRolesInput
  }

  export type SystemRoleMenuRelationUncheckedCreateInput = {
    roleId: number
    menuId: number
  }

  export type SystemRoleMenuRelationUpdateInput = {
    role?: SystemRolesUpdateOneRequiredWithoutMenusNestedInput
    menu?: SystemMenusUpdateOneRequiredWithoutSystemRolesNestedInput
  }

  export type SystemRoleMenuRelationUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemRoleMenuRelationCreateManyInput = {
    roleId: number
    menuId: number
  }

  export type SystemRoleMenuRelationUpdateManyMutationInput = {

  }

  export type SystemRoleMenuRelationUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type booksCreateInput = {
    name: string
    author: string
    price: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUncheckedCreateInput = {
    id?: number
    name: string
    author: string
    price: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksCreateManyInput = {
    id?: number
    name: string
    author: string
    price: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SystemMenusListRelationFilter = {
    every?: SystemMenusWhereInput
    some?: SystemMenusWhereInput
    none?: SystemMenusWhereInput
  }

  export type SystemMenusNullableRelationFilter = {
    is?: SystemMenusWhereInput | null
    isNot?: SystemMenusWhereInput | null
  }

  export type SystemRoleMenuRelationListRelationFilter = {
    every?: SystemRoleMenuRelationWhereInput
    some?: SystemRoleMenuRelationWhereInput
    none?: SystemRoleMenuRelationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SystemMenusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemRoleMenuRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemMenusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    component?: SortOrder
    query?: SortOrder
    icon?: SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    activeMenu?: SortOrder
    guard?: SortOrder
    dot?: SortOrder
    badge?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
    permissionCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemMenusAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    dot?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
  }

  export type SystemMenusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    component?: SortOrder
    query?: SortOrder
    icon?: SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    activeMenu?: SortOrder
    guard?: SortOrder
    dot?: SortOrder
    badge?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
    permissionCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemMenusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    component?: SortOrder
    query?: SortOrder
    icon?: SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    activeMenu?: SortOrder
    guard?: SortOrder
    dot?: SortOrder
    badge?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
    permissionCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemMenusSumOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    parentId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    noClosable?: SortOrder
    hidden?: SortOrder
    dot?: SortOrder
    isFrame?: SortOrder
    isCache?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SystemUserProfileNullableRelationFilter = {
    is?: SystemUserProfileWhereInput | null
    isNot?: SystemUserProfileWhereInput | null
  }

  export type SystemLogsListRelationFilter = {
    every?: SystemLogsWhereInput
    some?: SystemLogsWhereInput
    none?: SystemLogsWhereInput
  }

  export type SystemUserRoleRelationListRelationFilter = {
    every?: SystemUserRoleRelationWhereInput
    some?: SystemUserRoleRelationWhereInput
    none?: SystemUserRoleRelationWhereInput
  }

  export type SystemLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemUserRoleRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemUsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
    unionId?: SortOrder
    openId?: SortOrder
    loginIP?: SortOrder
    loginAt?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemUsersAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
  }

  export type SystemUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
    unionId?: SortOrder
    openId?: SortOrder
    loginIP?: SortOrder
    loginAt?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemUsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
    unionId?: SortOrder
    openId?: SortOrder
    loginIP?: SortOrder
    loginAt?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemUsersSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    orderNo?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SystemUsersRelationFilter = {
    is?: SystemUsersWhereInput
    isNot?: SystemUsersWhereInput
  }

  export type SystemUserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    expired?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SystemUserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
  }

  export type SystemUserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    expired?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SystemUserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    expired?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SystemUserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    userId?: SortOrder
  }

  export type SystemLogsCountOrderByAggregateInput = {
    id?: SortOrder
    api?: SortOrder
    type?: SortOrder
    status?: SortOrder
    content?: SortOrder
    username?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SystemLogsAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type SystemLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    api?: SortOrder
    type?: SortOrder
    status?: SortOrder
    content?: SortOrder
    username?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SystemLogsMinOrderByAggregateInput = {
    id?: SortOrder
    api?: SortOrder
    type?: SortOrder
    status?: SortOrder
    content?: SortOrder
    username?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SystemLogsSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type SystemDictionaryDataListRelationFilter = {
    every?: SystemDictionaryDataWhereInput
    some?: SystemDictionaryDataWhereInput
    none?: SystemDictionaryDataWhereInput
  }

  export type SystemDictionaryDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemDictionaryCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderNo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemDictionaryCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    status?: SortOrder
  }

  export type SystemDictionaryCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderNo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemDictionaryCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    orderNo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemDictionaryCategorySumOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    status?: SortOrder
  }

  export type SystemDictionaryCategoryRelationFilter = {
    is?: SystemDictionaryCategoryWhereInput
    isNot?: SystemDictionaryCategoryWhereInput
  }

  export type SystemDictionaryDataCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    orderNo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type SystemDictionaryDataAvgOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
  }

  export type SystemDictionaryDataMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    orderNo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type SystemDictionaryDataMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    orderNo?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type SystemDictionaryDataSumOrderByAggregateInput = {
    id?: SortOrder
    orderNo?: SortOrder
    status?: SortOrder
    categoryId?: SortOrder
  }

  export type SystemRolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemRolesAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type SystemRolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemRolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemRolesSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type SystemRolesRelationFilter = {
    is?: SystemRolesWhereInput
    isNot?: SystemRolesWhereInput
  }

  export type SystemUserRoleRelationUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type SystemUserRoleRelationCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SystemUserRoleRelationAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SystemUserRoleRelationMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SystemUserRoleRelationMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SystemUserRoleRelationSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type SystemMenusRelationFilter = {
    is?: SystemMenusWhereInput
    isNot?: SystemMenusWhereInput
  }

  export type SystemRoleMenuRelationRoleIdMenuIdCompoundUniqueInput = {
    roleId: number
    menuId: number
  }

  export type SystemRoleMenuRelationCountOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SystemRoleMenuRelationAvgOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SystemRoleMenuRelationMaxOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SystemRoleMenuRelationMinOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type SystemRoleMenuRelationSumOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type booksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type booksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    author?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SystemMenusCreateNestedManyWithoutParentInput = {
    create?: XOR<SystemMenusCreateWithoutParentInput, SystemMenusUncheckedCreateWithoutParentInput> | SystemMenusCreateWithoutParentInput[] | SystemMenusUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SystemMenusCreateOrConnectWithoutParentInput | SystemMenusCreateOrConnectWithoutParentInput[]
    createMany?: SystemMenusCreateManyParentInputEnvelope
    connect?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
  }

  export type SystemMenusCreateNestedOneWithoutChildrenInput = {
    create?: XOR<SystemMenusCreateWithoutChildrenInput, SystemMenusUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SystemMenusCreateOrConnectWithoutChildrenInput
    connect?: SystemMenusWhereUniqueInput
  }

  export type SystemRoleMenuRelationCreateNestedManyWithoutMenuInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutMenuInput, SystemRoleMenuRelationUncheckedCreateWithoutMenuInput> | SystemRoleMenuRelationCreateWithoutMenuInput[] | SystemRoleMenuRelationUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutMenuInput | SystemRoleMenuRelationCreateOrConnectWithoutMenuInput[]
    createMany?: SystemRoleMenuRelationCreateManyMenuInputEnvelope
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
  }

  export type SystemMenusUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SystemMenusCreateWithoutParentInput, SystemMenusUncheckedCreateWithoutParentInput> | SystemMenusCreateWithoutParentInput[] | SystemMenusUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SystemMenusCreateOrConnectWithoutParentInput | SystemMenusCreateOrConnectWithoutParentInput[]
    createMany?: SystemMenusCreateManyParentInputEnvelope
    connect?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
  }

  export type SystemRoleMenuRelationUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutMenuInput, SystemRoleMenuRelationUncheckedCreateWithoutMenuInput> | SystemRoleMenuRelationCreateWithoutMenuInput[] | SystemRoleMenuRelationUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutMenuInput | SystemRoleMenuRelationCreateOrConnectWithoutMenuInput[]
    createMany?: SystemRoleMenuRelationCreateManyMenuInputEnvelope
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SystemMenusUpdateManyWithoutParentNestedInput = {
    create?: XOR<SystemMenusCreateWithoutParentInput, SystemMenusUncheckedCreateWithoutParentInput> | SystemMenusCreateWithoutParentInput[] | SystemMenusUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SystemMenusCreateOrConnectWithoutParentInput | SystemMenusCreateOrConnectWithoutParentInput[]
    upsert?: SystemMenusUpsertWithWhereUniqueWithoutParentInput | SystemMenusUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SystemMenusCreateManyParentInputEnvelope
    set?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    disconnect?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    delete?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    connect?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    update?: SystemMenusUpdateWithWhereUniqueWithoutParentInput | SystemMenusUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SystemMenusUpdateManyWithWhereWithoutParentInput | SystemMenusUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SystemMenusScalarWhereInput | SystemMenusScalarWhereInput[]
  }

  export type SystemMenusUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<SystemMenusCreateWithoutChildrenInput, SystemMenusUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SystemMenusCreateOrConnectWithoutChildrenInput
    upsert?: SystemMenusUpsertWithoutChildrenInput
    disconnect?: SystemMenusWhereInput | boolean
    delete?: SystemMenusWhereInput | boolean
    connect?: SystemMenusWhereUniqueInput
    update?: XOR<XOR<SystemMenusUpdateToOneWithWhereWithoutChildrenInput, SystemMenusUpdateWithoutChildrenInput>, SystemMenusUncheckedUpdateWithoutChildrenInput>
  }

  export type SystemRoleMenuRelationUpdateManyWithoutMenuNestedInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutMenuInput, SystemRoleMenuRelationUncheckedCreateWithoutMenuInput> | SystemRoleMenuRelationCreateWithoutMenuInput[] | SystemRoleMenuRelationUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutMenuInput | SystemRoleMenuRelationCreateOrConnectWithoutMenuInput[]
    upsert?: SystemRoleMenuRelationUpsertWithWhereUniqueWithoutMenuInput | SystemRoleMenuRelationUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: SystemRoleMenuRelationCreateManyMenuInputEnvelope
    set?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    disconnect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    delete?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    update?: SystemRoleMenuRelationUpdateWithWhereUniqueWithoutMenuInput | SystemRoleMenuRelationUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: SystemRoleMenuRelationUpdateManyWithWhereWithoutMenuInput | SystemRoleMenuRelationUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: SystemRoleMenuRelationScalarWhereInput | SystemRoleMenuRelationScalarWhereInput[]
  }

  export type SystemMenusUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SystemMenusCreateWithoutParentInput, SystemMenusUncheckedCreateWithoutParentInput> | SystemMenusCreateWithoutParentInput[] | SystemMenusUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SystemMenusCreateOrConnectWithoutParentInput | SystemMenusCreateOrConnectWithoutParentInput[]
    upsert?: SystemMenusUpsertWithWhereUniqueWithoutParentInput | SystemMenusUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SystemMenusCreateManyParentInputEnvelope
    set?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    disconnect?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    delete?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    connect?: SystemMenusWhereUniqueInput | SystemMenusWhereUniqueInput[]
    update?: SystemMenusUpdateWithWhereUniqueWithoutParentInput | SystemMenusUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SystemMenusUpdateManyWithWhereWithoutParentInput | SystemMenusUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SystemMenusScalarWhereInput | SystemMenusScalarWhereInput[]
  }

  export type SystemRoleMenuRelationUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutMenuInput, SystemRoleMenuRelationUncheckedCreateWithoutMenuInput> | SystemRoleMenuRelationCreateWithoutMenuInput[] | SystemRoleMenuRelationUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutMenuInput | SystemRoleMenuRelationCreateOrConnectWithoutMenuInput[]
    upsert?: SystemRoleMenuRelationUpsertWithWhereUniqueWithoutMenuInput | SystemRoleMenuRelationUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: SystemRoleMenuRelationCreateManyMenuInputEnvelope
    set?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    disconnect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    delete?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    update?: SystemRoleMenuRelationUpdateWithWhereUniqueWithoutMenuInput | SystemRoleMenuRelationUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: SystemRoleMenuRelationUpdateManyWithWhereWithoutMenuInput | SystemRoleMenuRelationUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: SystemRoleMenuRelationScalarWhereInput | SystemRoleMenuRelationScalarWhereInput[]
  }

  export type SystemUserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SystemUserProfileCreateWithoutUserInput, SystemUserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemUserProfileCreateOrConnectWithoutUserInput
    connect?: SystemUserProfileWhereUniqueInput
  }

  export type SystemLogsCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemLogsCreateWithoutUserInput, SystemLogsUncheckedCreateWithoutUserInput> | SystemLogsCreateWithoutUserInput[] | SystemLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogsCreateOrConnectWithoutUserInput | SystemLogsCreateOrConnectWithoutUserInput[]
    createMany?: SystemLogsCreateManyUserInputEnvelope
    connect?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
  }

  export type SystemUserRoleRelationCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutUserInput, SystemUserRoleRelationUncheckedCreateWithoutUserInput> | SystemUserRoleRelationCreateWithoutUserInput[] | SystemUserRoleRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutUserInput | SystemUserRoleRelationCreateOrConnectWithoutUserInput[]
    createMany?: SystemUserRoleRelationCreateManyUserInputEnvelope
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
  }

  export type SystemUserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SystemUserProfileCreateWithoutUserInput, SystemUserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemUserProfileCreateOrConnectWithoutUserInput
    connect?: SystemUserProfileWhereUniqueInput
  }

  export type SystemLogsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemLogsCreateWithoutUserInput, SystemLogsUncheckedCreateWithoutUserInput> | SystemLogsCreateWithoutUserInput[] | SystemLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogsCreateOrConnectWithoutUserInput | SystemLogsCreateOrConnectWithoutUserInput[]
    createMany?: SystemLogsCreateManyUserInputEnvelope
    connect?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
  }

  export type SystemUserRoleRelationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutUserInput, SystemUserRoleRelationUncheckedCreateWithoutUserInput> | SystemUserRoleRelationCreateWithoutUserInput[] | SystemUserRoleRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutUserInput | SystemUserRoleRelationCreateOrConnectWithoutUserInput[]
    createMany?: SystemUserRoleRelationCreateManyUserInputEnvelope
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SystemUserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SystemUserProfileCreateWithoutUserInput, SystemUserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemUserProfileCreateOrConnectWithoutUserInput
    upsert?: SystemUserProfileUpsertWithoutUserInput
    disconnect?: SystemUserProfileWhereInput | boolean
    delete?: SystemUserProfileWhereInput | boolean
    connect?: SystemUserProfileWhereUniqueInput
    update?: XOR<XOR<SystemUserProfileUpdateToOneWithWhereWithoutUserInput, SystemUserProfileUpdateWithoutUserInput>, SystemUserProfileUncheckedUpdateWithoutUserInput>
  }

  export type SystemLogsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemLogsCreateWithoutUserInput, SystemLogsUncheckedCreateWithoutUserInput> | SystemLogsCreateWithoutUserInput[] | SystemLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogsCreateOrConnectWithoutUserInput | SystemLogsCreateOrConnectWithoutUserInput[]
    upsert?: SystemLogsUpsertWithWhereUniqueWithoutUserInput | SystemLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemLogsCreateManyUserInputEnvelope
    set?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    disconnect?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    delete?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    connect?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    update?: SystemLogsUpdateWithWhereUniqueWithoutUserInput | SystemLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemLogsUpdateManyWithWhereWithoutUserInput | SystemLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemLogsScalarWhereInput | SystemLogsScalarWhereInput[]
  }

  export type SystemUserRoleRelationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutUserInput, SystemUserRoleRelationUncheckedCreateWithoutUserInput> | SystemUserRoleRelationCreateWithoutUserInput[] | SystemUserRoleRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutUserInput | SystemUserRoleRelationCreateOrConnectWithoutUserInput[]
    upsert?: SystemUserRoleRelationUpsertWithWhereUniqueWithoutUserInput | SystemUserRoleRelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemUserRoleRelationCreateManyUserInputEnvelope
    set?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    disconnect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    delete?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    update?: SystemUserRoleRelationUpdateWithWhereUniqueWithoutUserInput | SystemUserRoleRelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemUserRoleRelationUpdateManyWithWhereWithoutUserInput | SystemUserRoleRelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemUserRoleRelationScalarWhereInput | SystemUserRoleRelationScalarWhereInput[]
  }

  export type SystemUserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SystemUserProfileCreateWithoutUserInput, SystemUserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemUserProfileCreateOrConnectWithoutUserInput
    upsert?: SystemUserProfileUpsertWithoutUserInput
    disconnect?: SystemUserProfileWhereInput | boolean
    delete?: SystemUserProfileWhereInput | boolean
    connect?: SystemUserProfileWhereUniqueInput
    update?: XOR<XOR<SystemUserProfileUpdateToOneWithWhereWithoutUserInput, SystemUserProfileUpdateWithoutUserInput>, SystemUserProfileUncheckedUpdateWithoutUserInput>
  }

  export type SystemLogsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemLogsCreateWithoutUserInput, SystemLogsUncheckedCreateWithoutUserInput> | SystemLogsCreateWithoutUserInput[] | SystemLogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogsCreateOrConnectWithoutUserInput | SystemLogsCreateOrConnectWithoutUserInput[]
    upsert?: SystemLogsUpsertWithWhereUniqueWithoutUserInput | SystemLogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemLogsCreateManyUserInputEnvelope
    set?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    disconnect?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    delete?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    connect?: SystemLogsWhereUniqueInput | SystemLogsWhereUniqueInput[]
    update?: SystemLogsUpdateWithWhereUniqueWithoutUserInput | SystemLogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemLogsUpdateManyWithWhereWithoutUserInput | SystemLogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemLogsScalarWhereInput | SystemLogsScalarWhereInput[]
  }

  export type SystemUserRoleRelationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutUserInput, SystemUserRoleRelationUncheckedCreateWithoutUserInput> | SystemUserRoleRelationCreateWithoutUserInput[] | SystemUserRoleRelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutUserInput | SystemUserRoleRelationCreateOrConnectWithoutUserInput[]
    upsert?: SystemUserRoleRelationUpsertWithWhereUniqueWithoutUserInput | SystemUserRoleRelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemUserRoleRelationCreateManyUserInputEnvelope
    set?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    disconnect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    delete?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    update?: SystemUserRoleRelationUpdateWithWhereUniqueWithoutUserInput | SystemUserRoleRelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemUserRoleRelationUpdateManyWithWhereWithoutUserInput | SystemUserRoleRelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemUserRoleRelationScalarWhereInput | SystemUserRoleRelationScalarWhereInput[]
  }

  export type SystemUsersCreateNestedOneWithoutProfileInput = {
    create?: XOR<SystemUsersCreateWithoutProfileInput, SystemUsersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SystemUsersCreateOrConnectWithoutProfileInput
    connect?: SystemUsersWhereUniqueInput
  }

  export type SystemUsersUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<SystemUsersCreateWithoutProfileInput, SystemUsersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SystemUsersCreateOrConnectWithoutProfileInput
    upsert?: SystemUsersUpsertWithoutProfileInput
    connect?: SystemUsersWhereUniqueInput
    update?: XOR<XOR<SystemUsersUpdateToOneWithWhereWithoutProfileInput, SystemUsersUpdateWithoutProfileInput>, SystemUsersUncheckedUpdateWithoutProfileInput>
  }

  export type SystemUsersCreateNestedOneWithoutLogsInput = {
    create?: XOR<SystemUsersCreateWithoutLogsInput, SystemUsersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: SystemUsersCreateOrConnectWithoutLogsInput
    connect?: SystemUsersWhereUniqueInput
  }

  export type SystemUsersUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<SystemUsersCreateWithoutLogsInput, SystemUsersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: SystemUsersCreateOrConnectWithoutLogsInput
    upsert?: SystemUsersUpsertWithoutLogsInput
    connect?: SystemUsersWhereUniqueInput
    update?: XOR<XOR<SystemUsersUpdateToOneWithWhereWithoutLogsInput, SystemUsersUpdateWithoutLogsInput>, SystemUsersUncheckedUpdateWithoutLogsInput>
  }

  export type SystemDictionaryDataCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SystemDictionaryDataCreateWithoutCategoryInput, SystemDictionaryDataUncheckedCreateWithoutCategoryInput> | SystemDictionaryDataCreateWithoutCategoryInput[] | SystemDictionaryDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SystemDictionaryDataCreateOrConnectWithoutCategoryInput | SystemDictionaryDataCreateOrConnectWithoutCategoryInput[]
    createMany?: SystemDictionaryDataCreateManyCategoryInputEnvelope
    connect?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
  }

  export type SystemDictionaryDataUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SystemDictionaryDataCreateWithoutCategoryInput, SystemDictionaryDataUncheckedCreateWithoutCategoryInput> | SystemDictionaryDataCreateWithoutCategoryInput[] | SystemDictionaryDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SystemDictionaryDataCreateOrConnectWithoutCategoryInput | SystemDictionaryDataCreateOrConnectWithoutCategoryInput[]
    createMany?: SystemDictionaryDataCreateManyCategoryInputEnvelope
    connect?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
  }

  export type SystemDictionaryDataUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SystemDictionaryDataCreateWithoutCategoryInput, SystemDictionaryDataUncheckedCreateWithoutCategoryInput> | SystemDictionaryDataCreateWithoutCategoryInput[] | SystemDictionaryDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SystemDictionaryDataCreateOrConnectWithoutCategoryInput | SystemDictionaryDataCreateOrConnectWithoutCategoryInput[]
    upsert?: SystemDictionaryDataUpsertWithWhereUniqueWithoutCategoryInput | SystemDictionaryDataUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SystemDictionaryDataCreateManyCategoryInputEnvelope
    set?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    disconnect?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    delete?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    connect?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    update?: SystemDictionaryDataUpdateWithWhereUniqueWithoutCategoryInput | SystemDictionaryDataUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SystemDictionaryDataUpdateManyWithWhereWithoutCategoryInput | SystemDictionaryDataUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SystemDictionaryDataScalarWhereInput | SystemDictionaryDataScalarWhereInput[]
  }

  export type SystemDictionaryDataUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SystemDictionaryDataCreateWithoutCategoryInput, SystemDictionaryDataUncheckedCreateWithoutCategoryInput> | SystemDictionaryDataCreateWithoutCategoryInput[] | SystemDictionaryDataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SystemDictionaryDataCreateOrConnectWithoutCategoryInput | SystemDictionaryDataCreateOrConnectWithoutCategoryInput[]
    upsert?: SystemDictionaryDataUpsertWithWhereUniqueWithoutCategoryInput | SystemDictionaryDataUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SystemDictionaryDataCreateManyCategoryInputEnvelope
    set?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    disconnect?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    delete?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    connect?: SystemDictionaryDataWhereUniqueInput | SystemDictionaryDataWhereUniqueInput[]
    update?: SystemDictionaryDataUpdateWithWhereUniqueWithoutCategoryInput | SystemDictionaryDataUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SystemDictionaryDataUpdateManyWithWhereWithoutCategoryInput | SystemDictionaryDataUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SystemDictionaryDataScalarWhereInput | SystemDictionaryDataScalarWhereInput[]
  }

  export type SystemDictionaryCategoryCreateNestedOneWithoutDictionaryDataInput = {
    create?: XOR<SystemDictionaryCategoryCreateWithoutDictionaryDataInput, SystemDictionaryCategoryUncheckedCreateWithoutDictionaryDataInput>
    connectOrCreate?: SystemDictionaryCategoryCreateOrConnectWithoutDictionaryDataInput
    connect?: SystemDictionaryCategoryWhereUniqueInput
  }

  export type SystemDictionaryCategoryUpdateOneRequiredWithoutDictionaryDataNestedInput = {
    create?: XOR<SystemDictionaryCategoryCreateWithoutDictionaryDataInput, SystemDictionaryCategoryUncheckedCreateWithoutDictionaryDataInput>
    connectOrCreate?: SystemDictionaryCategoryCreateOrConnectWithoutDictionaryDataInput
    upsert?: SystemDictionaryCategoryUpsertWithoutDictionaryDataInput
    connect?: SystemDictionaryCategoryWhereUniqueInput
    update?: XOR<XOR<SystemDictionaryCategoryUpdateToOneWithWhereWithoutDictionaryDataInput, SystemDictionaryCategoryUpdateWithoutDictionaryDataInput>, SystemDictionaryCategoryUncheckedUpdateWithoutDictionaryDataInput>
  }

  export type SystemUserRoleRelationCreateNestedManyWithoutRoleInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutRoleInput, SystemUserRoleRelationUncheckedCreateWithoutRoleInput> | SystemUserRoleRelationCreateWithoutRoleInput[] | SystemUserRoleRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutRoleInput | SystemUserRoleRelationCreateOrConnectWithoutRoleInput[]
    createMany?: SystemUserRoleRelationCreateManyRoleInputEnvelope
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
  }

  export type SystemRoleMenuRelationCreateNestedManyWithoutRoleInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutRoleInput, SystemRoleMenuRelationUncheckedCreateWithoutRoleInput> | SystemRoleMenuRelationCreateWithoutRoleInput[] | SystemRoleMenuRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutRoleInput | SystemRoleMenuRelationCreateOrConnectWithoutRoleInput[]
    createMany?: SystemRoleMenuRelationCreateManyRoleInputEnvelope
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
  }

  export type SystemUserRoleRelationUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutRoleInput, SystemUserRoleRelationUncheckedCreateWithoutRoleInput> | SystemUserRoleRelationCreateWithoutRoleInput[] | SystemUserRoleRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutRoleInput | SystemUserRoleRelationCreateOrConnectWithoutRoleInput[]
    createMany?: SystemUserRoleRelationCreateManyRoleInputEnvelope
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
  }

  export type SystemRoleMenuRelationUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutRoleInput, SystemRoleMenuRelationUncheckedCreateWithoutRoleInput> | SystemRoleMenuRelationCreateWithoutRoleInput[] | SystemRoleMenuRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutRoleInput | SystemRoleMenuRelationCreateOrConnectWithoutRoleInput[]
    createMany?: SystemRoleMenuRelationCreateManyRoleInputEnvelope
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
  }

  export type SystemUserRoleRelationUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutRoleInput, SystemUserRoleRelationUncheckedCreateWithoutRoleInput> | SystemUserRoleRelationCreateWithoutRoleInput[] | SystemUserRoleRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutRoleInput | SystemUserRoleRelationCreateOrConnectWithoutRoleInput[]
    upsert?: SystemUserRoleRelationUpsertWithWhereUniqueWithoutRoleInput | SystemUserRoleRelationUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SystemUserRoleRelationCreateManyRoleInputEnvelope
    set?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    disconnect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    delete?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    update?: SystemUserRoleRelationUpdateWithWhereUniqueWithoutRoleInput | SystemUserRoleRelationUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SystemUserRoleRelationUpdateManyWithWhereWithoutRoleInput | SystemUserRoleRelationUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SystemUserRoleRelationScalarWhereInput | SystemUserRoleRelationScalarWhereInput[]
  }

  export type SystemRoleMenuRelationUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutRoleInput, SystemRoleMenuRelationUncheckedCreateWithoutRoleInput> | SystemRoleMenuRelationCreateWithoutRoleInput[] | SystemRoleMenuRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutRoleInput | SystemRoleMenuRelationCreateOrConnectWithoutRoleInput[]
    upsert?: SystemRoleMenuRelationUpsertWithWhereUniqueWithoutRoleInput | SystemRoleMenuRelationUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SystemRoleMenuRelationCreateManyRoleInputEnvelope
    set?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    disconnect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    delete?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    update?: SystemRoleMenuRelationUpdateWithWhereUniqueWithoutRoleInput | SystemRoleMenuRelationUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SystemRoleMenuRelationUpdateManyWithWhereWithoutRoleInput | SystemRoleMenuRelationUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SystemRoleMenuRelationScalarWhereInput | SystemRoleMenuRelationScalarWhereInput[]
  }

  export type SystemUserRoleRelationUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SystemUserRoleRelationCreateWithoutRoleInput, SystemUserRoleRelationUncheckedCreateWithoutRoleInput> | SystemUserRoleRelationCreateWithoutRoleInput[] | SystemUserRoleRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemUserRoleRelationCreateOrConnectWithoutRoleInput | SystemUserRoleRelationCreateOrConnectWithoutRoleInput[]
    upsert?: SystemUserRoleRelationUpsertWithWhereUniqueWithoutRoleInput | SystemUserRoleRelationUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SystemUserRoleRelationCreateManyRoleInputEnvelope
    set?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    disconnect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    delete?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    connect?: SystemUserRoleRelationWhereUniqueInput | SystemUserRoleRelationWhereUniqueInput[]
    update?: SystemUserRoleRelationUpdateWithWhereUniqueWithoutRoleInput | SystemUserRoleRelationUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SystemUserRoleRelationUpdateManyWithWhereWithoutRoleInput | SystemUserRoleRelationUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SystemUserRoleRelationScalarWhereInput | SystemUserRoleRelationScalarWhereInput[]
  }

  export type SystemRoleMenuRelationUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SystemRoleMenuRelationCreateWithoutRoleInput, SystemRoleMenuRelationUncheckedCreateWithoutRoleInput> | SystemRoleMenuRelationCreateWithoutRoleInput[] | SystemRoleMenuRelationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SystemRoleMenuRelationCreateOrConnectWithoutRoleInput | SystemRoleMenuRelationCreateOrConnectWithoutRoleInput[]
    upsert?: SystemRoleMenuRelationUpsertWithWhereUniqueWithoutRoleInput | SystemRoleMenuRelationUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SystemRoleMenuRelationCreateManyRoleInputEnvelope
    set?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    disconnect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    delete?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    connect?: SystemRoleMenuRelationWhereUniqueInput | SystemRoleMenuRelationWhereUniqueInput[]
    update?: SystemRoleMenuRelationUpdateWithWhereUniqueWithoutRoleInput | SystemRoleMenuRelationUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SystemRoleMenuRelationUpdateManyWithWhereWithoutRoleInput | SystemRoleMenuRelationUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SystemRoleMenuRelationScalarWhereInput | SystemRoleMenuRelationScalarWhereInput[]
  }

  export type SystemUsersCreateNestedOneWithoutRolesInput = {
    create?: XOR<SystemUsersCreateWithoutRolesInput, SystemUsersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SystemUsersCreateOrConnectWithoutRolesInput
    connect?: SystemUsersWhereUniqueInput
  }

  export type SystemRolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<SystemRolesCreateWithoutUsersInput, SystemRolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SystemRolesCreateOrConnectWithoutUsersInput
    connect?: SystemRolesWhereUniqueInput
  }

  export type SystemUsersUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<SystemUsersCreateWithoutRolesInput, SystemUsersUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SystemUsersCreateOrConnectWithoutRolesInput
    upsert?: SystemUsersUpsertWithoutRolesInput
    connect?: SystemUsersWhereUniqueInput
    update?: XOR<XOR<SystemUsersUpdateToOneWithWhereWithoutRolesInput, SystemUsersUpdateWithoutRolesInput>, SystemUsersUncheckedUpdateWithoutRolesInput>
  }

  export type SystemRolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SystemRolesCreateWithoutUsersInput, SystemRolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SystemRolesCreateOrConnectWithoutUsersInput
    upsert?: SystemRolesUpsertWithoutUsersInput
    connect?: SystemRolesWhereUniqueInput
    update?: XOR<XOR<SystemRolesUpdateToOneWithWhereWithoutUsersInput, SystemRolesUpdateWithoutUsersInput>, SystemRolesUncheckedUpdateWithoutUsersInput>
  }

  export type SystemRolesCreateNestedOneWithoutMenusInput = {
    create?: XOR<SystemRolesCreateWithoutMenusInput, SystemRolesUncheckedCreateWithoutMenusInput>
    connectOrCreate?: SystemRolesCreateOrConnectWithoutMenusInput
    connect?: SystemRolesWhereUniqueInput
  }

  export type SystemMenusCreateNestedOneWithoutSystemRolesInput = {
    create?: XOR<SystemMenusCreateWithoutSystemRolesInput, SystemMenusUncheckedCreateWithoutSystemRolesInput>
    connectOrCreate?: SystemMenusCreateOrConnectWithoutSystemRolesInput
    connect?: SystemMenusWhereUniqueInput
  }

  export type SystemRolesUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<SystemRolesCreateWithoutMenusInput, SystemRolesUncheckedCreateWithoutMenusInput>
    connectOrCreate?: SystemRolesCreateOrConnectWithoutMenusInput
    upsert?: SystemRolesUpsertWithoutMenusInput
    connect?: SystemRolesWhereUniqueInput
    update?: XOR<XOR<SystemRolesUpdateToOneWithWhereWithoutMenusInput, SystemRolesUpdateWithoutMenusInput>, SystemRolesUncheckedUpdateWithoutMenusInput>
  }

  export type SystemMenusUpdateOneRequiredWithoutSystemRolesNestedInput = {
    create?: XOR<SystemMenusCreateWithoutSystemRolesInput, SystemMenusUncheckedCreateWithoutSystemRolesInput>
    connectOrCreate?: SystemMenusCreateOrConnectWithoutSystemRolesInput
    upsert?: SystemMenusUpsertWithoutSystemRolesInput
    connect?: SystemMenusWhereUniqueInput
    update?: XOR<XOR<SystemMenusUpdateToOneWithWhereWithoutSystemRolesInput, SystemMenusUpdateWithoutSystemRolesInput>, SystemMenusUncheckedUpdateWithoutSystemRolesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SystemMenusCreateWithoutParentInput = {
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: SystemMenusCreateNestedManyWithoutParentInput
    systemRoles?: SystemRoleMenuRelationCreateNestedManyWithoutMenuInput
  }

  export type SystemMenusUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: SystemMenusUncheckedCreateNestedManyWithoutParentInput
    systemRoles?: SystemRoleMenuRelationUncheckedCreateNestedManyWithoutMenuInput
  }

  export type SystemMenusCreateOrConnectWithoutParentInput = {
    where: SystemMenusWhereUniqueInput
    create: XOR<SystemMenusCreateWithoutParentInput, SystemMenusUncheckedCreateWithoutParentInput>
  }

  export type SystemMenusCreateManyParentInputEnvelope = {
    data: SystemMenusCreateManyParentInput | SystemMenusCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type SystemMenusCreateWithoutChildrenInput = {
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: SystemMenusCreateNestedOneWithoutChildrenInput
    systemRoles?: SystemRoleMenuRelationCreateNestedManyWithoutMenuInput
  }

  export type SystemMenusUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    parentId?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    systemRoles?: SystemRoleMenuRelationUncheckedCreateNestedManyWithoutMenuInput
  }

  export type SystemMenusCreateOrConnectWithoutChildrenInput = {
    where: SystemMenusWhereUniqueInput
    create: XOR<SystemMenusCreateWithoutChildrenInput, SystemMenusUncheckedCreateWithoutChildrenInput>
  }

  export type SystemRoleMenuRelationCreateWithoutMenuInput = {
    role: SystemRolesCreateNestedOneWithoutMenusInput
  }

  export type SystemRoleMenuRelationUncheckedCreateWithoutMenuInput = {
    roleId: number
  }

  export type SystemRoleMenuRelationCreateOrConnectWithoutMenuInput = {
    where: SystemRoleMenuRelationWhereUniqueInput
    create: XOR<SystemRoleMenuRelationCreateWithoutMenuInput, SystemRoleMenuRelationUncheckedCreateWithoutMenuInput>
  }

  export type SystemRoleMenuRelationCreateManyMenuInputEnvelope = {
    data: SystemRoleMenuRelationCreateManyMenuInput | SystemRoleMenuRelationCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type SystemMenusUpsertWithWhereUniqueWithoutParentInput = {
    where: SystemMenusWhereUniqueInput
    update: XOR<SystemMenusUpdateWithoutParentInput, SystemMenusUncheckedUpdateWithoutParentInput>
    create: XOR<SystemMenusCreateWithoutParentInput, SystemMenusUncheckedCreateWithoutParentInput>
  }

  export type SystemMenusUpdateWithWhereUniqueWithoutParentInput = {
    where: SystemMenusWhereUniqueInput
    data: XOR<SystemMenusUpdateWithoutParentInput, SystemMenusUncheckedUpdateWithoutParentInput>
  }

  export type SystemMenusUpdateManyWithWhereWithoutParentInput = {
    where: SystemMenusScalarWhereInput
    data: XOR<SystemMenusUpdateManyMutationInput, SystemMenusUncheckedUpdateManyWithoutParentInput>
  }

  export type SystemMenusScalarWhereInput = {
    AND?: SystemMenusScalarWhereInput | SystemMenusScalarWhereInput[]
    OR?: SystemMenusScalarWhereInput[]
    NOT?: SystemMenusScalarWhereInput | SystemMenusScalarWhereInput[]
    id?: IntFilter<"SystemMenus"> | number
    name?: StringFilter<"SystemMenus"> | string
    path?: StringFilter<"SystemMenus"> | string
    component?: StringNullableFilter<"SystemMenus"> | string | null
    query?: StringNullableFilter<"SystemMenus"> | string | null
    icon?: StringNullableFilter<"SystemMenus"> | string | null
    orderNo?: IntFilter<"SystemMenus"> | number
    parentId?: IntFilter<"SystemMenus"> | number
    type?: IntFilter<"SystemMenus"> | number
    status?: IntFilter<"SystemMenus"> | number
    noClosable?: IntFilter<"SystemMenus"> | number
    hidden?: IntFilter<"SystemMenus"> | number
    activeMenu?: StringNullableFilter<"SystemMenus"> | string | null
    guard?: StringNullableFilter<"SystemMenus"> | string | null
    dot?: IntFilter<"SystemMenus"> | number
    badge?: StringNullableFilter<"SystemMenus"> | string | null
    isFrame?: IntNullableFilter<"SystemMenus"> | number | null
    isCache?: IntFilter<"SystemMenus"> | number
    permissionCode?: StringNullableFilter<"SystemMenus"> | string | null
    createdAt?: DateTimeFilter<"SystemMenus"> | Date | string
    updatedAt?: DateTimeFilter<"SystemMenus"> | Date | string
  }

  export type SystemMenusUpsertWithoutChildrenInput = {
    update: XOR<SystemMenusUpdateWithoutChildrenInput, SystemMenusUncheckedUpdateWithoutChildrenInput>
    create: XOR<SystemMenusCreateWithoutChildrenInput, SystemMenusUncheckedCreateWithoutChildrenInput>
    where?: SystemMenusWhereInput
  }

  export type SystemMenusUpdateToOneWithWhereWithoutChildrenInput = {
    where?: SystemMenusWhereInput
    data: XOR<SystemMenusUpdateWithoutChildrenInput, SystemMenusUncheckedUpdateWithoutChildrenInput>
  }

  export type SystemMenusUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: SystemMenusUpdateOneWithoutChildrenNestedInput
    systemRoles?: SystemRoleMenuRelationUpdateManyWithoutMenuNestedInput
  }

  export type SystemMenusUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemRoles?: SystemRoleMenuRelationUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type SystemRoleMenuRelationUpsertWithWhereUniqueWithoutMenuInput = {
    where: SystemRoleMenuRelationWhereUniqueInput
    update: XOR<SystemRoleMenuRelationUpdateWithoutMenuInput, SystemRoleMenuRelationUncheckedUpdateWithoutMenuInput>
    create: XOR<SystemRoleMenuRelationCreateWithoutMenuInput, SystemRoleMenuRelationUncheckedCreateWithoutMenuInput>
  }

  export type SystemRoleMenuRelationUpdateWithWhereUniqueWithoutMenuInput = {
    where: SystemRoleMenuRelationWhereUniqueInput
    data: XOR<SystemRoleMenuRelationUpdateWithoutMenuInput, SystemRoleMenuRelationUncheckedUpdateWithoutMenuInput>
  }

  export type SystemRoleMenuRelationUpdateManyWithWhereWithoutMenuInput = {
    where: SystemRoleMenuRelationScalarWhereInput
    data: XOR<SystemRoleMenuRelationUpdateManyMutationInput, SystemRoleMenuRelationUncheckedUpdateManyWithoutMenuInput>
  }

  export type SystemRoleMenuRelationScalarWhereInput = {
    AND?: SystemRoleMenuRelationScalarWhereInput | SystemRoleMenuRelationScalarWhereInput[]
    OR?: SystemRoleMenuRelationScalarWhereInput[]
    NOT?: SystemRoleMenuRelationScalarWhereInput | SystemRoleMenuRelationScalarWhereInput[]
    roleId?: IntFilter<"SystemRoleMenuRelation"> | number
    menuId?: IntFilter<"SystemRoleMenuRelation"> | number
  }

  export type SystemUserProfileCreateWithoutUserInput = {
    nickname?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    expired?: Date | string | null
    gender?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemUserProfileUncheckedCreateWithoutUserInput = {
    id?: number
    nickname?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    expired?: Date | string | null
    gender?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemUserProfileCreateOrConnectWithoutUserInput = {
    where: SystemUserProfileWhereUniqueInput
    create: XOR<SystemUserProfileCreateWithoutUserInput, SystemUserProfileUncheckedCreateWithoutUserInput>
  }

  export type SystemLogsCreateWithoutUserInput = {
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt?: Date | string
  }

  export type SystemLogsUncheckedCreateWithoutUserInput = {
    id?: number
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt?: Date | string
  }

  export type SystemLogsCreateOrConnectWithoutUserInput = {
    where: SystemLogsWhereUniqueInput
    create: XOR<SystemLogsCreateWithoutUserInput, SystemLogsUncheckedCreateWithoutUserInput>
  }

  export type SystemLogsCreateManyUserInputEnvelope = {
    data: SystemLogsCreateManyUserInput | SystemLogsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SystemUserRoleRelationCreateWithoutUserInput = {
    role: SystemRolesCreateNestedOneWithoutUsersInput
  }

  export type SystemUserRoleRelationUncheckedCreateWithoutUserInput = {
    roleId: number
  }

  export type SystemUserRoleRelationCreateOrConnectWithoutUserInput = {
    where: SystemUserRoleRelationWhereUniqueInput
    create: XOR<SystemUserRoleRelationCreateWithoutUserInput, SystemUserRoleRelationUncheckedCreateWithoutUserInput>
  }

  export type SystemUserRoleRelationCreateManyUserInputEnvelope = {
    data: SystemUserRoleRelationCreateManyUserInput | SystemUserRoleRelationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SystemUserProfileUpsertWithoutUserInput = {
    update: XOR<SystemUserProfileUpdateWithoutUserInput, SystemUserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SystemUserProfileCreateWithoutUserInput, SystemUserProfileUncheckedCreateWithoutUserInput>
    where?: SystemUserProfileWhereInput
  }

  export type SystemUserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SystemUserProfileWhereInput
    data: XOR<SystemUserProfileUpdateWithoutUserInput, SystemUserProfileUncheckedUpdateWithoutUserInput>
  }

  export type SystemUserProfileUpdateWithoutUserInput = {
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogsUpsertWithWhereUniqueWithoutUserInput = {
    where: SystemLogsWhereUniqueInput
    update: XOR<SystemLogsUpdateWithoutUserInput, SystemLogsUncheckedUpdateWithoutUserInput>
    create: XOR<SystemLogsCreateWithoutUserInput, SystemLogsUncheckedCreateWithoutUserInput>
  }

  export type SystemLogsUpdateWithWhereUniqueWithoutUserInput = {
    where: SystemLogsWhereUniqueInput
    data: XOR<SystemLogsUpdateWithoutUserInput, SystemLogsUncheckedUpdateWithoutUserInput>
  }

  export type SystemLogsUpdateManyWithWhereWithoutUserInput = {
    where: SystemLogsScalarWhereInput
    data: XOR<SystemLogsUpdateManyMutationInput, SystemLogsUncheckedUpdateManyWithoutUserInput>
  }

  export type SystemLogsScalarWhereInput = {
    AND?: SystemLogsScalarWhereInput | SystemLogsScalarWhereInput[]
    OR?: SystemLogsScalarWhereInput[]
    NOT?: SystemLogsScalarWhereInput | SystemLogsScalarWhereInput[]
    id?: IntFilter<"SystemLogs"> | number
    api?: StringFilter<"SystemLogs"> | string
    type?: IntFilter<"SystemLogs"> | number
    status?: IntFilter<"SystemLogs"> | number
    content?: StringFilter<"SystemLogs"> | string
    username?: StringFilter<"SystemLogs"> | string
    ip?: StringFilter<"SystemLogs"> | string
    createdAt?: DateTimeFilter<"SystemLogs"> | Date | string
    userId?: IntFilter<"SystemLogs"> | number
  }

  export type SystemUserRoleRelationUpsertWithWhereUniqueWithoutUserInput = {
    where: SystemUserRoleRelationWhereUniqueInput
    update: XOR<SystemUserRoleRelationUpdateWithoutUserInput, SystemUserRoleRelationUncheckedUpdateWithoutUserInput>
    create: XOR<SystemUserRoleRelationCreateWithoutUserInput, SystemUserRoleRelationUncheckedCreateWithoutUserInput>
  }

  export type SystemUserRoleRelationUpdateWithWhereUniqueWithoutUserInput = {
    where: SystemUserRoleRelationWhereUniqueInput
    data: XOR<SystemUserRoleRelationUpdateWithoutUserInput, SystemUserRoleRelationUncheckedUpdateWithoutUserInput>
  }

  export type SystemUserRoleRelationUpdateManyWithWhereWithoutUserInput = {
    where: SystemUserRoleRelationScalarWhereInput
    data: XOR<SystemUserRoleRelationUpdateManyMutationInput, SystemUserRoleRelationUncheckedUpdateManyWithoutUserInput>
  }

  export type SystemUserRoleRelationScalarWhereInput = {
    AND?: SystemUserRoleRelationScalarWhereInput | SystemUserRoleRelationScalarWhereInput[]
    OR?: SystemUserRoleRelationScalarWhereInput[]
    NOT?: SystemUserRoleRelationScalarWhereInput | SystemUserRoleRelationScalarWhereInput[]
    userId?: IntFilter<"SystemUserRoleRelation"> | number
    roleId?: IntFilter<"SystemUserRoleRelation"> | number
  }

  export type SystemUsersCreateWithoutProfileInput = {
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: SystemLogsCreateNestedManyWithoutUserInput
    roles?: SystemUserRoleRelationCreateNestedManyWithoutUserInput
  }

  export type SystemUsersUncheckedCreateWithoutProfileInput = {
    id?: number
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: SystemLogsUncheckedCreateNestedManyWithoutUserInput
    roles?: SystemUserRoleRelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type SystemUsersCreateOrConnectWithoutProfileInput = {
    where: SystemUsersWhereUniqueInput
    create: XOR<SystemUsersCreateWithoutProfileInput, SystemUsersUncheckedCreateWithoutProfileInput>
  }

  export type SystemUsersUpsertWithoutProfileInput = {
    update: XOR<SystemUsersUpdateWithoutProfileInput, SystemUsersUncheckedUpdateWithoutProfileInput>
    create: XOR<SystemUsersCreateWithoutProfileInput, SystemUsersUncheckedCreateWithoutProfileInput>
    where?: SystemUsersWhereInput
  }

  export type SystemUsersUpdateToOneWithWhereWithoutProfileInput = {
    where?: SystemUsersWhereInput
    data: XOR<SystemUsersUpdateWithoutProfileInput, SystemUsersUncheckedUpdateWithoutProfileInput>
  }

  export type SystemUsersUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: SystemLogsUpdateManyWithoutUserNestedInput
    roles?: SystemUserRoleRelationUpdateManyWithoutUserNestedInput
  }

  export type SystemUsersUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: SystemLogsUncheckedUpdateManyWithoutUserNestedInput
    roles?: SystemUserRoleRelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SystemUsersCreateWithoutLogsInput = {
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SystemUserProfileCreateNestedOneWithoutUserInput
    roles?: SystemUserRoleRelationCreateNestedManyWithoutUserInput
  }

  export type SystemUsersUncheckedCreateWithoutLogsInput = {
    id?: number
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SystemUserProfileUncheckedCreateNestedOneWithoutUserInput
    roles?: SystemUserRoleRelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type SystemUsersCreateOrConnectWithoutLogsInput = {
    where: SystemUsersWhereUniqueInput
    create: XOR<SystemUsersCreateWithoutLogsInput, SystemUsersUncheckedCreateWithoutLogsInput>
  }

  export type SystemUsersUpsertWithoutLogsInput = {
    update: XOR<SystemUsersUpdateWithoutLogsInput, SystemUsersUncheckedUpdateWithoutLogsInput>
    create: XOR<SystemUsersCreateWithoutLogsInput, SystemUsersUncheckedCreateWithoutLogsInput>
    where?: SystemUsersWhereInput
  }

  export type SystemUsersUpdateToOneWithWhereWithoutLogsInput = {
    where?: SystemUsersWhereInput
    data: XOR<SystemUsersUpdateWithoutLogsInput, SystemUsersUncheckedUpdateWithoutLogsInput>
  }

  export type SystemUsersUpdateWithoutLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SystemUserProfileUpdateOneWithoutUserNestedInput
    roles?: SystemUserRoleRelationUpdateManyWithoutUserNestedInput
  }

  export type SystemUsersUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SystemUserProfileUncheckedUpdateOneWithoutUserNestedInput
    roles?: SystemUserRoleRelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SystemDictionaryDataCreateWithoutCategoryInput = {
    label: string
    value: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemDictionaryDataUncheckedCreateWithoutCategoryInput = {
    id?: number
    label: string
    value: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemDictionaryDataCreateOrConnectWithoutCategoryInput = {
    where: SystemDictionaryDataWhereUniqueInput
    create: XOR<SystemDictionaryDataCreateWithoutCategoryInput, SystemDictionaryDataUncheckedCreateWithoutCategoryInput>
  }

  export type SystemDictionaryDataCreateManyCategoryInputEnvelope = {
    data: SystemDictionaryDataCreateManyCategoryInput | SystemDictionaryDataCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SystemDictionaryDataUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SystemDictionaryDataWhereUniqueInput
    update: XOR<SystemDictionaryDataUpdateWithoutCategoryInput, SystemDictionaryDataUncheckedUpdateWithoutCategoryInput>
    create: XOR<SystemDictionaryDataCreateWithoutCategoryInput, SystemDictionaryDataUncheckedCreateWithoutCategoryInput>
  }

  export type SystemDictionaryDataUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SystemDictionaryDataWhereUniqueInput
    data: XOR<SystemDictionaryDataUpdateWithoutCategoryInput, SystemDictionaryDataUncheckedUpdateWithoutCategoryInput>
  }

  export type SystemDictionaryDataUpdateManyWithWhereWithoutCategoryInput = {
    where: SystemDictionaryDataScalarWhereInput
    data: XOR<SystemDictionaryDataUpdateManyMutationInput, SystemDictionaryDataUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SystemDictionaryDataScalarWhereInput = {
    AND?: SystemDictionaryDataScalarWhereInput | SystemDictionaryDataScalarWhereInput[]
    OR?: SystemDictionaryDataScalarWhereInput[]
    NOT?: SystemDictionaryDataScalarWhereInput | SystemDictionaryDataScalarWhereInput[]
    id?: IntFilter<"SystemDictionaryData"> | number
    label?: StringFilter<"SystemDictionaryData"> | string
    value?: StringFilter<"SystemDictionaryData"> | string
    orderNo?: IntFilter<"SystemDictionaryData"> | number
    description?: StringNullableFilter<"SystemDictionaryData"> | string | null
    status?: IntFilter<"SystemDictionaryData"> | number
    createdAt?: DateTimeFilter<"SystemDictionaryData"> | Date | string
    updatedAt?: DateTimeFilter<"SystemDictionaryData"> | Date | string
    categoryId?: IntFilter<"SystemDictionaryData"> | number
  }

  export type SystemDictionaryCategoryCreateWithoutDictionaryDataInput = {
    name: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemDictionaryCategoryUncheckedCreateWithoutDictionaryDataInput = {
    id?: number
    name: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemDictionaryCategoryCreateOrConnectWithoutDictionaryDataInput = {
    where: SystemDictionaryCategoryWhereUniqueInput
    create: XOR<SystemDictionaryCategoryCreateWithoutDictionaryDataInput, SystemDictionaryCategoryUncheckedCreateWithoutDictionaryDataInput>
  }

  export type SystemDictionaryCategoryUpsertWithoutDictionaryDataInput = {
    update: XOR<SystemDictionaryCategoryUpdateWithoutDictionaryDataInput, SystemDictionaryCategoryUncheckedUpdateWithoutDictionaryDataInput>
    create: XOR<SystemDictionaryCategoryCreateWithoutDictionaryDataInput, SystemDictionaryCategoryUncheckedCreateWithoutDictionaryDataInput>
    where?: SystemDictionaryCategoryWhereInput
  }

  export type SystemDictionaryCategoryUpdateToOneWithWhereWithoutDictionaryDataInput = {
    where?: SystemDictionaryCategoryWhereInput
    data: XOR<SystemDictionaryCategoryUpdateWithoutDictionaryDataInput, SystemDictionaryCategoryUncheckedUpdateWithoutDictionaryDataInput>
  }

  export type SystemDictionaryCategoryUpdateWithoutDictionaryDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemDictionaryCategoryUncheckedUpdateWithoutDictionaryDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserRoleRelationCreateWithoutRoleInput = {
    user: SystemUsersCreateNestedOneWithoutRolesInput
  }

  export type SystemUserRoleRelationUncheckedCreateWithoutRoleInput = {
    userId: number
  }

  export type SystemUserRoleRelationCreateOrConnectWithoutRoleInput = {
    where: SystemUserRoleRelationWhereUniqueInput
    create: XOR<SystemUserRoleRelationCreateWithoutRoleInput, SystemUserRoleRelationUncheckedCreateWithoutRoleInput>
  }

  export type SystemUserRoleRelationCreateManyRoleInputEnvelope = {
    data: SystemUserRoleRelationCreateManyRoleInput | SystemUserRoleRelationCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SystemRoleMenuRelationCreateWithoutRoleInput = {
    menu: SystemMenusCreateNestedOneWithoutSystemRolesInput
  }

  export type SystemRoleMenuRelationUncheckedCreateWithoutRoleInput = {
    menuId: number
  }

  export type SystemRoleMenuRelationCreateOrConnectWithoutRoleInput = {
    where: SystemRoleMenuRelationWhereUniqueInput
    create: XOR<SystemRoleMenuRelationCreateWithoutRoleInput, SystemRoleMenuRelationUncheckedCreateWithoutRoleInput>
  }

  export type SystemRoleMenuRelationCreateManyRoleInputEnvelope = {
    data: SystemRoleMenuRelationCreateManyRoleInput | SystemRoleMenuRelationCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SystemUserRoleRelationUpsertWithWhereUniqueWithoutRoleInput = {
    where: SystemUserRoleRelationWhereUniqueInput
    update: XOR<SystemUserRoleRelationUpdateWithoutRoleInput, SystemUserRoleRelationUncheckedUpdateWithoutRoleInput>
    create: XOR<SystemUserRoleRelationCreateWithoutRoleInput, SystemUserRoleRelationUncheckedCreateWithoutRoleInput>
  }

  export type SystemUserRoleRelationUpdateWithWhereUniqueWithoutRoleInput = {
    where: SystemUserRoleRelationWhereUniqueInput
    data: XOR<SystemUserRoleRelationUpdateWithoutRoleInput, SystemUserRoleRelationUncheckedUpdateWithoutRoleInput>
  }

  export type SystemUserRoleRelationUpdateManyWithWhereWithoutRoleInput = {
    where: SystemUserRoleRelationScalarWhereInput
    data: XOR<SystemUserRoleRelationUpdateManyMutationInput, SystemUserRoleRelationUncheckedUpdateManyWithoutRoleInput>
  }

  export type SystemRoleMenuRelationUpsertWithWhereUniqueWithoutRoleInput = {
    where: SystemRoleMenuRelationWhereUniqueInput
    update: XOR<SystemRoleMenuRelationUpdateWithoutRoleInput, SystemRoleMenuRelationUncheckedUpdateWithoutRoleInput>
    create: XOR<SystemRoleMenuRelationCreateWithoutRoleInput, SystemRoleMenuRelationUncheckedCreateWithoutRoleInput>
  }

  export type SystemRoleMenuRelationUpdateWithWhereUniqueWithoutRoleInput = {
    where: SystemRoleMenuRelationWhereUniqueInput
    data: XOR<SystemRoleMenuRelationUpdateWithoutRoleInput, SystemRoleMenuRelationUncheckedUpdateWithoutRoleInput>
  }

  export type SystemRoleMenuRelationUpdateManyWithWhereWithoutRoleInput = {
    where: SystemRoleMenuRelationScalarWhereInput
    data: XOR<SystemRoleMenuRelationUpdateManyMutationInput, SystemRoleMenuRelationUncheckedUpdateManyWithoutRoleInput>
  }

  export type SystemUsersCreateWithoutRolesInput = {
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SystemUserProfileCreateNestedOneWithoutUserInput
    logs?: SystemLogsCreateNestedManyWithoutUserInput
  }

  export type SystemUsersUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    password: string
    type?: number
    status?: number
    orderNo?: number
    unionId?: string | null
    openId?: string | null
    loginIP?: string | null
    loginAt?: Date | string | null
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SystemUserProfileUncheckedCreateNestedOneWithoutUserInput
    logs?: SystemLogsUncheckedCreateNestedManyWithoutUserInput
  }

  export type SystemUsersCreateOrConnectWithoutRolesInput = {
    where: SystemUsersWhereUniqueInput
    create: XOR<SystemUsersCreateWithoutRolesInput, SystemUsersUncheckedCreateWithoutRolesInput>
  }

  export type SystemRolesCreateWithoutUsersInput = {
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menus?: SystemRoleMenuRelationCreateNestedManyWithoutRoleInput
  }

  export type SystemRolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menus?: SystemRoleMenuRelationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SystemRolesCreateOrConnectWithoutUsersInput = {
    where: SystemRolesWhereUniqueInput
    create: XOR<SystemRolesCreateWithoutUsersInput, SystemRolesUncheckedCreateWithoutUsersInput>
  }

  export type SystemUsersUpsertWithoutRolesInput = {
    update: XOR<SystemUsersUpdateWithoutRolesInput, SystemUsersUncheckedUpdateWithoutRolesInput>
    create: XOR<SystemUsersCreateWithoutRolesInput, SystemUsersUncheckedCreateWithoutRolesInput>
    where?: SystemUsersWhereInput
  }

  export type SystemUsersUpdateToOneWithWhereWithoutRolesInput = {
    where?: SystemUsersWhereInput
    data: XOR<SystemUsersUpdateWithoutRolesInput, SystemUsersUncheckedUpdateWithoutRolesInput>
  }

  export type SystemUsersUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SystemUserProfileUpdateOneWithoutUserNestedInput
    logs?: SystemLogsUpdateManyWithoutUserNestedInput
  }

  export type SystemUsersUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    orderNo?: IntFieldUpdateOperationsInput | number
    unionId?: NullableStringFieldUpdateOperationsInput | string | null
    openId?: NullableStringFieldUpdateOperationsInput | string | null
    loginIP?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SystemUserProfileUncheckedUpdateOneWithoutUserNestedInput
    logs?: SystemLogsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SystemRolesUpsertWithoutUsersInput = {
    update: XOR<SystemRolesUpdateWithoutUsersInput, SystemRolesUncheckedUpdateWithoutUsersInput>
    create: XOR<SystemRolesCreateWithoutUsersInput, SystemRolesUncheckedCreateWithoutUsersInput>
    where?: SystemRolesWhereInput
  }

  export type SystemRolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: SystemRolesWhereInput
    data: XOR<SystemRolesUpdateWithoutUsersInput, SystemRolesUncheckedUpdateWithoutUsersInput>
  }

  export type SystemRolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: SystemRoleMenuRelationUpdateManyWithoutRoleNestedInput
  }

  export type SystemRolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: SystemRoleMenuRelationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SystemRolesCreateWithoutMenusInput = {
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: SystemUserRoleRelationCreateNestedManyWithoutRoleInput
  }

  export type SystemRolesUncheckedCreateWithoutMenusInput = {
    id?: number
    name: string
    code: string
    status?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: SystemUserRoleRelationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type SystemRolesCreateOrConnectWithoutMenusInput = {
    where: SystemRolesWhereUniqueInput
    create: XOR<SystemRolesCreateWithoutMenusInput, SystemRolesUncheckedCreateWithoutMenusInput>
  }

  export type SystemMenusCreateWithoutSystemRolesInput = {
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: SystemMenusCreateNestedManyWithoutParentInput
    parent?: SystemMenusCreateNestedOneWithoutChildrenInput
  }

  export type SystemMenusUncheckedCreateWithoutSystemRolesInput = {
    id?: number
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    parentId?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: SystemMenusUncheckedCreateNestedManyWithoutParentInput
  }

  export type SystemMenusCreateOrConnectWithoutSystemRolesInput = {
    where: SystemMenusWhereUniqueInput
    create: XOR<SystemMenusCreateWithoutSystemRolesInput, SystemMenusUncheckedCreateWithoutSystemRolesInput>
  }

  export type SystemRolesUpsertWithoutMenusInput = {
    update: XOR<SystemRolesUpdateWithoutMenusInput, SystemRolesUncheckedUpdateWithoutMenusInput>
    create: XOR<SystemRolesCreateWithoutMenusInput, SystemRolesUncheckedCreateWithoutMenusInput>
    where?: SystemRolesWhereInput
  }

  export type SystemRolesUpdateToOneWithWhereWithoutMenusInput = {
    where?: SystemRolesWhereInput
    data: XOR<SystemRolesUpdateWithoutMenusInput, SystemRolesUncheckedUpdateWithoutMenusInput>
  }

  export type SystemRolesUpdateWithoutMenusInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: SystemUserRoleRelationUpdateManyWithoutRoleNestedInput
  }

  export type SystemRolesUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: SystemUserRoleRelationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SystemMenusUpsertWithoutSystemRolesInput = {
    update: XOR<SystemMenusUpdateWithoutSystemRolesInput, SystemMenusUncheckedUpdateWithoutSystemRolesInput>
    create: XOR<SystemMenusCreateWithoutSystemRolesInput, SystemMenusUncheckedCreateWithoutSystemRolesInput>
    where?: SystemMenusWhereInput
  }

  export type SystemMenusUpdateToOneWithWhereWithoutSystemRolesInput = {
    where?: SystemMenusWhereInput
    data: XOR<SystemMenusUpdateWithoutSystemRolesInput, SystemMenusUncheckedUpdateWithoutSystemRolesInput>
  }

  export type SystemMenusUpdateWithoutSystemRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SystemMenusUpdateManyWithoutParentNestedInput
    parent?: SystemMenusUpdateOneWithoutChildrenNestedInput
  }

  export type SystemMenusUncheckedUpdateWithoutSystemRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    parentId?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SystemMenusUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SystemMenusCreateManyParentInput = {
    id?: number
    name: string
    path: string
    component?: string | null
    query?: string | null
    icon?: string | null
    orderNo?: number
    type: number
    status?: number
    noClosable?: number
    hidden?: number
    activeMenu?: string | null
    guard?: string | null
    dot?: number
    badge?: string | null
    isFrame?: number | null
    isCache?: number
    permissionCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemRoleMenuRelationCreateManyMenuInput = {
    roleId: number
  }

  export type SystemMenusUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SystemMenusUpdateManyWithoutParentNestedInput
    systemRoles?: SystemRoleMenuRelationUpdateManyWithoutMenuNestedInput
  }

  export type SystemMenusUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SystemMenusUncheckedUpdateManyWithoutParentNestedInput
    systemRoles?: SystemRoleMenuRelationUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type SystemMenusUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    query?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    orderNo?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    noClosable?: IntFieldUpdateOperationsInput | number
    hidden?: IntFieldUpdateOperationsInput | number
    activeMenu?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: NullableStringFieldUpdateOperationsInput | string | null
    dot?: IntFieldUpdateOperationsInput | number
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    isFrame?: NullableIntFieldUpdateOperationsInput | number | null
    isCache?: IntFieldUpdateOperationsInput | number
    permissionCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemRoleMenuRelationUpdateWithoutMenuInput = {
    role?: SystemRolesUpdateOneRequiredWithoutMenusNestedInput
  }

  export type SystemRoleMenuRelationUncheckedUpdateWithoutMenuInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemRoleMenuRelationUncheckedUpdateManyWithoutMenuInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemLogsCreateManyUserInput = {
    id?: number
    api: string
    type: number
    status: number
    content: string
    username: string
    ip: string
    createdAt?: Date | string
  }

  export type SystemUserRoleRelationCreateManyUserInput = {
    roleId: number
  }

  export type SystemLogsUpdateWithoutUserInput = {
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    api?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserRoleRelationUpdateWithoutUserInput = {
    role?: SystemRolesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type SystemUserRoleRelationUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemUserRoleRelationUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemDictionaryDataCreateManyCategoryInput = {
    id?: number
    label: string
    value: string
    orderNo?: number
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemDictionaryDataUpdateWithoutCategoryInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemDictionaryDataUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemDictionaryDataUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    orderNo?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUserRoleRelationCreateManyRoleInput = {
    userId: number
  }

  export type SystemRoleMenuRelationCreateManyRoleInput = {
    menuId: number
  }

  export type SystemUserRoleRelationUpdateWithoutRoleInput = {
    user?: SystemUsersUpdateOneRequiredWithoutRolesNestedInput
  }

  export type SystemUserRoleRelationUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemUserRoleRelationUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemRoleMenuRelationUpdateWithoutRoleInput = {
    menu?: SystemMenusUpdateOneRequiredWithoutSystemRolesNestedInput
  }

  export type SystemRoleMenuRelationUncheckedUpdateWithoutRoleInput = {
    menuId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemRoleMenuRelationUncheckedUpdateManyWithoutRoleInput = {
    menuId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SystemMenusCountOutputTypeDefaultArgs instead
     */
    export type SystemMenusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemMenusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemUsersCountOutputTypeDefaultArgs instead
     */
    export type SystemUsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemUsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemDictionaryCategoryCountOutputTypeDefaultArgs instead
     */
    export type SystemDictionaryCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemDictionaryCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemRolesCountOutputTypeDefaultArgs instead
     */
    export type SystemRolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemRolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemMenusDefaultArgs instead
     */
    export type SystemMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemMenusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemUsersDefaultArgs instead
     */
    export type SystemUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemUsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemUserProfileDefaultArgs instead
     */
    export type SystemUserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemUserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemLogsDefaultArgs instead
     */
    export type SystemLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemLogsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemDictionaryCategoryDefaultArgs instead
     */
    export type SystemDictionaryCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemDictionaryCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemDictionaryDataDefaultArgs instead
     */
    export type SystemDictionaryDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemDictionaryDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemRolesDefaultArgs instead
     */
    export type SystemRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemRolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemUserRoleRelationDefaultArgs instead
     */
    export type SystemUserRoleRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemUserRoleRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemRoleMenuRelationDefaultArgs instead
     */
    export type SystemRoleMenuRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemRoleMenuRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use booksDefaultArgs instead
     */
    export type booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = booksDefaultArgs<ExtArgs>

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