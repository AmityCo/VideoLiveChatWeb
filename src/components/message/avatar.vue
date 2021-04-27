<template>
  <div id="Avatar">
    <figure class="image is-24x24">
      <img
        class="is-rounded"
        :src="isAvatar ? user.model.avatarFileId : placeholder_img"
        alt="avatar"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["user"],
  computed: {
    isAvatar: ({ user }) => user?.model?.avatarFileId,
  },
  data: () => ({
    placeholder_img: require("@/assets/avatar_placeholder.svg"),
  }),
};
</script>
