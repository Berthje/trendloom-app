<script>
import InputField from '@/components/InputField.vue'
import ProfileForm from '@/components/ProfileForm.vue';

export default {
  name: 'AccountProfile',
  components: {
    InputField,
    ProfileForm
  },
  data() {
    return {
      personalDetailFields: [
        { id: 'firstname', label: 'First Name', placeholder: 'John', errorMessage: 'The first name field is required.', status: 'default', type: 'text' },
        { id: 'lastname', label: 'Last Name', placeholder: 'Doe', errorMessage: 'The last name field is required.', status: 'default', type: 'text' },
        { id: 'email', label: 'Email', placeholder: 'firstname.lastname@gmail.com', errorMessage: 'The email should be valid.', status: 'default', type: 'email' },
        { id: 'phone', label: 'Phone number', placeholder: '+12 345 67 89 00', errorMessage: 'The phone number should be valid.', status: 'default', type: 'tel' }
      ],
      passwordFields: [
        { id: 'oldPassword', label: 'Old Password', placeholder: 'Enter your old password', errorMessage: 'The old password field is required.', status: 'default', type: 'password' },
        { id: 'newPassword', label: 'New Password', placeholder: 'Enter your new password', errorMessage: 'The new password field is required.', status: 'default', type: 'password' },
      ],
      addressFields: [
        { id: 'address', label: 'Address', placeholder: '123 Main St', errorMessage: 'The address field is required.', status: 'default', type: 'text' },
        { id: 'type', label: 'Type (e.g. Residential, Business)', placeholder: 'Residential, Business', errorMessage: '', status: 'default', type: 'text' },
        { id: 'zipcode', label: 'Zip Code', placeholder: '12345', errorMessage: 'The zip code field is required.', status: 'default', type: 'text' },
        { id: 'city', label: 'City', placeholder: 'City', errorMessage: 'The city field is required.', status: 'default', type: 'text' },
        { id: 'state', label: 'State', placeholder: 'State', errorMessage: 'The state field is required.', status: 'default', type: 'text' },
        { id: 'country', label: 'Country', placeholder: 'Country', errorMessage: 'The country field is required.', status: 'default', type: 'text' },
      ]
    }
  }
}
</script>

<template>
  <main>
    <h1 class="font-bold text-2xl pb-2 border-b border-solid border-black ">My Profile</h1>
    <ProfileForm :fields="personalDetailFields" />
    <ProfileForm :fields="passwordFields" />
    <ProfileForm :fields="addressFields" />
  </main>
</template>
