const resetBtn = document.querySelector('button');
const container = document.querySelector('#container');
function createGrid(gridSize){
    
    
    for(let i=0, newline=0;i<gridSize*gridSize;i++,newline++){
        if(newline==gridSize){
            var br = document.createElement('br');
            container.appendChild(br);
            
            newline=0;
        }
        
        
        
        container.appendChild(document.createElement('div'));
        
    }
    
    document.querySelectorAll('#container div').forEach(boxes=>{
        boxes.style.width = `${400/gridSize}px`;
        boxes.style.height = `${400/gridSize}px`;
        console.log(400/gridSize);
        boxes.setAttribute('dimness', "75");
    });


   
    
    document.querySelectorAll('#container div').forEach((boxes)=>{
        boxes.addEventListener('mouseover', ()=>{
                
       
            
            
            
            boxes.style.backgroundColor = `hsl(0, 0%, ${parseInt(boxes.getAttribute('dimness')) -25}%)`;
            boxes.setAttribute('dimness', (parseInt(boxes.getAttribute('dimness')) -25).toString());
            
            
            
            
            console.log(boxes.classList);
        })
        
    });    
}

createGrid(16);




resetBtn.addEventListener('click',()=>{
    document.querySelectorAll('#container div').forEach((boxes)=>{   
        boxes.remove();

    })
    document.querySelectorAll('br').forEach(brTag=>{
        brTag.remove();
    })

    gridSize= 101;
    
    while (gridSize>100) {
        gridSize= window.prompt('How many Squares per side for new grid (ONLY ENTER ONE NUMBER!)')
    }

    createGrid(gridSize);
});



