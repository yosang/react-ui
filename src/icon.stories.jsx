import { ArrowRightIcon } from "./icons/action/ArrowRight";
import { ArrowLeftIcon } from "./icons/action/ArrowLeft";
import { MenuIcon } from "./icons/interface/MenuIcon";
import { HomeIcon } from "./icons/interface/HomeIcon"
import { SettingsIcon } from "./icons/interface/SettingsIcon"
import { TickIcon } from "./icons/forms/TickIcon";
import { PlusIcon } from "./icons/forms/PlusIcon";
import { InfoIcon } from "./icons/forms/InfoIcon"
import { TrashIcon } from "./icons/content/TrashIcon"
import { EditIcon } from "./icons/content/EditIcon"

export function Menu() {
    return <MenuIcon />
}

export function ArrowLeft() {
    return <ArrowLeftIcon />
}

export function ArrowRight() {
    return <ArrowRightIcon />
}

export function Home() {
    return <HomeIcon />
}

export function Settings() {
    return <SettingsIcon />
}

export function Tick() {
    return <TickIcon />
}

export function Plus() {
    return <PlusIcon />
}

export function Info() {
    return <InfoIcon />
}

export function Trash() {
    return <TrashIcon />
}

export function Edit() {
    return <EditIcon />
}