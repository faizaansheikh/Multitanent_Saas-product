'use client'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle, CheckCircle } from "lucide-react"

export default function CustomAlert() {


  return (
    <>
      <Alert className="bg-green-100 text-green-900 border-green-400">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your settings have been saved.
        </AlertDescription>
      </Alert>
    </>
  );
}
