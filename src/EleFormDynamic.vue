<template>
  <form-dynamic
    :class="defDesc.class"
    :style="defDesc.style"
    v-bind="attrs"
    ref="form-dynamic"
    v-model="dataModel"
    v-on="onEvents"
  />
</template>

<script>
import FormDynamic from './FormDynamic'
import formItemMixin from 'vue-yd-form/lib/mixins/formItemMixin'

export default {
  name: 'EleFormDynamic',
  mixins: [formItemMixin],
  components: {
    FormDynamic
  },
  computed: {
    defaultAttrs() {
      return {
        placeholder: this.t('ele-form.input') + this.defDesc.label
      }
    }
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs['form-dynamic']
          .validate()
          .then(resolve)
          .catch(() => {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ [this.$parent.$props.prop]: '出错了' })
          })
      })
    }
  }
}
</script>
