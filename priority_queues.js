function PriorityQueue(){
    private this.queue = [];
    public this.insert = function(value){
        this.queue.push(value);
        return this;
    }
    public this.popPriority = function(){
        var max = this.queue[0];
        var idx = 0;
        for(var i = 0; i < this.queue.length; i++){
            if(this.queue[i] > max){
                max = this.queue[i];
                idx = i;
            }
        }
        while(this.queue[idx+1]){
            this.queue[idx] = this.queue[idx+1];
            idx++;
        }
        this.queue.pop();
        return max;
    }
}
