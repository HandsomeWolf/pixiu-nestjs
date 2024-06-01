
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SystemMenusScalarFieldEnum = {
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

exports.Prisma.SystemUsersScalarFieldEnum = {
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

exports.Prisma.SystemUserProfileScalarFieldEnum = {
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

exports.Prisma.SystemLogsScalarFieldEnum = {
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

exports.Prisma.SystemDictionaryCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  orderNo: 'orderNo',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SystemDictionaryDataScalarFieldEnum = {
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

exports.Prisma.SystemRolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  status: 'status',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SystemUserRoleRelationScalarFieldEnum = {
  userId: 'userId',
  roleId: 'roleId'
};

exports.Prisma.SystemRoleMenuRelationScalarFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId'
};

exports.Prisma.BooksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  author: 'author',
  price: 'price',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
