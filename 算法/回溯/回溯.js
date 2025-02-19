function backtrack(problem) {
    const result = []; // 存储最终结果

    function backtrackHelper(current, /* 其他参数 */) {
        // 终止条件：如果当前解满足条件，将其加入结果
        if (/* 满足条件 */) {
            result.push([...current]); // 注意：需要复制当前解
            return;
        }

        // 遍历所有可能的选择
        for (let choice of /* 所有可能的选择 */) {
            // 做出选择
            current.push(choice);

            // 递归进入下一层
            backtrackHelper(current, /* 其他参数 */);

            // 撤销选择（回溯）
            current.pop();
        }
    }

    // 初始化并开始回溯
    backtrackHelper([], /* 初始参数 */);
    return result;
}