import { bank_management } from './index_api';

// predict-loan-approval
// Predict if a loan will be approved
export const predictLoanApproval = data =>
  bank_management.post('predict-loan/', data);
