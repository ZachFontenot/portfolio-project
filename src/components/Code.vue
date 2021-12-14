<template>
  <div>
    <p class="do-something">
      I just wanted to see if I could get code blocks highlighted<br>
      and working.<br>
      This would be useful to me in the future, but in a Static Site<br>
      Generator.<br>
      Here's some Erlang.
    </p>
  </div>
  <div class="code">
    <highlightjs
      class="do-something"
      language="erlang"
      code="-module(hello).

-export(func/1).

func(A) ->
    io:fwrite(&quot;You said ~s&quot;, [A]).

>> c(hello).
>> hello:func(&quot;Hello&quot;).
> &quot;You said Hello&quot;    
    "/>
    <div>
      <p class="do-something code">
	And the identity function in JS
      </p>
    </div>
    <highlightjs
      class="do-something"
      language="javascript"
      code="const Func = (a) => {
  return a;
}"/>
  </div>
</template>

<script>
  import 'highlight.js/styles/base16/brush-trees-dark.css'
  import 'highlight.js/lib/common'
  import hljsVuePlugin from "@highlightjs/vue-plugin"
  
  export default {
    name: 'Code',
  components: {
    highlightjs: hljsVuePlugin.component
    }
  }
</script>

<style scoped>
div.code {
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  gap: 50px;
  width: 100%;
}
p.code {
  justify-self: flex-end;
  margin: auto;
  height: 50%;
  width: 50%;
}
.do-something {
  font-size: 16pt;
  flex-basis: 20%;
  margin: auto;
  padding: 20px;

}	
</style>  
