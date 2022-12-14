/**
 * @file config.js
 */

/**
 * app 启动的端口号
 * @type {number}
 */
export const port = 4100;

/**
 * request 的 base url
 * @type {string}
 */
export const baseUrl = '/labor-analgesia';

/**
 * 数据库连接配置
 * @type {{charset: string, database: string, port: number, host: string, username: string}}
 */
export const database = {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'labor_analgesia',
    charset: 'utf8mb4'
};

export default {
    port,
    baseUrl,
    database
};
