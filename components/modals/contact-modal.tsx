import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

import { useLanguage } from "@/providers/language-provider";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useLenisModal } from "@/hooks/use-lenis-modal";
import { sanitizePhone } from "@/lib/utils";
import { ShineButton } from "@/components/ui/shine-button";

interface ContactModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}