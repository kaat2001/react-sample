import { RouteObject } from "react-router-dom";
import CustomersManagement from "./components/customers/customersManagement";
import SuppliersManagement from "./components/suppliers/suppliersManagement";
import BanksManagement from "./components/banks/banksManagement";
import InvoicesSection from "./components/invoices/invoicesSection";
import { RootLayout } from "./components/layouts/rootLayout";

export const ROUTES: RouteObject[] = [
    {
        path: "/",
        //loader: userLoader,
        element: <RootLayout />,
        children: [
            {
                id:  "AdministrationSection",
                path: "administration",
                children: [
                    { id: "CustomersPage", path: "customers", element: <CustomersManagement /> },
                    { id: "SuppliersPage", path: "suppliers", element: <SuppliersManagement /> },
                    { id: "BanksPage", path: "banks", element: <BanksManagement /> },
                ],
        },
        {
            id:  "InvoicesSection",
            path: "invoices",
            element: <InvoicesSection />
        }
        ],
    },
    ];