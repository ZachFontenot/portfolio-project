<template>
  <div class="do-something">
    <p>
      I just wanted to see if I could get code blocks highlighted and working.<br>
      This would be useful to me in the future, but in a Static Site Generator.<br>
      Here's some Erlang.
    </p>
    <highlightjs
      language="erlang"
      code="-module(hello).

-export([func/1, id/1]).

func(A) ->
    io:fwrite(&quot;You said ~s&quot;, [A]).

>> c(hello).
>> hello:func(&quot;Hello&quot;).
> &quot;You said Hello&quot;    
    "/>
      <p>
	And the identity function
      </p>
    <highlightjs
      language="erlang"
      code="id(A) ->
    A."/>
    <p>
      I don't really know Erlang very well. I write Elixir. Elixir is a Ruby-syntax inspired, Macro-having,
      Erlang byte-code compiling functional programming language.
    </p>
    <highlightjs
      language="elixir"
      code="for i <- 1..100_000 ​do​
  spawn(​fn​ -> Process.sleep(​:infinity​) ​end​)
end"/>
    <p>
      This Elixir code is fun. It spawns 100,000 processes.
      But why? Processes in the BEAM are not OS processes. They are lightweight, take up little memory,
      and don't run CPU while they aren't actively running computations. 
    </p>
  </div>
</template>

<script>
import 'highlight.js/styles/base16/ashes.css'
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
    align-content: flex-start;
    gap: 50px;
}

.do-something {
    text-align: left;
    font-size: 15pt;
    flex-basis: 20%;
    margin: auto;
    width: 55%;
    padding: 20px;
}	
</style>  
