import {defineComponent} from 'vue';
export default defineComponent({
  props:{
    text:String
  },
  setup(props){
    return ()=><div>{props.text}</div>
  }
})