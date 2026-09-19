/**
 * 共有 numCourses 门课程，编号为 0～numCourses - 1。
 *
 * 依赖关系：
 *
 * prerequisites[i] = [course, prerequisite]
 *
 * 表示学习 course 前，必须先完成 prerequisite。
 *
 * 请判断是否能够完成所有课程：
 * @param numCourses
 * @param prerequisites
 */

/**
 *
 * 建立 prerequisite → course 的边
 * → 统计每门课程的入度
 * → 入度为 0 的课程入队
 * → 完成课程并将后续课程入度减 1
 * → 最后判断完成数量是否等于课程总数
 * 时间：O(V + E)
 * 空间：O(V + E)
 * @param numCourses
 * @param prerequisites
 */
function canFinish(numCourses, prerequisites) {
    // 完成课程 i 后，可以解锁哪些课程
    const graph=Array.from({length:numCourses},()=>[]);
    // 课程 i 还有几个前置课程
    const degree=new Array(numCourses).fill(0);

    // 建图并统计入度
    for(const [course,prerequisite] of prerequisites){
        graph[prerequisite].push(course);
        degree[course]++;
    }

     // 没有前置课程的课程，可以最先学习
    const queue=[];

    for(let course;course<numCourses;course++){
        if(degree[course]===0) queue.push(course)
    }

    let i=0;
    let complete=0
    while(i<queue.length){
        const course=queue[i++];
        complete++;

        // 完成当前课程，解除后续课程的依赖
        for(const nextCourse of graph[course]){
            degree[nextCourse]--;

            if(degree[nextCourse]===0){
                queue.push(nextCourse)
            }
        }
    }

    return complete===numCourses
}

/**
 * DFS 判断环
 *
 * 为每门课程设置三种状态：
 *
 * 0：未访问
 * 1：正在当前递归路径中
 * 2：已经访问完成
 *
 * 如果 DFS 遇到状态为 1 的课程，说明沿着当前路径又回到了它，存在环。
 *
 * 时间：O(V + E)
 * 空间：O(V + E)
 */

function canFinish2(numCourses, prerequisites) {
    const graph=Array.from({length:numCourses},()=>[]);

    for(const [course,prerequisite] of prerequisites){
        graph[prerequisite].push(course);
    }

    const state=new Array(numCourses).fill(0);

    const hasCycle=(course)=>{
        if(state[course]===1) return true;

        if(state[course]===2) return false;

       state[course]=1;
        for(const nextCourse of graph[course]){
            if(hasCycle(nextCourse)){
                return true;
            }
        }

        state[course]=2
        return false;
    }

    for(let course=0;course<numCourses;course++){
        if(hasCycle(course)){
            return false
        }
    }

    return true
}