"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitNextTick = waitNextTick;
/**
 * @description 进入下一个事件循环
 * @param {number} time - 等待的时间（毫秒）
 * @returns {Promise<boolean>} - 返回一个 Promise，表示等待完成
 * @example
 * // 使用示例
 * waitNextTick(1000).then(() => console.log('完成等待'));
 */
function waitNextTick(time = 0) {
    return new Promise((resolve) => setTimeout(() => resolve(true), time));
}
