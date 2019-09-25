<template>
  <div id="cart-reduce-wrap" class="prism-theme">
  	<strong>DEMO 1</strong>
  	<div class="dm-contain">
  		这里以<a style="display:inline-block;" href="https://www.tech-electronic.com">tech-electronic.com</a>的购物车为例, <a href="https://github.com/LPDLKBN/tech-electronic.com">项目源码下载</a>
  	</div>
  	<strong>html</strong>
	<pre class="line-numbers" style="white-space:pre-wrap;max-height:600px;">
	  <code ref="message" class="language-html">
  		// 普通付款表单验证
  		&ltform data-action="app/payment.php?type=<?=$url?>" action="app/payment.php?type=<?=$url?>" method="post" id="defaultForm" class="form-horizontal" target="_blank"&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3 align-items-center"&gt
            &ltlabel for="countrySelector" class="control-label"&gtCOUNTRY *&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltselect onchange="FunReg(this.id);" name="country" id="countrySelector" class="form-control"&gt
              &ltoption value="" SELECTED &gt&lt/option&gt
              &ltoption value="AU" &gtAUSTRALIA&lt/option&gt
              &ltoption value="AT" &gtAUSTRIA&lt/option&gt
              &ltoption value="BE" &gtBELGIUM&lt/option&gt
              &ltoption value="CA" &gtCANADA&lt/option&gt
              &ltoption value="DK" &gtDENMARK&lt/option&gt
              &ltoption value="FI" &gtFINLAND&lt/option&gt
              &ltoption value="FR" &gtFRANCE&lt/option&gt
              &ltoption value="DE" &gtGERMANY&lt/option&gt
              &ltoption value="IE" &gtIRELAND&lt/option&gt
              &ltoption value="IL" &gtISRAEL&lt/option&gt
              &ltoption value="IT" &gtITALY&lt/option&gt
              &ltoption value="JP" &gtJAPAN&lt/option&gt
              &ltoption value="KZ" &gtKAZAKHSTAN&lt/option&gt
              &ltoption value="NL" &gtNETHERLANDS&lt/option&gt
              &ltoption value="NZ" &gtNEW ZEALAND &lt/option&gt
              &ltoption value="NO" &gtNORWAY&lt/option&gt
              &ltoption value="PH" &gtPHILIPPINES&lt/option&gt
              &ltoption value="PL" &gtPOLAND&lt/option&gt
              &ltoption value="RU" &gtRUSSIA&lt/option&gt
              &ltoption value="SG" &gtSINGAPORE&lt/option&gt
              &ltoption value="ES" &gtSPAIN&lt/option&gt
              &ltoption value="SE" &gtSWEDEN&lt/option&gt
              &ltoption value="CH" &gtSWITZERLAND&lt/option&gt
              &ltoption value="GB" &gtUNITED KINGDOM&lt/option&gt
              &ltoption value="US" selected&gtUNITED STATES&lt/option&gt
            &lt/select&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="personname"class="control-label"&gtPersonname &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="personname" id="personname" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="state" class="control-label"&gtstate &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="state" id="state" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="city" class="control-label"&gtcity &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="city" id="city" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="address1" class="control-label"&gtaddress &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="address1" id="address1" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="address2" class="control-label"&gtaddress2&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="address2" id="address2" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="postal" class="control-label"&gtpostal &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="postal" id="postal" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="phone" class="control-label"&gtphone &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="text" class="form-control" name="phone" id="phone" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="email" class="control-label"&gtemail &ltsup&gt*&lt/sup&gt&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &ltinput type="email" class="form-control" name="email" id="email" /&gt
          &lt/div&gt
        &lt/div&gt
        &ltdiv class="row form-group"&gt
          &ltdiv class="col-lg-3"&gt
            &ltlabel for="attention" class="control-label"&gtattention&lt/label&gt
          &lt/div&gt
          &ltdiv class="col-lg-9"&gt
            &lttextarea type="text" name="attention" id="attention" class="form-control" id="attention" autocomplete="on" value=""/&gt &lt/textarea&gt
          &lt/div&gt
        &lt/div&gt
      &lt/form&gt
	  </code>
	</pre>
  </div>
</template>

<script>
// import Prism from 'prismjs'

export default {
  name: 'BootstrapValidator',
  data () {
    return {
      msg: 'BootstrapValidator'
    }
  },
  mounted: function () {
  	Prism.highlightAll()
  },
  methods: {

  }
}
</script>

<style>

</style>
