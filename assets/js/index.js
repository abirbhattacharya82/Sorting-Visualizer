var a=[80, 72, 53, 86, 25, 22, 52, 69, 30, 26, 95, 62, 76, 57, 59, 81, 88, 37, 53, 40, 90, 79, 99, 60, 50, 73, 98, 23, 59, 21, 58, 92, 57, 82, 35, 64, 45, 58, 62, 83, 20, 85, 65, 56, 84, 61, 75, 97, 71, 56];
function reset()
{
    var n=a.length;
    var b=[80, 72, 53, 86, 25, 22, 52, 69, 30, 26, 95, 62, 76, 57, 59, 81, 88, 37, 53, 40, 90, 79, 99, 60, 50, 73, 98, 23, 59, 21, 58, 92, 57, 82, 35, 64, 45, 58, 62, 83, 20, 85, 65, 56, 84, 61, 75, 97, 71, 56];
    for(var i=0;i<n;i++)
    {
        var index=""+i;
        document.getElementById(index).style.width=""+b[i]+"%";
    }
    a=b;
}
function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function bubble_sort()
{
    var n=a.length;
    for(var i=0;i<n-1;i++)
    {
        for(var j=0;j<n-i-1;j++)
        {
            if(a[j]>a[j+1])
            {
                var t=a[j];
                a[j]=a[j+1];
                a[j+1]=t;
                await sleep(1)
                {
                    var x=""+j;
                    document.getElementById(x).style.width=""+a[j]+"%";
                    var y=""+(j+1);
                    document.getElementById(y).style.width=""+a[j+1]+"%";
                }
            }
        }
    }
    console.log(a);
}
async function selection_sort()
{
    var n=a.length;
    var i, j, min_idx;
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (a[j] < a[min_idx])
        {
            min_idx = j;
        }
        var t=a[i];
        a[i]=a[min_idx];
        a[min_idx]=t;
        await sleep(1)
        {
            var x=""+i;
            document.getElementById(x).style.width=""+a[i]+"%";
            var y=""+(min_idx);
            document.getElementById(y).style.width=""+a[min_idx]+"%";
        }
    }
    console.log(a);
}