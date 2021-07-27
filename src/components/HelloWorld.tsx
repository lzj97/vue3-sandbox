import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return () => <h3>{props.text}</h3>
  },
})
