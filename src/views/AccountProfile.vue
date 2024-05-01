<script>
import ProfileForm from '@/components/ProfileForm.vue';

export default {
  name: 'AccountProfile',
  components: {
    ProfileForm
  },
  data() {
    return {
      personalDetailFields: [
        { id: 'firstname', label: 'first_name', placeholder: 'sample_firstname', errorMessage: 'first_name_required', status: 'default', type: 'text', value: '' },
        { id: 'lastname', label: 'last_name', placeholder: 'sample_lastname', errorMessage: 'last_name_required', status: 'default', type: 'text', value: '' },
        { id: 'email', label: 'email_address', placeholder: 'sample_email', errorMessage: 'email_valid', status: 'default', type: 'email', value: '' },
        { id: 'phone', label: 'phone_number', placeholder: 'sample_phone', errorMessage: 'phone_number_valid', status: 'default', type: 'tel', value: '' }
      ],
      addressFields: [
        { id: 'address', label: 'address', placeholder: 'sample_street', errorMessage: 'address_required', status: 'default', type: 'text', value: '' },
        { id: 'type', label: 'address_type', placeholder: 'residential_business', errorMessage: '', status: 'default', type: 'text', value: '' },
        { id: 'zipcode', label: 'zip_code', placeholder: 'sample_zip', errorMessage: 'zip_code_required', status: 'default', type: 'text', value: '' },
        { id: 'city', label: 'city', placeholder: 'city', errorMessage: 'city_required', status: 'default', type: 'text', value: '' },
        { id: 'state', label: 'state', placeholder: 'state', errorMessage: 'state_required', status: 'default', type: 'text', value: '' },
        { id: 'country', label: 'country', placeholder: 'country', errorMessage: 'country_required', status: 'default', type: 'text', value: '' },
      ],
      passwordFields: [
        { id: 'oldPassword', label: 'old_password', placeholder: 'enter_your_old_password', errorMessage: 'old_password_required', status: 'default', type: 'password' },
        { id: 'newPassword', label: 'new_password', placeholder: 'enter_your_new_password', errorMessage: 'new_password_required', status: 'default', type: 'password' },
      ]
    }
  }
}
</script>

<template>
  <main>
    <h1 class="font-bold text-2xl pb-2 border-b border-solid border-black ">{{ $t('my_profile') }}</h1>
    <ProfileForm :fields="personalDetailFields" />
    <ProfileForm :fields="addressFields" />
    <ProfileForm :fields="passwordFields" />
  </main>
</template>
