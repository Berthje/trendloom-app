<script>
import ProfileForm from '@/components/ProfileForm.vue';
import AccountProfileService from '@/modules/AccountProfilePage/Services/AccountProfileService';

export default {
  name: 'AccountProfilePage',
  components: {
    ProfileForm
  },
  data() {
    return {
      service: new AccountProfileService(),
      profileData: {},
      personalDetailFields: [
        { id: 'first_name', label: 'first_name', placeholder: 'sample_firstname', errorMessage: 'first_name_required', status: 'default', type: 'text', value: '' },
        { id: 'last_name', label: 'last_name', placeholder: 'sample_lastname', errorMessage: 'last_name_required', status: 'default', type: 'text', value: '' },
        { id: 'email', label: 'email_address', placeholder: 'sample_email', errorMessage: 'email_valid', status: 'default', type: 'email', value: '' },
        { id: 'phone_number', label: 'phone_number', placeholder: 'sample_phone', errorMessage: 'phone_number_valid', status: 'default', type: 'tel', value: '' }
      ],
      addressFields: [
        { id: 'address', label: 'address', placeholder: 'sample_street', errorMessage: 'address_required', status: 'default', type: 'text', value: '' },
        { id: 'type', label: 'address_type', placeholder: 'residential_business', errorMessage: '', status: 'default', type: 'text', value: '' },
        { id: 'zip', label: 'zip_code', placeholder: 'sample_zip', errorMessage: 'zip_code_required', status: 'default', type: 'text', value: '' },
        { id: 'city', label: 'city', placeholder: 'city', errorMessage: 'city_required', status: 'default', type: 'text', value: '' },
        { id: 'state', label: 'state', placeholder: 'state', errorMessage: 'state_required', status: 'default', type: 'text', value: '' },
        { id: 'country', label: 'country', placeholder: 'country', errorMessage: 'country_required', status: 'default', type: 'text', value: '' },
      ],
      passwordFields: [
        { id: 'oldPassword', label: 'old_password', placeholder: 'enter_your_old_password', errorMessage: 'old_password_required', status: 'default', type: 'password' },
        { id: 'newPassword', label: 'new_password', placeholder: 'enter_your_new_password', errorMessage: 'new_password_required', status: 'default', type: 'password' },
      ]
    }
  },
  methods: {
    validateAddressFields() {
      this.addressFields.forEach(field => {
        if (!field.value) {
          field.status = 'error';
        }
      });
    },
    setProfileData() {
      this.personalDetailFields.forEach(field => {
        field.value = this.profileData[field.id];
      });

      this.addressFields.forEach(field => {
        field.value = this.profileData.address[field.id];
      });
    },
    async fetchProfileData() {
      const response = await this.service.getProfileData();
      this.profileData = response[0];

      this.setProfileData();
    },
    async save(formData) {
      await this.service.save(formData.type, formData.fields);
    }
  },
  async created() {
    await this.fetchProfileData();
    this.validateAddressFields();
  },
}
</script>

<template>
  <main>
    <h1 class="font-bold text-2xl pb-2 border-b border-solid border-black ">{{ $t('my_profile') }}</h1>
    <ProfileForm :fields="personalDetailFields" type="personalDetails" @save="save" />
    <ProfileForm :fields="addressFields" type="address" @save="save" />
    <ProfileForm :fields="passwordFields" type="password" @save="save" />
  </main>
</template>
