'use client'

import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { useWeb3Dispatch } from "@/context/web3Provider";


export default function ChainSelect({ label, chains }) {
  const dispatch = useWeb3Dispatch()
  return (
    <Select
      label={label}
      placeholder="Select Chians"
      items={chains}
      className="max-w-xs"
      variant="flat"
      classNames={{
        label: "group-data-[filled=true]:-translate-y-5",
        trigger: "min-h-unit-16",
        listboxWrapper: "max-h-[400px]",
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        },
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data.logo.src}
            />
            <div className="flex flex-col">
              <span>{item.data.name}</span>
            </div>
          </div>
        ));
      }}
      onChange={async (e) => {
        console.log('abc', e.target.value)
        let type = ''
        if (label === 'Source From') {
          type = 'onPickedFrom'
        }

        if (label === 'Target To') {
          type = 'onPickedTarget'
        }
        dispatch({type, chainId: Number(e.target.value)})
      }}
      onOpenChange={async (isOpen) => {
        console.log('select', label, { isOpen })
        if (!isOpen) return
        let type = ''
        if (label === 'Source From') {
          type = 'onSelectFrom'
        }

        if (label === 'Target To') {
          type = 'onSelectTarget'
        }
        dispatch({type})
      }}
    >
      {(chain) => (
        <SelectItem key={chain.id} textValue={chain.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={chain.name} className="flex-shrink-0" size="sm" src={chain.logo.src} />
            <div className="flex flex-col">
              <span className="text-small">{chain.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
