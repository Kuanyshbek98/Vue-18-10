<template>
  <div class="resume-main">
    <div class="resume-main__content">
      <h1 class="resume-main__title">Resume</h1>
      <div class="resume-main__avatar-block avatar-resume-main">
        <div class="avatar-resume-main__image">
          <div class="avatar-resume-main__cover avatar" :style="{backgroundImage: `url(https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80)`}"></div>
          <div class="avatar-resume-main__radius avatar" :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80')`}"></div>
        </div>
        <div class="avatar-resume-main-actions">
          <label class="avatar-resume-main__uploader">
            <input type="file" hidden>
            Upload new picture
          </label>
          <a class="avatar-resume-main__remove">Remove picture</a>
        </div>
      </div>
      <label class="resume-main__label">Address</label>
      <textarea placeholder="Your address"></textarea>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.resume-main__title {
  font-size: 24px;
  line-height: 33px;
  margin: 0 0 40px;
}
.avatar-resume-main {
  display: flex;
  align-items: center;
}
.avatar-resume-main__image {
  width: 183px;
  height: 183px;
  margin: 0 24px 0 0;
  border-radius: 0;
  position: relative;
}
.avatar-resume-main__cover, .avatar-resume-main__radius {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.avatar-resume-main__radius {
  border-radius: 0;
}
.avatar-resume-main__cover {
  z-index: 1;
}
.avatar-resume-main-actions {
  text-align: center;
}
.avatar-resume-main__uploader {
  border: 1px solid var(--blue-color);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 27px;
  display: block;
  margin-bottom: 16px;
  color: var(--blue-color);
  cursor: pointer;
}
.avatar-resume-main__remove {
  color: #84818A;
}
</style>
