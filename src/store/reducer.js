const initialState ={
    formDetails:[
        {title:'',message:''}
    ],
    cardList:[
        {id:0,title:'Default',message:'this is a default message'}
    ],
    counter:0
}


const reducer = (state = initialState,action) => {

    const newState = {...state};

    if(action.type === 'HANDLE_TITLE'){
        var nState =   newState.formDetails.map((item)=>{
                   return {
                        ...item,
                        title:action.payload
                   }
               })
        newState.formDetails = [...nState];
               
    }
    if(action.type === 'HANDLE_MESSAGE'){
        var nState =   newState.formDetails.map((item)=>{
            return {
                 ...item,
                 message:action.payload
            }
        })
        newState.formDetails = [...nState];        
    }
    if(action.type === 'ADD_NOTES'){
                var obj ={};
                 obj.id = ++action.payload;
                 obj.title = newState.formDetails[0].title;
                 obj.message = newState.formDetails[0].message;
                 newState.cardList= [...newState.cardList,obj];
                 newState.counter = obj.id;
                 // clear 
                
    }
    if(action.type === "DELETE_NOTES"){
        var index = newState.cardList.findIndex(x => x.id === action.payload);
        var arr = [...newState.cardList]
        arr.splice(index, 1);
        newState.cardList= [...arr];
    }
    console.log(newState);
    return newState;
}


export default reducer;