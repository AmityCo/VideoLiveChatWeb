<template>
  <div id="ProfilePicture">
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
  name: "ProfilePicture",
  props: ["user"],
  computed: {
    isAvatar: ({ user }) => user?.model?.avatarFileId,
  },
  data: () => ({
    placeholder_img: require("@/assets/avatar_placeholder.svg"),
  }),
};
</script>
