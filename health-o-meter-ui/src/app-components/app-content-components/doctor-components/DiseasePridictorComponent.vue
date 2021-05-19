<template>
  <div class="az-content-body pd-lg-l-40 d-flex flex-column">
    <div class="az-content-label mg-t-20 mg-b-5">Valid State Input</div>
    <p class="mg-b-20">A form control with success, warning and error state.</p>

    <div class="az-content-label mg-t-20 mg-b-5">Enter various input:</div>
    <form class="needs-validation was-validated">
      <div class="row row-sm">
        <div class="col-lg-3">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (success state)"
              value=""
              required
              type="text"
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <div class="form-group mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->

        <div class="col-lg-3 mg-t-20 mg-lg-t-5">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->

        <div class="col-lg-3 mg-t-20 mg-lg-t-5">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->

        <div class="col-lg-3 mg-t-20 mg-lg-t-5">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->

        <div class="col-lg-3 mg-t-20 mg-lg-t-5">
          <div class="form-group  mg-b-0">
            <input
              class="form-control"
              placeholder="Input box (invalid state)"
              type="text"
              required
            />
          </div>
          <!-- form-group -->
        </div>
        <!-- col -->

        <div class="az-content-label mg-t-20 mg-b-5">Select the Disease:</div>
      </div>
      <!-- row -->
      <div class="row">
        <div class="col-lg-3">
          <label class="ckbox">
            <input type="checkbox" /><span>Checkbox Uncheck</span>
          </label>
        </div>
        <!-- col-3 -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <label class="ckbox">
            <input type="checkbox" checked /><span>Checkbox Checked</span>
          </label>
        </div>
        <!-- col-3 -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <label class="ckbox">
            <input type="checkbox" disabled /><span>Checkbox Disabled</span>
          </label>
        </div>
        <!-- col-3 -->
      </div>
      <!-- row -->
      <div class="az-content-label mg-t-20 mg-b-5">Select the Model:</div>
      <div class="row mg-t-10">
        <div class="col-lg-3">
          <label class="rdiobox">
            <input name="rdio" type="radio" />
            <span>Radio Unchecked</span>
          </label>
        </div>
        <!-- col-3 -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <label class="rdiobox">
            <input name="rdio" type="radio" checked />
            <span>Radio Checked</span>
          </label>
        </div>
        <!-- col-3 -->
        <div class="col-lg-3 mg-t-20 mg-lg-t-0">
          <label class="rdiobox">
            <input name="rdio" type="radio" disabled />
            <span>Radio Disabled</span>
          </label>
        </div>
        <!-- col-3 -->
      </div>
      <!-- row -->

      <div class="row mg-t-10">
        <div class="col-sm-6 col-md-3"><button class="btn btn-az-primary btn-block">Submit</button></div>
      </div>
       
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
