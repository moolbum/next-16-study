"use client";
import { useState } from "react";
import { Checkbox, Button, Card, Input } from "@/components/atoms";
import { Dialog } from "@/components/molecule";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 flex flex-col gap-2">
      <main className="flex flex-col gap-2 max-w-3xl mx-auto">
        <Input />
        <Checkbox />
        <div className="flex gap-2">
          <Button>Button</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>

        <Card
          className="w-96"
          title="Card Title"
          description="Card Description"
          action={
            <Button variant="outline" size="sm">
              Action
            </Button>
          }
          footer={<p>Card Footer</p>}
        >
          <p>Card Content</p>
        </Card>

        <Dialog
          title="프로필 편집"
          open={isOpen}
          onOpenChange={setIsOpen}
          description="프로필을 수정하세요. 완료되면 저장을 클릭하세요."
          trigger={<Button variant="outline">Dialog 열기</Button>}
          footer={
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                취소
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                저장
              </Button>
            </div>
          }
        >
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name">이름</label>
              <Input id="name" defaultValue="홍길동" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="username">사용자명</label>
              <Input id="username" defaultValue="@honggildong" />
            </div>
          </div>
        </Dialog>
      </main>
    </div>
  );
}
