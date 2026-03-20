export interface SipdBudget {
  regency: string;
  totalOtsusFund: number;
  educationAllocation: number;
}

export interface PddiktiCampus {
  regency: string;
  university: string;
  studentsCount: number;
  unpaidTuitionCount: number;
}

export interface BankDisbursement {
  regency: string;
  disbursementDate: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
}

export function checkThreeWayMatch(
  budget: SipdBudget,
  campus: PddiktiCampus,
  bank: BankDisbursement
): { isFraud: boolean; message: string } {
  // Fraud detection: If the bank shows funds are disbursed (absorbed), 
  // but Campus data shows unpaid tuition for affirmation students.
  const isAbsorbed = bank.status === 'SUCCESS';
  const hasUnpaidStudents = campus.unpaidTuitionCount > 0;

  if (isAbsorbed && hasUnpaidStudents) {
    return {
      isFraud: true,
      message: `Fraud Notification: Budget absorbed by Local Government, but ${campus.unpaidTuitionCount} students at ${campus.university} have unpaid tuition. Alert sent to BP3OKP admin.`
    };
  }

  return {
    isFraud: false,
    message: "Data verified. Financial flows align strictly with student data outputs."
  };
}

export function checkAutomaticBlocking(
  budget: SipdBudget, 
  hasRedScore: boolean
): { isBlocked: boolean; message: string } {
  const educationPercentage = (budget.educationAllocation / budget.totalOtsusFund) * 100;
  
  // The 30% Guardrail
  if (educationPercentage < 30 || hasRedScore) {
    return {
      isBlocked: true,
      message: `Delay Disbursement: Education allocation is ${educationPercentage.toFixed(1)}% (< 30%) or Public Feedback showed a Red Score.`
    };
  }

  return {
    isBlocked: false,
    message: "Proceed Disbursement: Governance and Allocation Guardrails met."
  };
}