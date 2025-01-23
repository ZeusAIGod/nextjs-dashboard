// import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '../ui/dashboard/revenue-chart';
// import LatestInvoices from '../ui/dashboard/latest-invoices';
import { lusitana } from '../ui/fonts';

// import { fetchCardData } from '../lib/data';

export default async function Page() {
    // const { 
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    //     numberOfInvoices,
    //     numberOfCustomers
    // } = await fetchCardData(); // wait for fetchLatestInvoices() to finish

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
        </main>
    )
}
