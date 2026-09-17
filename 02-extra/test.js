function subsets(nums) {
    const result=[];
    const path=[]

    const backtrack=(start)=>{
        result.push([...path]);

        for (let i=start;i<nums.length;i++){
            path.push(nums[i]);
            backtrack(i+1)
            path.pop()
        }
    }


    backtrack(0)
    return result;
}

function rob(nums) {
    let prev1=0;
    let prev2=0

    for(let i=1;i<nums.length;i++){
        const current=Math.max(prev1,prev2+nums[i]);
        prev2=prev1;
        prev1=current;
    }

    return prev1
}

function numIslands(grid) {
    if(!grid.length) return 0;

    let count=0;

    function dfs(row,column){
        if(row<0||row>=grid.length||column<0||column>=grid.length) return ;

        if(grid[row][column]!=="1") return ;

        grid[row][column]="0";

        dfs(row,column+1);
         dfs(row+1,column);
          dfs(row-1,column);
           dfs(row,column-1);

    }

    for(let row=1;row<grid.length;row++){
        for(let column=1;column<grid[0].length;column++){
            if(grid[row][column]==="1") count++;
            dfs(row,column)
        }


    }

}
