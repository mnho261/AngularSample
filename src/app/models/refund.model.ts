export class Refund {
    refundTrackingId: number;
    refundType: string;
    accountId: number;
    accountName: string;
    chargeDateFrom: string;
    chargeDateTo: string;
    branch: string;
    amount: number;
    refundReason: string; 
    comments: string;
    submittedBy: string;
    submittedDate: string; 
    deletedStatus: boolean; 
    status: string; 
    canceledBy: string;
    canceledDate: string; 
    transmittedDate: string; 
    transactionDate: string; 
    acceptedBy: string;
    updatedBy: string;
}