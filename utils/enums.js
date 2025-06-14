export const productLocationType = {
    A: 'A',
    A_ALLOW_B: 'A allow B',
    A_TO_B: 'A-B',
  };
  
  export const productPaymentType = {
    ONLINE_ONLY: 'Online Only',
    ONLINE_AND_COD: 'Online and COD',
  };
  
  export const leadAppointmentStatus = {
    NEW: 'New',
    CANCELLED: 'Cancelled',
    COMPLETED: 'Completed',
    WAITING: 'Waiting',
  };
  
  export const leadAppointmentStatusColour = {
    Cancelled: 'green',
    Completed: 'blue',
    Waiting: 'red',
  };

  export const fieldTypes = {
    TEXT: 'Text',
    FILE: 'File',
    DATE: 'Date',
    EMAIL: 'Email',
    BOOLEAN: 'Boolean',
    NUMBER: 'Number',
    // REGEX: 'Regex',
    SELECT_SYSTEM: 'Select (From System)',
    SELECT_CUSTOM: 'Select (Custom Values)',
    SELECT_CUSTOM_MULTIPLE: 'Select Multiple (Custom Values)',
    CHECKBOX: 'Checkbox',
  };
  
  export const fileTypes = {
    PDF: '.pdf',
    JPG: '.jpg',
    JPEG: '.jpeg',
    PNG: '.png',
  };
  export const documentStatus = {
    UN_VERIFIED: 'Un-verified',
    VERIFIED: 'Verified',
    REJECTED: 'Rejected',
    OLD: 'Old',
    EXPIRED: 'Expired',
  };
  export const paymentStatus = {
    COMPLETED: 'Completed',
    FAILED: 'Failed',
    PENDING: 'Pending',
    CLEARED: 'Cleared',
  };
  export const paymentType = {
    CREDIT: 'Credit',
    DEBIT: 'Debit',
  };