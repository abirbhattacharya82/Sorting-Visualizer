var a=[80, 72, 53, 86, 98, 88, 52, 69, 73, 85, 95, 62, 76, 57, 59, 81, 88, 64, 53, 69, 90, 79, 98, 60, 50, 73, 98, 92, 59, 79, 58, 92, 57, 82, 73, 64, 65, 58, 62, 83, 98, 85, 65, 56, 84, 61, 75, 97, 71, 56];
function reset()
{
    var n=a.length;
    var b=[80, 72, 53, 86, 98, 88, 52, 69, 73, 85, 95, 62, 76, 57, 59, 81, 88, 64, 53, 69, 90, 79, 98, 60, 50, 73, 98, 92, 59, 79, 58, 92, 57, 82, 73, 64, 65, 58, 62, 83, 98, 85, 65, 56, 84, 61, 75, 97, 71, 56];
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