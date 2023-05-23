<template>
  <div class="card">
    <div class="card-body">
      <p class="text-uppercase text-sm">Photos</p>
      <div class="images-container">
        <div class="image-select" @click="triggerInput()">+ Add Image</div>
        <input
          class=""
          ref="images"
          type="file"
          @change="getImagesAndPush"
          hidden
          multiple
          accept="image/*"
        />
        <div class="image" v-for="(image, index) in images" :key="index">
          <img :src="image.blob" :alt="image.src" :title="image.src" />
          <a
            class="button btn btn-link text-danger text-gradient px-3 mb-0"
            @click="removeImg(index)"
          >
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </a>
          <span>{{ this.fileSize(image.size) }}</span>
        </div>
        <div class="image-upload" v-if="images.length > 0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#adadad">
            <path
              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z"
            />
          </svg>
          <div>Upload</div>
          <div>{{ images.length > 1 ? images.length + " images" : "Image" }}</div>
          <p>{{ this.fileSize(totalSize) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TravelCreatePhoto",
  data() {
    return {
      images: [],
      totalSize: 0,
    };
  },
  methods: {
    getImagesAndPush(e) {
      if (e.target.files.length > 0) {
        for (let i = 0; i < e.target.files.length; i++) {
          this.images.push({
            src: e.target.files[i].name,
            size: e.target.files[i].size,
            blob: URL.createObjectURL(e.target.files[i]),
          });
        }
      }
      this.totalFileSize();
    },
    removeImg(index) {
      this.images.splice(index, 1);
      this.totalFileSize();
    },
    triggerInput() {
      this.$refs.images.click();
    },
    fileSize(byte) {
      let kb = byte / 1024;
      let mb = byte * 0.00000095367432;
      if (mb > 1) {
        return mb.toFixed(2) + " mb";
      } else {
        return Math.floor(kb) + " kb";
      }
    },
    totalFileSize() {
      this.totalSize = 0;
      for (let i = 0; i < this.images.length; i++) {
        this.totalSize += this.images[i].size;
      }
    },
  },
};
</script>
<style scoped>
.images-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-sizing: border-box;
}
.images-container-empty {
  justify-content: center;
}
.image,
.image-select,
.image-upload {
  width: 15rem;
  height: 15rem;
  position: relative;
  border-radius: 0.5rem;
  transition: all 0.3s;
  animation: fade-in 0.5s ease forwards;
}
.image-select {
  border: 0.2rem dashed #adadad;
  color: #adadad;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: #f5f5f5;
}
.image-select:hover {
  background: #faf0d5;
  color: #777;
}
.image-upload {
  color: #777777;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border: 0.2rem solid transparent;
}
.image-upload > svg {
  height: 1.5rem;
  margin: 1rem 0 0.5rem 0;
}
img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: inherit;
}
.image > .button {
  position: absolute;
  margin: 0.5rem;
  top: 0;
  right: 0;
  border: none;
  border-radius: inherit;
  cursor: pointer;
}
span {
  position: absolute;
  font-size: 0.8rem;
  border-radius: inherit;
  background: #eaeaea;
  bottom: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0%);
  }
}
</style>
