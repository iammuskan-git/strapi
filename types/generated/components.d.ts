import type { Schema, Attribute } from '@strapi/strapi';

export interface FormFormTest extends Schema.Component {
  collectionName: 'components_form_form_tests';
  info: {
    displayName: 'FormTest';
    icon: 'alien';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.form-test': FormFormTest;
    }
  }
}
